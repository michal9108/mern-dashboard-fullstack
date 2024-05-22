import { BoxHeader } from '@/components/BoxHeader'
import DashboardBox from '@/components/DashboardBox'
import { Box, useTheme } from '@mui/material'
import { DataGrid, GridCellParams } from '@mui/x-data-grid'
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";

function BoxG({productData }) {
    const theme=  useTheme();

    const productColumns = [
        {
          field: "_id",
          headerName: "id",
          flex: 0.7,
        },
        {
          field: "expense",
          headerName: "Expense",
          flex: 0.3,
          renderCell: (params: GridCellParams) => `$${params.value}`,
        },
        {
          field: "price",
          headerName: "Price",
          flex: 0.3,
          renderCell: (params: GridCellParams) => `$${params.value}`,
        },
        {
          field: "transactions",
          headerName: "Count",
          flex: 0.3,
          renderCell: (params: GridCellParams) =>
            (params.value as Array<string>).length,
        },
      ];

  return (
    <DashboardBox gridArea="g">
    <BoxHeader title="List of Products" icon={<Inventory2OutlinedIcon />} />
    <Box
      ml="1rem"
      mr="1rem"
      mb='1rem'    
      height="75%"
    >
      <DataGrid
        columnHeaderHeight={25}
        rowHeight={35}
        hideFooter={true}
        rows={productData || []}
        columns={productColumns}
        getRowId={(row) => row._id}
      />
    </Box>
  </DashboardBox>
  )
}

export default BoxG
