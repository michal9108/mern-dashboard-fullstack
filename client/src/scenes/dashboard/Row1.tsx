// @ts-nocheck
import { BoxHeader } from "@/components/BoxHeader";
import DashboardBox from "@/components/DashboardBox";
import { useGetKpisQuery } from "@/state/api";
// MyComponent.js
import { useKpis } from "../../state/KpisContext";
import { GetKpisResponse } from "../../state/types";

import { useMemo,  } from "react";
import {
  ResponsiveContainer,
  CartesianGrid,
  AreaChart,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Area,
} from "recharts";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import PointOfSaleOutlinedIcon from "@mui/icons-material/PointOfSaleOutlined";
import CurrencyExchangeOutlinedIcon from "@mui/icons-material/CurrencyExchangeOutlined";
import { themeSettings, tokensDark } from "@/theme"; 
import {  useTheme } from "@mui/material";



const Row1 = () => {

  const theme = useTheme();
  const { kpis, error } = useKpis();

  if (error) {
    return <div>Error: {error}</div>;
  }

  //
  console.log("data from Row 1", kpis);
  let data = kpis;

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
          icon={<PaidOutlinedIcon />}
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
                <stop offset="5%" stopColor={theme.palette.secondary.light} stopOpacity={0.8} />
                <stop offset="80%" stopColor={theme.palette.secondary.light} stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorExpenses" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#ef2f2f" stopOpacity={0.8} />
                <stop offset="80%" stopColor="#ef2f2f" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid
              horizontal={false}
              stroke="#48494e"
              strokeDasharray="2 3"
            />

            <XAxis
              dataKey="name"
              tickLine={false}
              style={{ fontSize: "10px" }}
            />
            <YAxis
              tickLine={false}
              style={{ fontSize: "10px"}}
              domain={[8000, 24000]}
            />
            <Tooltip
              labelStyle={{ color: tokensDark.grey[900] }}
              itemStyle={{color: tokensDark.grey[900] }}
              formatter={(v) => `$${v}`}
            />
            <Area
              type="monotone"
              dataKey="revenue"
              dot={false}
              stroke={theme.palette.secondary.light}
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
          icon={<PointOfSaleOutlinedIcon />}
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
                <stop offset="5%" stopColor={tokensDark.primary[500]}  stopOpacity={0.8} />
                <stop offset="80%" stopColor={tokensDark.primary[500]} stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid
              horizontal={false}
              stroke="#48494e"
              strokeDasharray="2 3"
            />
            <XAxis
              dataKey="name"
              tickLine={false}
              style={{ fontSize: "10px" }}
            />
            <YAxis
              tickLine={false}
              style={{ fontSize: "10px" }}
              domain={[1000, 24000]}
            />
            <Tooltip
           labelStyle={{ color: tokensDark.grey[900] }}
           itemStyle={{color: tokensDark.grey[900] }}
              formatter={(v) => `$${v}`}
            />
            <Area
              type="monotone"
              dataKey="profit"
              dot={false}
              stroke="#51f5ac"
              fillOpacity={1}
              fill="url(#colorProfit)"
              strokeWidth="2px"
            />
            <Area
              type="monotone"
              dataKey="revenue"
              dot={false}
              stroke={theme.palette.secondary.light}
              fillOpacity={1}
              fill="url(#colorRevenue)"
              strokeWidth="2px"
            />
          </AreaChart>
        </ResponsiveContainer>
      </DashboardBox>

      <DashboardBox gridArea="c">
        <BoxHeader
          title="Revenue Month by Month"
          icon={<CurrencyExchangeOutlinedIcon />}
        />
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
            <CartesianGrid
              vertical={false}
              stroke="#48494e"
              strokeDasharray="2 3"
            />
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
              labelStyle={{ color: tokensDark.grey[900] }}
              itemStyle={{color: tokensDark.grey[900] }}
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
