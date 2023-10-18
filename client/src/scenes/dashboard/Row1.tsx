import { BoxHeader } from "@/components/BoxHeader";
import DashboardBox from "@/components/DashboardBox";
import { useGetKpisQuery } from "@/state/api";
import React from "react";
import { useMemo } from "react";
import {
  ResponsiveContainer,
  CartesianGrid,
  AreaChart,
  BarChart,
  Bar,
  LineChart,
  XAxis,
  YAxis,
  Legend,
  Line,
  Tooltip,
  Area,
} from "recharts";

type Props = {};

const Row1 = (props: Props) => {
  const { data } = useGetKpisQuery();

  const revenue = useMemo(() => {
    return (
      data &&
      data[0].monthlyData.map(({ month, revenue }) => {
        return {
          name: month.substring(0, 3),
          revenue: revenue,
        };
      })
    );
  }, [data]);

  const totalData = useMemo(() => {
    let totalProfit = 0;
    let totalExpenses = 0;
    let totalRevenue = 0;

    if (data) {
      if (data[0]) {
        totalProfit = data[0].totalProfit || 0;
        totalExpenses = data[0].totalExpenses || 0;
        totalRevenue = data[0].totalRevenue || 0;
      }
    }

    return {
      totalProfit,
      totalExpenses,
      totalRevenue,
    };
  }, [data]);

  const revenueExpenses = useMemo(() => {
    return (
      data &&
      data[0].monthlyData.map(({ month, revenue, expenses }) => {
        return {
          name: month.substring(0, 3),
          revenue: revenue,
          expenses: expenses,
        };
      })
    );
  }, [data]);

  const revenueProfit = useMemo(() => {
    return (
      data &&
      data[0].monthlyData.map(({ month, revenue, expenses }) => {
        return {
          name: month.substring(0, 3),
          revenue: revenue,
          profit: (revenue - expenses).toFixed(2),
        };
      })
    );
  }, [data]);

  return (
    <>
      <DashboardBox gridArea="a">
        <BoxHeader
          title="Revenue & Expenses"
          totalExpenses={totalData.totalExpenses}
          totalRevenue={totalData.totalRevenue}
        />
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            width={500}
            height={400}
            data={revenueExpenses}
            margin={{
              top: 15,
              right: 25,
              left: -10,
              bottom: 70,
            }}
          >
            <defs>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#ffffff" stopOpacity={0.8} />
                <stop offset="80%" stopColor="#ffffff" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorExpenses" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#ef2f2f" stopOpacity={0.8} />
                <stop offset="80%" stopColor="#ef2f2f" stopOpacity={0} />
              </linearGradient>
            </defs>
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
            <Area
              type="monotone"
              dataKey="revenue"
              dot={false}
              stroke="#ffffff"
              fillOpacity={1}
              fill="url(#colorRevenue)"
              strokeWidth="2px"
            />
            <Area
              type="monotone"
              dataKey="expenses"
              dot={false}
              stroke="#ef2f2f"
              fillOpacity={1}
              fill="url(#colorExpenses)"
              strokeWidth="2px"
            />
          </AreaChart>
        </ResponsiveContainer>
      </DashboardBox>

      <DashboardBox gridArea="b">
        <BoxHeader
          title="Revenue & Profit"
          totalRevenue={totalData.totalRevenue}
          totalProfit={totalData.totalProfit}
        />
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            width={500}
            height={400}
            data={revenueProfit}
            margin={{
              top: 20,
              right: 25,
              left: -10,
              bottom: 70,
            }}
          >
            <defs>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#ffffff" stopOpacity={0.8} />
                <stop offset="80%" stopColor="#ffffff" stopOpacity={0.2} />
              </linearGradient>
              <linearGradient id="colorProfit" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#71f5de" stopOpacity={0.8} />
                <stop offset="80%" stopColor="#71f5de" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid horizontal={false} stroke="#48494e" />
            <XAxis
              dataKey="name"
              tickLine={false}
              style={{ fontSize: "10px" }}
            />
            <YAxis
              tickLine={false}
              style={{ fontSize: "10px", opacity: 0.5 }}
              domain={[1000, 24000]}
            />
            <Tooltip
              labelStyle={{ color: "ffffff" }}
              itemStyle={{ color: "ffffff" }}
              formatter={(v) => `$${v}`}
            />
            <Area
              type="monotone"
              dataKey="profit"
              dot={false}
              stroke="#71f5de"
              fillOpacity={1}
              fill="url(#colorProfit)"
              strokeWidth="2px"
            />
            <Area
              type="monotone"
              dataKey="revenue"
              dot={false}
              stroke="#ffffff"
              fillOpacity={1}
              fill="url(#colorRevenue)"
              strokeWidth="2px"
            />
          </AreaChart>
        </ResponsiveContainer>
      </DashboardBox>

      <DashboardBox gridArea="c">
        <BoxHeader title="Revenue Month by Month" />
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={revenue}
            margin={{
              top: 17,
              right: 15,
              left: -5,
              bottom: 58,
            }}
          >
            <defs>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#71f5de" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#71f5de" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} stroke="#48494e" />
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              style={{ fontSize: "10px" }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              style={{ fontSize: "10px" }}
            />
            <Tooltip
              labelStyle={{ color: "ffffff" }}
              itemStyle={{ color: "ffffff" }}
              formatter={(v) => `$${v}`}
            />
            <Bar dataKey="revenue" fill="url(#colorRevenue)" />
          </BarChart>
        </ResponsiveContainer>
      </DashboardBox>
    </>
  );
};

export default Row1;
