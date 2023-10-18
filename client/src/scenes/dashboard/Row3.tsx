import { BoxHeader } from "@/components/BoxHeader";
import DashboardBox from "@/components/DashboardBox";
import FlexBetween from "@/components/FlexBetween";
import { CostField } from "@/components/CostField";
import {
  useGetKpisQuery,
  useGetProductsQuery,
  useGetTransactionsQuery,
} from "@/state/api";
import { Box, Typography } from "@mui/material";
import { DataGrid, GridCellParams } from "@mui/x-data-grid";
import React, { useMemo } from "react";

type Props = {};

const Row3 = (props: Props) => {
  const { data: productData } = useGetProductsQuery();
  const { data: transactionData } = useGetTransactionsQuery();


  const productColumns = [
    {
      field: "_id",
      headerName: "id",
      flex: 1,
    },
    {
      field: "expense",
      headerName: "Expense",
      flex: 0.67,
      renderCell: (params: GridCellParams) => `$${params.value}`,
    },
    {
      field: "price",
      headerName: "Price",
      flex: 0.35,
      renderCell: (params: GridCellParams) => `$${params.value}`,
    },
    {
      field: "transactions",
      headerName: "Count",
      flex: 0.1,
      renderCell: (params: GridCellParams) =>
        (params.value as Array<string>).length,
    },
  ];

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
    <>
      <DashboardBox gridArea="g">
        <BoxHeader title="List of Products" />
        <Box
          mt="0.5rem"
          p="0 0.5rem"
          height="75%"
          sx={{
            "& .MuiDataGrid-root": {
              color: "#d1d3da",
              border: "none",
            },
            "& .MuiDataGrid-cell": {
              borderBottom: `1px solid ${"#48494e"} !important`,
            },
            "& .MuiDataGrid-columnHeaders": {
              borderBottom: `1px solid ${"#48494e"} !important`,
            },
            "& .MuiDataGrid-columnSeparator": {
              visibility: "hidden",
            },
          }}
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

      <DashboardBox gridArea="h">
        <BoxHeader title="Recent Orders" />
        <Box
          mt="0.5rem"
          p="0 0.5rem"
          height="75%"
          sx={{
            "& .MuiDataGrid-root": {
              color: "#d1d3da",
              border: "none",
            },
            "& .MuiDataGrid-cell": {
              borderBottom: `1px solid ${"#48494e"} !important`,
            },
            "& .MuiDataGrid-columnHeaders": {
              borderBottom: `1px solid ${"#48494e"} !important`,
            },
            "& .MuiDataGrid-columnSeparator": {
              visibility: "hidden",
            },
          }}
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

      <DashboardBox gridArea="i" display="flex" flexWrap="wrap">
        <CostField
          costTitle="Shipping costs"
          costAmount={4500}
          costDescription="Cost for delivery"
        />
        <CostField
          costTitle="Coupons"
          costAmount={342}
          costDescription="Discounts, offers and promotions"
        />
        <CostField
          costTitle="Refunds"
          costAmount={3002}
          costDescription="Return request policy "
        />
        <CostField
          costTitle="Taxes"
          costAmount={14150}
          costDescription="Taxation"
        />
      </DashboardBox>
    </>
  );
};

export default Row3;
