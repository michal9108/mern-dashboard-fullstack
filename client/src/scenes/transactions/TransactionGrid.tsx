import React, { useState } from "react";
import { Box, useTheme } from "@mui/material";
import { DataGrid, GridCellParams } from "@mui/x-data-grid";
import TransactionalDataProcessor from "@/state/TransactionalDataProcessor";
import { useGetTransactionsQuery } from "@/state/api";


const TransactionGrid = () => {

    const {transactionalData } = TransactionalDataProcessor();
    const theme = useTheme();

    // values to be sent to the backend
    const [page, setPage] = useState(0);
    const [pageSize, setPageSize] = useState(20);
    const [sort, setSort] = useState({});
    const [search, setSearch] = useState("");
  
    const [searchInput, setSearchInput] = useState("");
   

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
      <Box
        height="80vh"
      >
        <DataGrid       
          getRowId={(row) => row._id}
          rows={ transactionalData || []}
          columns={columns}
          pagination    
          paginationMode="server"
          sortingMode="server"      
        />
      </Box>
    </Box>
  )
}

export default TransactionGrid
