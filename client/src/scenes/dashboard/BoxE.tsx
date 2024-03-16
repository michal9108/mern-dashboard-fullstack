
import { BoxHeader } from "@/components/BoxHeader";
import DashboardBox from "@/components/DashboardBox";
import {
  ResponsiveContainer,
} from "recharts";
import DataThresholdingOutlinedIcon from "@mui/icons-material/DataThresholdingOutlined";
import { tokensDark } from "@/theme";

import { Box, Divider, useTheme } from "@mui/material";
import ConversionStep from "@/components/ConversionStep";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import ShoppingCartCheckoutOutlinedIcon from "@mui/icons-material/ShoppingCartCheckoutOutlined";
import WalletOutlinedIcon from "@mui/icons-material/WalletOutlined";

export default function BoxE({conversionRate, totalCheckouts, totalPurchases, totalCarts }) {
    const theme = useTheme();
  

  return (
    <DashboardBox gridArea="e">
    <ResponsiveContainer width="100%" height="100%">
    
        <Box
          display="grid"
          gap="1.5rem"
          width="100%"
          height="100%"
          sx={{
            textAlign: "center",
            // gridTemplateColumns: "repeat(1, minmax(100px, 1fr))",
            // gridTemplateRows: "repeat(1, minmax(60px, 0.5fr))",

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
            <section
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                alignContent:"center",
              marginTop:"0.5rem",
             
             
              }}
            >
              <div style={{display:"flex",  gap:"1rem" , padding:"1.5"}}> 
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
              </div>
            </section>
          </Box>

        
        </Box>
   
    </ResponsiveContainer>
  </DashboardBox>
  )
}
