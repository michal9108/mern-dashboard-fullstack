
import { BoxHeader } from "@/components/BoxHeader";
import DashboardBox from "@/components/DashboardBox";
import {
  ResponsiveContainer,
 
  Cell,
  Pie,
  PieChart,
} from "recharts";
import DataThresholdingOutlinedIcon from "@mui/icons-material/DataThresholdingOutlined";
import { tokensDark } from "@/theme";
import { funnelStore } from "../../../../server/data/data";
import { Box, Divider, useTheme } from "@mui/material";
import ConversionStep from "@/components/ConversionStep";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import ShoppingCartCheckoutOutlinedIcon from "@mui/icons-material/ShoppingCartCheckoutOutlined";
import WalletOutlinedIcon from "@mui/icons-material/WalletOutlined";

export default function BoxE({conversionRate, totalCheckouts, totalPurchases, totalCarts }) {
    const theme = useTheme();
    const pieColors = [tokensDark.negative[800], tokensDark.primary[500]];

  return (
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

            backgroundColor: theme.palette.background.default,
            borderRadius: "0.4rem",
          }}
        >
          <Box
            sx={{
              borderRadius: "0.4rem",
              boxShadow:
                "0px 7px 8px -4px rgb(0 0 0 / %), 0px 12px 17px 2px rgb(0 0 0 / 14%), 0px 5px 22px 4px rgb(0 0 0 / 12%)",
              backgroundColor: theme.palette.secondary.dark,
            }}
          >
            <BoxHeader
              title="Conversion Rate"
              conversionRate={conversionRate}
              icon={<DataThresholdingOutlinedIcon />}
            ></BoxHeader>
            <span
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                marginTop: "0.5rem",
              }}
            >
              <ConversionStep
                icon={<AddShoppingCartOutlinedIcon fontSize="medium" />}
                funnelStep="Add to Cart"
                funnelStepAmount={totalCarts}
              />
              <Divider orientation="vertical" flexItem />

              <ConversionStep
                icon={
                  <ShoppingCartCheckoutOutlinedIcon fontSize="medium" />
                }
                funnelStep="Checkout"
                funnelStepAmount={totalCheckouts}
              />
              <Divider orientation="vertical" flexItem />

              <ConversionStep
                icon={<WalletOutlinedIcon fontSize="medium" />}
                funnelStep="Purchases"
                funnelStepAmount={totalPurchases}
              />
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
              padding: "1rem",
              justifyContent: "center",
              alignContent: "center",
              flexDirection: "row",
              width: "100%",
              backgroundColor: theme.palette.secondary.dark,
              borderRadius: "0.4rem",
              boxShadow:
                "0px 7px 8px -4px rgb(0 0 0 / 20%), 0px 12px 17px 2px rgb(0 0 0 / 14%), 0px 5px 22px 4px rgb(0 0 0 / 12%)",
            }}
          >
            <section
              style={{
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
                flexDirection: "column",
                backgroundColor: theme.palette.secondary.dark,
                borderRadius: "0.4rem",
                padding: ".5rem",
              }}
            >
              {" "}
              <div
                style={{
                  color: theme.palette.text.primary,
                  fontSize: "12px",
                  fontWeight: "500",
                }}
              >
                Target Sales
              </div>
              <div
                style={{
                  color: tokensDark.primary[500],
                  fontWeight: "700",
                  fontSize: "15px",
                }}
              >
                {funnelStore[0]?.targetSales}
              </div>
              {/* <div
                style={{
                  color: theme.palette.text.primary,
                  fontSize: "10px",
                }}
              >
                Finance goals of the campaign that is desired
              </div> */}
            </section>
            <Divider orientation="vertical" flexItem />

            <section
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
                  data={funnelStore[0]?.pieData}
                  innerRadius={18}
                  outerRadius={38}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {funnelStore[0]?.pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={pieColors[index]} />
                  ))}
                </Pie>
              </PieChart>
            </section>

            <section
              style={{
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center",
                flexDirection: "row",
                backgroundColor: theme.palette.secondary.dark,
                borderRadius: "0.4rem",
                padding: ".5rem",
                gap: "0.5rem",
              }}
            >
              {" "}
              <div
                style={{
                  color: theme.palette.text.primary,
                  fontSize: "12px",
                  fontWeight: "500",
                }}
              >
                {" "}
               Revenue Losses  
                <div
                  style={{
                    color: "#EF2F2F",
                    fontSize: "15px",
                    fontWeight: "700",
                  }}
                >
                  {" "}
                  ↓{funnelStore[0]?.pieData[0]?.value}%
                </div>
              </div>
              <Divider orientation="vertical" flexItem />
              <div
                style={{
                  color: theme.palette.text.primary,
                  fontSize: "12px",
                  fontWeight: "500",
                }}
              >
                {" "}
                Profit Margins
                <div
                  style={{
                    color: "#51f5ac",
                    fontSize: "15px",
                    fontWeight: "700",
                  }}
                >
                  {" "}
                  ↑{funnelStore[0]?.pieData[1]?.value}%
                </div>
              </div>
            </section>
          </Box>
        </Box>
      </>
    </ResponsiveContainer>
  </DashboardBox>
  )
}
