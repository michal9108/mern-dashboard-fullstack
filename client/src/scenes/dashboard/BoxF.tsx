import { BoxHeader } from "@/components/BoxHeader";
import DashboardBox from "@/components/DashboardBox";
import FlexBetween from "@/components/FlexBetween";
import {
  Tooltip,
  CartesianGrid,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Line,

} from "recharts";
import { tokensDark } from "@/theme";
import { funnelStore } from "../../../../server/data/data";
import {  useTheme } from "@mui/material";
import PeopleOutlineOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";

function BoxF({totalSessions, totalVisitors}) {
    const theme = useTheme();

  return (
   
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
  )
}

export default BoxF
