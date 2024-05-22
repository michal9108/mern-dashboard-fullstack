
import { BoxHeader } from "@/components/BoxHeader";
import DashboardBox from "@/components/DashboardBox";
import FlexBetween from "@/components/FlexBetween";
import {
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
  AreaChart,
  Area,
} from "recharts";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import { tokensDark } from "@/theme";
import { funnelStore } from "../../../../server/data/data";
import { useTheme } from "@mui/material";
function BoxD({totalOrders, averageOrderValue}) {
    const theme = useTheme();

  return (
    <DashboardBox gridArea="d">
    <BoxHeader
      title="Total orders"
      totalOrders={totalOrders}
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
  )
}

export default BoxD;
