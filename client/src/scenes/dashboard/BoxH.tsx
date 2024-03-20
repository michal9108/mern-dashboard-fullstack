import { BoxHeader } from "@/components/BoxHeader";
import DashboardBox from "@/components/DashboardBox";
import { Box, useTheme } from "@mui/material";
import { DataGrid, GridCellParams } from "@mui/x-data-grid";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";

function AreaH({ transactionData }) {
  const theme = useTheme();

  const transactionColumns = [
    {
      field: "_id",
      headerName: "id",
      flex: 1,
    },
    {
      field: "buyer",
      headerName: "Buyer",
      flex: 0.67,
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
    <DashboardBox gridArea="h">
      <BoxHeader title="Recent Orders" icon={<LocalMallOutlinedIcon />} />
      <Box
        ml="1rem"
        mr="1rem"
        mb="1rem"
        height="75%"
        // sx={{
        //   "& .MuiDataGrid-root": {
        //     color: theme.palette.secondary.light,
        //     border: "none",
        //   },
        //   "& .MuiDataGrid-cell": {
        //     borderBottom: `1px solid ${theme.palette.secondary.light} !important`,
        //   },
        //   "& .MuiDataGrid-columnHeaders": {
        //     borderBottom: `1px solid ${theme.palette.secondary.light} !important`,
        //   },
        //   "& .MuiDataGrid-columnSeparator": {
        //     visibility: "hidden",
        //   },
        //   "& .MuiDataGrid-menuIconButton": {
        //     color: theme.palette.secondary.light,
        //   },
        // }}
      >
        <DataGrid
          columnHeaderHeight={25}
          rowHeight={35}
          hideFooter={true}
          rows={transactionData || []}
          columns={transactionColumns}
          getRowId={(row) => row._id}
        />
      </Box>
    </DashboardBox>
  );
}

export default AreaH;
