import { BoxHeader } from "@/components/BoxHeader";
import React from "react";
import DashboardBox from "@/components/DashboardBox";
import FlexBetween from "@/components/FlexBetween";
import {
  useGetKpisQuery,
  useGetProductsQuery,
  useGetTransactionsQuery,
} from "@/state/api";
import { Box, Typography } from "@mui/material";
import { ConversionRow } from "@/components/ConversionRow";
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
  ScatterChart,
  Scatter,
  ZAxis,
} from "recharts";

type Props = {};

const pieData = [
  { name: "Group A", value: 600 },
  { name: "Group B", value: 400 },
];
const pieColors = ["#ef2f2f", "#71f5de"];

const Row2 = (props: Props) => {
  const { data: operationalData } = useGetKpisQuery();
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

  const mockdata = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  return (
    <>
      <DashboardBox gridArea="d">
        <BoxHeader
          title="Total orders"
          totalOrders={totalOrderData.totalOrders}
        />
        <FlexBetween margin="0rem 1rem 0 1rem">
          <div className="box-header">Average Order Value </div>
          <div className="a-revenue"> $34,67 </div>
        </FlexBetween>

        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={300}
            data={mockdata}
            margin={{
              top: 15,
              right: 25,
              left: -10,
              bottom: 100,
            }}
          >
            <CartesianGrid horizontal={false} stroke="#48494e" />

            <XAxis
              dataKey="name"
              tickLine={false}
              style={{ fontSize: "10px" }}
            />
            <YAxis
              tickLine={false}
              style={{ fontSize: "10px", opacity: 0.5 }}
              domain={[8000, 24000]}
            />
            <Tooltip
              labelStyle={{ color: "ffffff" }}
              itemStyle={{ color: "ffffff" }}
              formatter={(v) => `$${v}`}
            />

            <Line
              type="monotone"
              dataKey="pv"
              dot={false}
              stroke="#ffffff"
              strokeWidth={2}
              fillOpacity={1}
            />
          </LineChart>
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

                backgroundColor: "#121115",
                borderRadius: "0.4rem",
              }}
            >
              <Box
                sx={{
                  borderRadius: "0.4rem",
                  boxShadow:
                    "0px 7px 8px -4px rgb(0 0 0 / %), 0px 12px 17px 2px rgb(0 0 0 / 14%), 0px 5px 22px 4px rgb(0 0 0 / 12%)",
                  backgroundColor: "#31303B",
                }}
              >
                <BoxHeader
                  title="Total orders"
                  totalOrders={totalOrderData.totalOrders}
                ></BoxHeader>
                <ConversionRow funnelStep="Add to Cart" funnelStepAmount={94} />
                <ConversionRow funnelStep="Checkout" funnelStepAmount={34} />
                <ConversionRow funnelStep="Purchases" funnelStepAmount={12} />
              </Box>

              <Box
                display="flex"
                gap="1.5rem"
                justifyContent="space-between"
                alignContent="center"
                flexBasis="40%"
                width="100%"
                sx={{
                  justifyContent: "center",
                  alignContent: "center",
                  flexDirection: "row",
                  width: "100%",
                  backgroundColor: "#31303B",
                  borderRadius: "0.4rem",
                  boxShadow:
                    "0px 7px 8px -4px rgb(0 0 0 / 20%), 0px 12px 17px 2px rgb(0 0 0 / 14%), 0px 5px 22px 4px rgb(0 0 0 / 12%)",
                }}
              >
                <span
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
                      data={pieData}
                      innerRadius={18}
                      outerRadius={38}
                      paddingAngle={2}
                      dataKey="value"
                    >
                      {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={pieColors[index]} />
                      ))}
                    </Pie>
                  </PieChart>
                </span>
                <span
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignContent: "center",
                    flexDirection: "column",
                  }}
                >
                  {" "}
                  <div style={{ color: "white" }}>Target Sales</div>
                  <div style={{ color: "yellow" }}>83</div>
                  <div style={{ color: "white", fontSize: "10px" }}>
                    Finance goals of the campaign that is desired
                  </div>
                </span>
                <span
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignContent: "center",
                    flexDirection: "column",
                  }}
                >
                  {" "}
                  <div style={{ color: "white" }}> Losses in Revenue</div>
                  <div style={{ color: "white", fontSize: "10px" }}>
                    {" "}
                    Losses are down 25%
                  </div>
                  <div style={{ color: "white" }}> Profit Margins</div>
                  <div style={{ color: "white", fontSize: "10px" }}>
                    {" "}
                    Margins are up by 30% from last month.
                  </div>
                </span>
              </Box>
            </Box>
          </>
        </ResponsiveContainer>
      </DashboardBox>

      <DashboardBox gridArea="f">
        <BoxHeader title="Total Sessions" totalSessions={543} />

        <FlexBetween margin="0rem 1rem 0 1rem">
          <div className="box-header">Total Visitors</div>
          <div className="a-revenue">3454</div>
        </FlexBetween>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={380}
            height={210}
            data={mockdata}
            margin={{
              top: 15,
              right: 25,
              left: -10,
              bottom: 100,
            }}
          >
            <CartesianGrid horizontal={false} stroke="#48494e" />

            <XAxis
              dataKey="name"
              tickLine={false}
              style={{ fontSize: "10px" }}
            />
            <YAxis
              tickLine={false}
              style={{ fontSize: "10px", opacity: 0.5 }}
              domain={[8000, 24000]}
            />
            <Tooltip
              labelStyle={{ color: "ffffff" }}
              itemStyle={{ color: "ffffff" }}
              formatter={(v) => `$${v}`}
            />

            <Line
              type="monotone"
              dataKey="pv"
              dot={false}
              stroke="#ffffff"
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
