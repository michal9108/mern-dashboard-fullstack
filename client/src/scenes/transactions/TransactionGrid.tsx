import React, { useState } from "react";
import { Box, useTheme } from "@mui/material";
import { DataGrid, GridCellParams } from "@mui/x-data-grid";
import TransactionalDataProcessor from "@/state/TransactionalDataProcessor";
import { useGetTransactionsQuery } from "@/state/api";
// import Header from "components/Header";
// import DataGridCustomToolbar from "components/DataGridCustomToolbar";

const TransactionGrid = () => {

    const {transactionalData } = TransactionalDataProcessor();
    const theme = useTheme();

    // values to be sent to the backend
    const [page, setPage] = useState(0);
    const [pageSize, setPageSize] = useState(20);
    const [sort, setSort] = useState({});
    const [search, setSearch] = useState("");
  
    const [searchInput, setSearchInput] = useState("");
    // const { data: transactionalData , isLoading } = useGetTransactionsQuery({
    //   page,
    //   pageSize,
    //   sort: JSON.stringify(sort),
    //   search,
    // });
    // const { data: transactionalData } = useGetTransactionsQuery();

    const columns = [
      {
        field: "_id",
        headerName: "ID",
        flex: 1,
      },
      {
        field: "buyer",
        headerName: "Buyer",
        flex: 1,
      },
      {
        field: "amount",
        headerName: "Amount",
        flex: 0.35,
        renderCell: (params: GridCellParams) => `$${params.value}`,
      },
      {
        field: "productIds",
        headerName: "Count",
        flex: 0.1,
        renderCell: (params: GridCellParams) =>
          (params.value as Array<string>).length,
      },
    ];


  return (
    <Box m="1.5rem 1.5rem">
      {/* <Header title="TRANSACTIONS" subtitle="Entire list of transactions" /> */}
      <Box
        height="80vh"
        // sx={{
        //   "& .MuiDataGrid-root": {
        //     border: "none",
        //     color: theme.palette.secondary.light,
            
        //   },
        //   "& .MuiDataGrid-cell": {
        //     borderBottom: `1px solid ${theme.palette.secondary.light} !important`,
        //   },
        //   "& .MuiDataGrid-columnHeaders": {
        //     backgroundColor: theme.palette.text.primary,
        //     borderBottom: `1px solid ${theme.palette.secondary.light} !important`,
           
        //   },
        //   "& .MuiDataGrid-virtualScroller": {
        //     backgroundColor: theme.palette.primary.light,
        //   },
        //   "& .MuiDataGrid-footerContainer": {
        //     backgroundColor: theme.palette.text.primary,
        //     color: theme.palette.secondary[100],
        //     borderTop: "none",
        //   },
        //   "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
        //     color: `${theme.palette.secondary[200]} !important`,
        //   },
        // }}
        // sx={{
        //     "& .MuiDataGrid-root": {
        //       color: theme.palette.secondary.light,
        //       border: "none",
        //     },
        //     "& .MuiDataGrid-cell": {
        //       borderBottom: `1px solid ${theme.palette.secondary.light} !important`,
        //     },
        //     "& .MuiDataGrid-columnHeaders": {
        //       borderBottom: `1px solid ${theme.palette.secondary.light} !important`,
        //     },
        //     "& .MuiDataGrid-columnSeparator": {
        //       visibility: "hidden",
        //     },
        //     "& .MuiDataGrid-menuIconButton": {
        //       color: theme.palette.secondary.light,
        //     },
        //   }}


      >
        <DataGrid
         
          getRowId={(row) => row._id}
          rows={ transactionalData || []}
          columns={columns}
        //   rowCount={(data && data.total) || 0}
        //   rowsPerPageOptions={[20, 50, 100]}
          pagination
        //   page={page}
        //   pageSize={pageSize}
          paginationMode="server"
          sortingMode="server"
       
        //   onPageChange={(newPage) => setPage(newPage)}
        //   onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        //   onSortModelChange={(newSortModel) => setSort(...newSortModel)}
        //   components={{ Toolbar: DataGridCustomToolbar }}
        //   componentsProps={{
        //     toolbar: { searchInput, setSearchInput, setSearch },
        //   }}
        />
      </Box>
    </Box>
  )
}

export default TransactionGrid
