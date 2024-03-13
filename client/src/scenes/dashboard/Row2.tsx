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
  ScatterChart,
  Scatter,
  ZAxis,
  AreaChart,
  Area,
} from "recharts";
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import DataThresholdingOutlinedIcon from '@mui/icons-material/DataThresholdingOutlined';
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import BoxContainer from "@/components/BoxContainer";
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import ShoppingCartCheckoutOutlinedIcon from '@mui/icons-material/ShoppingCartCheckoutOutlined';
import WalletOutlinedIcon from '@mui/icons-material/WalletOutlined';
import { tokensDark } from "@/theme";
type Props = {};

const pieData = [
  { name: "Group A", value: 600 },
  { name: "Group B", value: 400 },
];
const pieColors = ["#ef2f2f", tokensDark.primary[500]];

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
      pv: 2400,
      uv: 4000,
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
          icon={<LocalShippingOutlinedIcon/>}
        />
        <FlexBetween margin="0rem 1rem 0 3.5rem">
          <div className="box-header">Average Order Value </div>
          <div className="a-revenue"> $34,67 </div>
        </FlexBetween>

        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
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
              <defs>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#ffffff" stopOpacity={0.8} />
                <stop offset="80%" stopColor="#ffffff" stopOpacity={0.2} />
              </linearGradient>
          
            </defs>
            <CartesianGrid horizontal={false} strokeDasharray="2 3" stroke="#48494e"/>

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
              dataKey="pv"
              dot={false}
              stroke="#ffffff"
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

                backgroundColor: "#1a181e",
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
                  title="Conversion Rate"
                  conversionRate={14}
                  icon={<DataThresholdingOutlinedIcon/>}
                ></BoxHeader>
                <span style={{ display:'flex', flexDirection:'row', justifyContent:'space-around'}}>
                <ConversionStep icon={<AddShoppingCartOutlinedIcon fontSize="small"/>} funnelStep="Add to Cart" funnelStepAmount={94}  />
                <ConversionStep  icon={<ShoppingCartCheckoutOutlinedIcon fontSize="small"/>}funnelStep="Checkout" funnelStepAmount={34} />
                <ConversionStep  icon={<WalletOutlinedIcon fontSize="small"/>}funnelStep="Purchases" funnelStepAmount={12} />
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
                  padding:"1rem",
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
                    backgroundColor: "#1A181E",
                    borderRadius: "0.4rem",
                    padding: ".5rem" ,
                  }}
                >
                  {" "}
                  <div style={{ color: "white"  , fontSize: "13px"}}>Target Sales</div>
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
                      backgroundColor: "#1A181E",
                      borderRadius: "0.4rem",
                      padding: ".5rem" ,
                    }}
                >
                  {" "}
                  <div style={{ color: "white" , fontSize: "10px"}}> Losses in Revenue</div>
                  <div style={{ color: "#EF2F2F", fontSize: "14px" }}>
                    {" "}
                    ↓25%
                  </div>
                  <div style={{ color: "white" , fontSize: "10px" }}> Profit Margins</div>
                  <div style={{ color: "#51f5ac", fontSize: "14px" }}>
                    {" "}
                    ↑30% 
                  </div>
                </span>
              </Box>
            </Box>
          </>
        </ResponsiveContainer>
      </DashboardBox>

      <DashboardBox gridArea="f">
        <BoxHeader title="Total Sessions" totalSessions={543} icon={<PeopleOutlineOutlinedIcon/>}/>

        <FlexBetween margin="0rem 1rem 0 3.5rem">

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
            <CartesianGrid horizontal={false} stroke="#48494e" strokeDasharray="2 3" />

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
