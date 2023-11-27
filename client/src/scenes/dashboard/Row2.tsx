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
        <FlexBetween margin="0rem 1rem 0rem 0rem">
          <Box width="100%">
            <ResponsiveContainer width="99%" height={200}>
              <LineChart
                width={380}
                height={210}
                data={mockdata}
                margin={{
                  top: 15,
                  right: 25,
                  left: -10,
                  bottom: 10,
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
          </Box>

          <FlexBetween>
            <Box mt="3rem" mr="0rem" mb="3rem" ml="0rem">
              <div className="conversion-row">Average </div>
              <div className="conversion-row">$34,67</div>
            </Box>
          </FlexBetween>
        </FlexBetween>
      </DashboardBox>

      <DashboardBox gridArea="e">
        <FlexBetween>
          <Box width="100%">
            <BoxHeader title="Store Conversion Rate" conversionRate={3.56} />

            <FlexBetween margin="1.5rem 1rem 0 1rem">
              <div className={"conversion-title"}>CONVERSION FUNNEL</div>
            </FlexBetween>

            <ConversionRow funnelStep="Add to Cart" funnelStepAmount={94} />

            <ConversionRow funnelStep="Checkout" funnelStepAmount={34} />
            <ConversionRow funnelStep="Purchases" funnelStepAmount={12} />
          </Box>
        </FlexBetween>
      </DashboardBox>

      <DashboardBox gridArea="f">
        <BoxHeader title="Total Sessions" totalSessions={543} />

        <FlexBetween margin="0rem 1rem 0rem 0rem">
          <Box width="100%">
            <ResponsiveContainer width="99%" height={200}>
              <LineChart
                width={380}
                height={210}
                data={mockdata}
                margin={{
                  top: 15,
                  right: 25,
                  left: -10,
                  bottom: 10,
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
          </Box>
          <FlexBetween>
            <Box mt="3rem" mr="0rem" mb="3rem" ml="0rem">
              <div className="conversion-row">Visitors</div>
              <div className="conversion-row">3454</div>
            </Box>
          </FlexBetween>
        </FlexBetween>
      </DashboardBox>
    </>
  );
};

export default Row2;
