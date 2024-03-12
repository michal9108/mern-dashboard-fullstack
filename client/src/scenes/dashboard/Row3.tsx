import { BoxHeader } from "@/components/BoxHeader";
import DashboardBox from "@/components/DashboardBox";
import { Grid } from "@mui/material";

import { CostField } from "@/components/CostField";
import {
  useGetKpisQuery,
  useGetProductsQuery,
  useGetTransactionsQuery,
} from "@/state/api";
import { Box, Typography } from "@mui/material";
import { DataGrid, GridCellParams } from "@mui/x-data-grid";
import React, { useMemo } from "react";
import SmallDashboardBox from "@/components/SmallDashboardBox";
import { ResponsiveContainer } from "recharts";

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
            "& .MuiDataGrid-sortIcon": {
              color: "#d1d3da",
            },
            "& .MuiDataGrid-menuIconButton": {
              color: "#d1d3da",
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
            "& .MuiDataGrid-menuIconButton": {
              color: "#d1d3da",
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
        <ResponsiveContainer width="100%" height="100%">
          <Box
            display="grid"
            gap="1.5rem"
            width="100%"
            height="100%"
            sx={{
              textAlign: "center",
              gridTemplateColumns: "repeat(2, minmax(100px, 1fr))",
              gridTemplateRows: "repeat(2, minmax(60px, 1fr))",

              backgroundColor: "#121115",
              borderRadius: "0.4rem",
              boxShadow:
                "0px 7px 8px -4px rgb(0 0 0 / 20%), 0px 12px 17px 2px rgb(0 0 0 / 14%), 0px 5px 22px 4px rgb(0 0 0 / 12%)",
            }}
          >
            {" "}
            <CostField
              costTitle="Shipping costs"
              costAmount={4500}
              costDescription="Cost for delivery"
            />{" "}
            <CostField
              costTitle="Coupons"
              costAmount={342}
              costDescription="Discounts, offers and promotions"
            />{" "}
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
          </Box>
        </ResponsiveContainer>
      </DashboardBox>
    </>
  );
};

export default Row3;
