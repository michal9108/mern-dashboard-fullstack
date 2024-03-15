// @ts-nocheck
import { BoxHeader } from "@/components/BoxHeader";
import DashboardBox from "@/components/DashboardBox";
import { Grid, useTheme } from "@mui/material";

import { CostsField } from "@/components/CostsField";
import {
  useGetKpisQuery,
  useGetProductsQuery,
  useGetTransactionsQuery,
} from "@/state/api";
import { Box, Typography } from "@mui/material";
import { DataGrid, GridCellParams } from "@mui/x-data-grid";
import React, { useMemo } from "react";
import { ResponsiveContainer } from "recharts";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import CancelIcon from '@mui/icons-material/Cancel';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
const Row3 = () => {

  const theme=  useTheme();
  const { data: productData } = useGetProductsQuery();
  const { data: transactionData } = useGetTransactionsQuery();

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
        <BoxHeader title="List of Products" icon={<Inventory2OutlinedIcon />} />
        <Box
          mt="0.5rem"
          p="0 0.5rem"
          height="75%"
          sx={{
            "& .MuiDataGrid-root": {
              color: theme.palette.text.primary,
              border: "none",
            },
            "& .MuiDataGrid-cell": {
              borderBottom: `1px solid ${theme.palette.text.primary} !important`,
            },
            "& .MuiDataGrid-columnHeaders": {
              borderBottom: `1px solid ${theme.palette.text.primary} !important`,
            },
            "& .MuiDataGrid-columnSeparator": {
              visibility: "hidden",
            },
            "& .MuiDataGrid-menuIconButton": {
              color: theme.palette.text.primary,
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
        <BoxHeader title="Recent Orders" icon={<LocalMallOutlinedIcon />} />
        <Box
          mt="0.5rem"
          p="0 0.5rem"
          height="75%"
          sx={{
            "& .MuiDataGrid-root": {
              color: theme.palette.text.primary,
              border: "none",
            },
            "& .MuiDataGrid-cell": {
              borderBottom: `1px solid ${theme.palette.text.primary} !important`,
            },
            "& .MuiDataGrid-columnHeaders": {
              borderBottom: `1px solid ${theme.palette.text.primary} !important`,
            },
            "& .MuiDataGrid-columnSeparator": {
              visibility: "hidden",
            },
            "& .MuiDataGrid-menuIconButton": {
              color: theme.palette.text.primary,
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

              backgroundColor: theme.palette.background.default,

              borderRadius: "0.4rem",
              boxShadow:
                "0px 7px 8px -4px rgb(0 0 0 / 20%), 0px 12px 17px 2px rgb(0 0 0 / 14%), 0px 5px 22px 4px rgb(0 0 0 / 12%)",
            }}
          >
            {" "}
            {" "}
            <CostsField
            iconCosts={<LocalPostOfficeIcon/>}
              costTitle="Shipping costs"
              costAmount={4500}
              // costDescription="Cost for delivery"
            />{" "}
            <CostsField
            iconCosts={<LoyaltyIcon/>}
              costTitle="Coupons"
              costAmount={342}
              // costDescription="Discounts, offers and promotions"
            />{" "}
            <CostsField
            iconCosts={<CancelIcon/>}
              costTitle="Refunds"
              costAmount={3002}
              // costDescription="Return request policy "
            />
            <CostsField
            iconCosts={<AccountBalanceIcon/>}
              costTitle="Taxes"
              costAmount={14150}
              // costDescription="Taxation"
            />
          </Box>
        </ResponsiveContainer>
      </DashboardBox>
    </>
  );
};

export default Row3;
