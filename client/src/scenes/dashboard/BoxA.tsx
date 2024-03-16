import React from "react";
import { useTheme } from "@mui/material";
import DashboardBox from "@/components/DashboardBox";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import { BoxHeader } from "@/components/BoxHeader";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { tokensDark } from "@/theme";
import Skeleton from "@mui/material/Skeleton";

export default function BoxA({
  totalExpenses,
  totalRevenue,
  revenueExpenses,
  loading,
}) {
  const theme = useTheme();

  return (
    <DashboardBox gridArea="a">
      <BoxHeader
        title="Revenue & Expenses"
        totalExpenses={totalExpenses}
        totalRevenue={totalRevenue}
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
                <stop
                  offset="5%"
                  stopColor={theme.palette.secondary.light}
                  stopOpacity={0.8}
                />
                <stop
                  offset="80%"
                  stopColor={theme.palette.secondary.light}
                  stopOpacity={0}
                />
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

            <XAxis dataKey="name" tickLine={false} style={{ fontSize: "10px" }} />
            <YAxis
              tickLine={false}
              style={{ fontSize: "10px" }}
              domain={[8000, 24000]}
            />
            <Tooltip
              labelStyle={{ color: tokensDark.grey[900] }}
              itemStyle={{ color: tokensDark.grey[900] }}
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
  );
}
