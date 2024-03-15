import DashboardBox from '@/components/DashboardBox'
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import { BoxHeader } from "@/components/BoxHeader";
import { Area, AreaChart, Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { tokensDark } from '@/theme';
import { useTheme } from "@mui/material";
import CurrencyExchangeOutlinedIcon from "@mui/icons-material/CurrencyExchangeOutlined";

export default function BoxC({ revenue }) {
    const theme = useTheme();
    
  return (
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
          itemStyle={{ color: tokensDark.grey[900] }}
          formatter={(v) => `$${v}`}
        />
        <Bar dataKey="revenue" fill="url(#colorRevenue)" />
      </BarChart>
    </ResponsiveContainer>
  </DashboardBox>
  )
}
