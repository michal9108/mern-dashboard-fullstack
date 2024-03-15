import DashboardBox from '@/components/DashboardBox'
import { BoxHeader } from "@/components/BoxHeader";
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { tokensDark } from '@/theme';
import { useTheme } from "@mui/material";
import PointOfSaleOutlinedIcon from "@mui/icons-material/PointOfSaleOutlined";

function BoxB({totalProfit, totalRevenue , revenueProfit}) {
    const theme = useTheme();

  return (
    <DashboardBox gridArea="b">
    <BoxHeader
      title="Revenue & Profit"
      totalRevenue={totalRevenue}
      totalProfit={totalProfit}
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
            <stop
              offset="5%"
              stopColor={tokensDark.primary[500]}
              stopOpacity={0.8}
            />
            <stop
              offset="80%"
              stopColor={tokensDark.primary[500]}
              stopOpacity={0}
            />
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
          itemStyle={{ color: tokensDark.grey[900] }}
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
  )
}

export default BoxB
