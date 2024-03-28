import { useState } from "react";

import { pageSizeValues } from "../components/custom-data-table/consts";

import { TOrder } from "./types";
import { IUsePagination } from "./types";

export const usePagination = (): IUsePagination => {
    const [page, setPage] = useState(0);
    const [pageSize, setPageSize] = useState(pageSizeValues[1]);
    const [order, setOrder] = useState<TOrder>('desc');

    return {
        page,
        setPage,
        pageSize,
        setPageSize,
        order,
        setOrder,
    }
};
