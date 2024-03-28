import { GridColDef } from "@mui/x-data-grid";

export const columns: GridColDef[] = [
    { field: 'name', headerName: 'Nazwa tagu', width: 200, sortable: false },
    { field: 'count', headerName: 'Ilość wystąpień', width: 200 },
];

export const pageSizeValues = [10, 25, 50];
