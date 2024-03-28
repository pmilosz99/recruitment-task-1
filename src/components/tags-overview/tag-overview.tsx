import { useEffect, useState } from "react";

import { usePagination } from "../../shared/hooks";

import { CustomDataTable } from "../custom-data-table";

import { useTags } from "../../data-access/tag";

import { columns } from "./consts";
import { defaultQueryParams } from "../custom-data-table/consts";

export const TagsOverview = () => {
    const [rowCountState, setRowCountState] = useState(0);
    const { 
        page, 
        setPage, 
        pageSize, 
        setPageSize, 
        order, 
        setOrder,
     } = usePagination();

    const { 
        data, 
        isError, 
        isLoading, 
        refetch 
    } = useTags({ ...defaultQueryParams, ...{ page: page + 1, pageSize, order }});

    const handleRowCountLoading = (): void => {
        if (data?.total === undefined) return;

        setRowCountState(data?.total);
    };

    useEffect(handleRowCountLoading, [data?.total]);

    return (
        <CustomDataTable 
            title="Rejestr tagów ze stackoverflow"
            columns={columns}
            rows={data?.items || []}
            rowCount={rowCountState || 0}
            isError={isError}
            isLoading={isLoading}
            refetch={refetch}
            page={page}
            pageSize={pageSize}
            setOrder={setOrder}
            setPage={setPage}
            setPageSize={setPageSize}
        />
    )
};
