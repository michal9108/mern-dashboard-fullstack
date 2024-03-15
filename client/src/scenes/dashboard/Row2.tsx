// @ts-nocheck
import { BoxHeader } from "@/components/BoxHeader";
import DashboardBox from "@/components/DashboardBox";
import FlexBetween from "@/components/FlexBetween";
import {
  useGetKpisQuery,
  useGetProductsQuery,
  useGetTransactionsQuery,
} from "@/state/api";
import { Box, Typography, useTheme } from "@mui/material";
import ConversionStep from "@/components/ConversionStep";
import { useMemo } from "react";

import {
  Tooltip,
  CartesianGrid,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Line,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
} from "recharts";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import DataThresholdingOutlinedIcon from "@mui/icons-material/DataThresholdingOutlined";
import PeopleOutlineOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import ShoppingCartCheckoutOutlinedIcon from "@mui/icons-material/ShoppingCartCheckoutOutlined";
import WalletOutlinedIcon from "@mui/icons-material/WalletOutlined";
import { tokensDark } from "@/theme";
import { funnelStore } from "../../../../server/data/data";
import Divider from "@mui/material/Divider";

const Row2 = () => {
  const theme = useTheme();

  const pieColors = [tokensDark.negative[800], tokensDark.primary[500]];

  const { data: transactionalData } = useGetTransactionsQuery();

  const totalOrderData = useMemo(() => {
    let totalOrders = 0;

    if (transactionalData) {
      totalOrders = transactionalData?.length;
    }

    return {
      totalOrders,
    };
  }, [transactionalData]);

  const averageOrderValue = useMemo(() => {
    if (transactionalData) {
      let sumOfOrders = transactionalData.reduce(
        (acc, currentValue) => acc + currentValue.amount,
        0,
      );
      return (sumOfOrders / totalOrderData.totalOrders).toFixed(2);
    }
  }, [transactionalData]);

  const getTotal = (key) =>
    funnelStore[0]?.ordersData.reduce(
      (acc, currentValue) => acc + currentValue[key],
      0,
    );

  const totalVisitors = getTotal("visitors");
  const totalSessions = getTotal("sessions");
  const totalCarts = getTotal("addtocart");
  const totalCheckouts = getTotal("checkouts");
  const totalPurchases = getTotal("purchase");
  const conversionRate = ((totalPurchases / totalVisitors) * 100).toFixed(2);

  return (
    <>
      <DashboardBox gridArea="d">
        <BoxHeader
          title="Total orders"
          totalOrders={totalOrderData.totalOrders}
          icon={<LocalShippingOutlinedIcon />}
        />
        <FlexBetween margin="0rem 1rem 0 3.5rem">
          <div
            style={{
              fontSize: "13px",
              fontWeight: "500",
            }}
          >
            Average Order Value{" "}
          </div>
          <div
            style={{
              fontSize: "13px",
              fontWeight: "500",
            }}
          >
            ${averageOrderValue}{" "}
          </div>
        </FlexBetween>

        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            width={500}
            height={300}
            data={funnelStore[0]?.ordersData}
            margin={{
              top: 15,
              right: 25,
              left: -10,
              bottom: 100,
            }}
          >
            <defs>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor={theme.palette.secondary.light}
                  stopOpacity={0.8}
                />
                <stop
                  offset="80%"
                  stopColor={theme.palette.secondary.light}
                  stopOpacity={0.2}
                />
              </linearGradient>
            </defs>
            <CartesianGrid
              horizontal={false}
              strokeDasharray="2 3"
              stroke="#48494e"
            />

            <XAxis
              dataKey="month"
              tickLine={false}
              style={{ fontSize: "10px" }}
            />
            <YAxis
              tickLine={false}
              style={{ fontSize: "10px" }}
              domain={[1000, 20000]}
            />
            <Tooltip
              labelStyle={{ color: tokensDark.grey[900] }}
              itemStyle={{ color: tokensDark.grey[900] }}
              formatter={(v) => `$${v}`}
            />

            <Area
              type="monotone"
              dataKey="totalOrdervalue"
              dot={false}
              stroke={theme.palette.secondary.light}
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorRevenue)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </DashboardBox>

      <DashboardBox gridArea="e">
        <ResponsiveContainer width="100%" height="100%">
          <>
            <Box
              display="grid"
              gap="1.5rem"
              width="100%"
              height="100%"
              sx={{
                textAlign: "center",
                gridTemplateColumns: "repeat(1, minmax(100px, 1fr))",
                gridTemplateRows: "repeat(2, minmax(60px, 1fr))",

                backgroundColor: theme.palette.background.default,
                borderRadius: "0.4rem",
              }}
            >
              <Box
                sx={{
                  borderRadius: "0.4rem",
                  boxShadow:
                    "0px 7px 8px -4px rgb(0 0 0 / %), 0px 12px 17px 2px rgb(0 0 0 / 14%), 0px 5px 22px 4px rgb(0 0 0 / 12%)",
                  backgroundColor: theme.palette.secondary.dark,
                }}
              >
                <BoxHeader
                  title="Conversion Rate"
                  conversionRate={conversionRate}
                  icon={<DataThresholdingOutlinedIcon />}
                ></BoxHeader>
                <span
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-around",
                    marginTop: "0.5rem",
                  }}
                >
                  <ConversionStep
                    icon={<AddShoppingCartOutlinedIcon fontSize="medium" />}
                    funnelStep="Add to Cart"
                    funnelStepAmount={totalCarts}
                  />
                  <Divider orientation="vertical" flexItem />

                  <ConversionStep
                    icon={
                      <ShoppingCartCheckoutOutlinedIcon fontSize="medium" />
                    }
                    funnelStep="Checkout"
                    funnelStepAmount={totalCheckouts}
                  />
                  <Divider orientation="vertical" flexItem />

                  <ConversionStep
                    icon={<WalletOutlinedIcon fontSize="medium" />}
                    funnelStep="Purchases"
                    funnelStepAmount={totalPurchases}
                  />
                </span>
              </Box>

              <Box
                display="flex"
                gap="1.5rem"
                justifyContent="space-between"
                alignContent="center"
                flexBasis="40%"
                width="100%"
                sx={{
                  padding: "1rem",
                  justifyContent: "center",
                  alignContent: "center",
                  flexDirection: "row",
                  width: "100%",
                  backgroundColor: theme.palette.secondary.dark,
                  borderRadius: "0.4rem",
                  boxShadow:
                    "0px 7px 8px -4px rgb(0 0 0 / 20%), 0px 12px 17px 2px rgb(0 0 0 / 14%), 0px 5px 22px 4px rgb(0 0 0 / 12%)",
                }}
              >
                <section
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignContent: "center",
                    flexDirection: "column",
                    backgroundColor: theme.palette.secondary.dark,
                    borderRadius: "0.4rem",
                    padding: ".5rem",
                  }}
                >
                  {" "}
                  <div
                    style={{
                      color: theme.palette.text.primary,
                      fontSize: "12px",
                      fontWeight: "500",
                    }}
                  >
                    Target Sales
                  </div>
                  <div
                    style={{
                      color: tokensDark.primary[500],
                      fontWeight: "700",
                      fontSize: "15px",
                    }}
                  >
                    {funnelStore[0]?.targetSales}
                  </div>
                  {/* <div
                    style={{
                      color: theme.palette.text.primary,
                      fontSize: "10px",
                    }}
                  >
                    Finance goals of the campaign that is desired
                  </div> */}
                </section>
                <Divider orientation="vertical" flexItem />

                <section
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignContent: "center",
                    flexDirection: "column",
                  }}
                >
                  <PieChart
                    width={100}
                    height={100}
                    margin={{
                      top: 0,
                      right: 0,
                      left: 0,
                      bottom: 0,
                    }}
                  >
                    <Pie
                      stroke="none"
                      data={funnelStore[0]?.pieData}
                      innerRadius={18}
                      outerRadius={38}
                      paddingAngle={2}
                      dataKey="value"
                    >
                      {funnelStore[0]?.pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={pieColors[index]} />
                      ))}
                    </Pie>
                  </PieChart>
                </section>

                <section
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignContent: "center",
                    alignItems: "center",
                    flexDirection: "row",
                    backgroundColor: theme.palette.secondary.dark,
                    borderRadius: "0.4rem",
                    padding: ".5rem",
                    gap: "0.5rem",
                  }}
                >
                  {" "}
                  <div
                    style={{
                      color: theme.palette.text.primary,
                      fontSize: "12px",
                      fontWeight: "500",
                    }}
                  >
                    {" "}
                   Revenue Losses  
                    <div
                      style={{
                        color: "#EF2F2F",
                        fontSize: "15px",
                        fontWeight: "700",
                      }}
                    >
                      {" "}
                      ↓{funnelStore[0]?.pieData[0]?.value}%
                    </div>
                  </div>
                  <Divider orientation="vertical" flexItem />
                  <div
                    style={{
                      color: theme.palette.text.primary,
                      fontSize: "12px",
                      fontWeight: "500",
                    }}
                  >
                    {" "}
                    Profit Margins
                    <div
                      style={{
                        color: "#51f5ac",
                        fontSize: "15px",
                        fontWeight: "700",
                      }}
                    >
                      {" "}
                      ↑{funnelStore[0]?.pieData[1]?.value}%
                    </div>
                  </div>
                </section>
              </Box>
            </Box>
          </>
        </ResponsiveContainer>
      </DashboardBox>

      <DashboardBox gridArea="f">
        <BoxHeader
          title="Total Sessions"
          totalSessions={totalSessions}
          icon={<PeopleOutlineOutlinedIcon />}
        />

        <FlexBetween margin="0rem 1rem 0 3.5rem">
          <div
            style={{
              color: tokensDark.primary[500],
              fontSize: "13px",
              fontWeight: "500",
            }}
          >
            Total Visitors
          </div>
          <div
            style={{
              color: tokensDark.primary[500],
              fontSize: "13px",
              fontWeight: "500",
            }}
          >
            {totalVisitors}
          </div>
        </FlexBetween>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={380}
            height={210}
            data={funnelStore[0]?.ordersData}
            margin={{
              top: 15,
              right: 25,
              left: -10,
              bottom: 100,
            }}
          >
            <CartesianGrid
              horizontal={false}
              stroke="#48494e"
              strokeDasharray="2 3"
            />

            <XAxis
              dataKey="month"
              tickLine={false}
              style={{ fontSize: "10px" }}
            />
            <YAxis
              tickLine={false}
              style={{ fontSize: "10px" }}
              domain={[0, 300]}
            />
            <Tooltip
              labelStyle={{ color: tokensDark.grey[900] }}
              itemStyle={{ color: tokensDark.grey[900] }}
              formatter={(v) => `$${v}`}
            />

            <Line
              type="monotone"
              dataKey="visitors"
              dot={false}
              stroke={tokensDark.primary[500]}
              strokeWidth={2}
              fillOpacity={1}
            />
            <Line
              type="monotone"
              dataKey="sessions"
              dot={false}
              stroke={theme.palette.secondary.light}
              strokeWidth={2}
              fillOpacity={1}
            />
          </LineChart>
        </ResponsiveContainer>
      </DashboardBox>
    </>
  );
};

export default Row2;
