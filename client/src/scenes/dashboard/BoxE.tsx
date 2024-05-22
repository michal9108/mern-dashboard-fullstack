import { BoxHeader } from "@/components/BoxHeader";
import DashboardBox from "@/components/DashboardBox";
import { ResponsiveContainer } from "recharts";
import DataThresholdingOutlinedIcon from "@mui/icons-material/DataThresholdingOutlined";
import { Box, Divider, useTheme } from "@mui/material";
import ConversionStep from "@/components/ConversionStep";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import ShoppingCartCheckoutOutlinedIcon from "@mui/icons-material/ShoppingCartCheckoutOutlined";
import WalletOutlinedIcon from "@mui/icons-material/WalletOutlined";
import { useMediaQueries } from "../../../shared/screensResponsivness"

export default function BoxE({
  conversionRate,
  totalCheckouts,
  totalPurchases,
  totalCarts,
}) {
  const theme = useTheme();

  const { isAboveSmallScreens } = useMediaQueries();

  return (
    <DashboardBox gridArea="e">
      <ResponsiveContainer width="100%" height="100%">
        <Box display="flex" flexDirection="column">
          <BoxHeader
            title="Conversion Rate"
            conversionRate={conversionRate}
            icon={<DataThresholdingOutlinedIcon />}
          ></BoxHeader>

          <Box
            display="flex"
            width="100%"
            margin="auto"
            gap="1rem"
            flexDirection={isAboveSmallScreens ? "row" : "column"}
            alignItems="center"
            justifyContent="center"
            sx={{
              textAlign: "center",
        

              backgroundColor: theme.palette.secondary.dark,
              borderRadius: "0.4rem",
              boxShadow:
                "0px 7px 8px -4px rgb(0 0 0 / %), 0px 12px 17px 2px rgb(0 0 0 / 14%), 0px 5px 22px 4px rgb(0 0 0 / 12%)",
            }}
          >
           
            <ConversionStep
              icon={<AddShoppingCartOutlinedIcon fontSize={isAboveSmallScreens ? "medium" :  "large"} />}
              funnelStep="Add to Cart"
              funnelStepAmount={totalCarts}
            />

            <Divider orientation="vertical" flexItem />

            <ConversionStep
              icon={<ShoppingCartCheckoutOutlinedIcon fontSize={isAboveSmallScreens ? "medium" :  "large"} />}
              funnelStep="Checkout"
              funnelStepAmount={totalCheckouts}
            />
            <Divider orientation="vertical" flexItem />

            <ConversionStep
              icon={<WalletOutlinedIcon fontSize={isAboveSmallScreens ? "medium" :  "large"} />}
              funnelStep="Purchases"
              funnelStepAmount={totalPurchases}
            />
           
          </Box>
        </Box>
      </ResponsiveContainer>
    </DashboardBox>
  );
}
