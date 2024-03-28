import { Dispatch } from "react";

export type TQueryParams = Record<string, string | number>;

export type TOrder = 'asc' | 'desc';

export interface IUsePagination {
    page: number;
    setPage: Dispatch<React.SetStateAction<number>>;
    pageSize: number;
    setPageSize: Dispatch<React.SetStateAction<number>>;
    order: TOrder;
    setOrder: Dispatch<React.SetStateAction<TOrder>>;
}
