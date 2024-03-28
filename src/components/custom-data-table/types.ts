import { GridColDef, GridRowsProp } from "@mui/x-data-grid";
import { IUsePagination } from "../../shared/types";

export interface ICustomDataTable {
    title: string;
    columns: GridColDef[];
    rows: GridRowsProp;
    rowCount: number;
    isLoading: boolean;
    isError: boolean;
    page: IUsePagination['page'];
    setPage: IUsePagination['setPage'];
    pageSize: IUsePagination['pageSize'];
    setPageSize: IUsePagination['setPageSize'];
    setOrder: IUsePagination['setOrder'];
    refetch: () => void;
}
