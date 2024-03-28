import { FC, ReactElement } from "react";
import { Alert, Box, Button, LinearProgress, Typography } from "@mui/material";
import { DataGrid, GridPaginationModel, GridSlots, GridSortModel } from "@mui/x-data-grid";

import { pageSizeValues } from "./consts";

import { ICustomDataTable } from "./types";
import { TOrder } from "../../shared/types";

export const CustomDataTable: FC<ICustomDataTable> = ({
    title,
    columns,
    rows,
    rowCount,
    isLoading,
    isError,
    page,
    setPage,
    pageSize,
    setPageSize,
    refetch,
    setOrder,
}) => {
    const handleSortModelChange = (model: GridSortModel): void => {
        if (!model.length) return;

        setOrder(model[0].sort as TOrder);
    }

    const handlePaginationModelChange = ({ page, pageSize }: GridPaginationModel): void => {
        setPage(page);
        setPageSize(pageSize);
    };

    const renderContent = (): ReactElement => {
        if (isError) {
            return (
                <>
                    <Alert severity="error">Wystąpił błąd podczas ładowania danych.</Alert>
                    <Button onClick={() => refetch()} variant="outlined" sx={{m: '10px 0 0 0'}}>Odśwież</Button>
                </>
            )
        }

        return (
            <DataGrid 
                columns={columns}
                rows={rows || []}
                getRowId={(row) => row.name + row.count}
                density="compact"
                rowCount={rowCount}
                pageSizeOptions={pageSizeValues}
                disableColumnMenu
                disableRowSelectionOnClick
                sortingOrder={['asc', 'desc']}
                sortingMode="server"
                paginationMode="server"
                paginationModel={{ page, pageSize }}
                onPaginationModelChange={handlePaginationModelChange}
                onSortModelChange={handleSortModelChange}
                loading={isLoading}
                slots={{
                    loadingOverlay: LinearProgress as GridSlots['loadingOverlay'],
                  }}
                sx={{overflowY: 'auto', height: '90vh'}}
            />
        )
    }

    return (
        <Box>
            <Typography variant="h6" sx={{p: 1}}>
                {title}
            </Typography>
            {renderContent()}
        </Box>
    );
}