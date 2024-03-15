import { BoxHeader } from "@/components/BoxHeader";
import DashboardBox from "@/components/DashboardBox";
import { Box, useTheme } from "@mui/material";
import { DataGrid, GridCellParams } from "@mui/x-data-grid";
import { ResponsiveContainer } from "recharts";
import LocalPostOfficeIcon from "@mui/icons-material/LocalPostOffice";
import LoyaltyIcon from "@mui/icons-material/Loyalty";
import CancelIcon from "@mui/icons-material/Cancel";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import BoxContainer from "../../components/BoxContainer";

function BoxI({ shippingCosts, coupons, refunds, taxes }) {


  const theme = useTheme();
  return (
    <DashboardBox gridArea="i" display="flex" flexWrap="wrap">
      <ResponsiveContainer width="100%" height="100%">
        <Box
          display="grid"
          gap="1.5rem"
          width="100%"
          height="100%"
          sx={{
            textAlign: "center",
            gridTemplateColumns: "repeat(2, minmax(100px, 1fr))",
            gridTemplateRows: "repeat(2, minmax(60px, 1fr))",

            backgroundColor: theme.palette.background.default,

            borderRadius: "0.4rem",
            boxShadow:
              "0px 7px 8px -4px rgb(0 0 0 / 20%), 0px 12px 17px 2px rgb(0 0 0 / 14%), 0px 5px 22px 4px rgb(0 0 0 / 12%)",
          }}
        >


          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              textAlign: "center",

              backgroundColor: theme.palette.secondary.dark,
              borderRadius: "0.4rem",
              boxShadow:
                "0px 7px 8px -4px rgb(0 0 0 / 20%), 0px 12px 17px 2px rgb(0 0 0 / 14%), 0px 5px 22px 4px rgb(0 0 0 / 12%)",
            }}
          >
            <BoxContainer>
              <LocalPostOfficeIcon />
              <div style={{ fontWeight: "600", fontSize: "15px" }}>
                Shipping costs
              </div>
              <div style={{ fontWeight: "500", fontSize: "12px" }}>
                ${shippingCosts}
              </div>
            </BoxContainer>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              textAlign: "center",

              backgroundColor: theme.palette.secondary.dark,
              borderRadius: "0.4rem",
              boxShadow:
                "0px 7px 8px -4px rgb(0 0 0 / 20%), 0px 12px 17px 2px rgb(0 0 0 / 14%), 0px 5px 22px 4px rgb(0 0 0 / 12%)",
            }}
          >
            <BoxContainer>
              <LoyaltyIcon />
              <div style={{ fontWeight: "600", fontSize: "15px" }}>
               Coupons
              </div>
              <div style={{ fontWeight: "500", fontSize: "12px" }}>
                {coupons}
              </div>
            </BoxContainer>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              textAlign: "center",

              backgroundColor: theme.palette.secondary.dark,
              borderRadius: "0.4rem",
              boxShadow:
                "0px 7px 8px -4px rgb(0 0 0 / 20%), 0px 12px 17px 2px rgb(0 0 0 / 14%), 0px 5px 22px 4px rgb(0 0 0 / 12%)",
            }}
          >
            <BoxContainer>
              <CancelIcon />
              <div style={{ fontWeight: "600", fontSize: "15px" }}>
              Refunds
              </div>
              <div style={{ fontWeight: "500", fontSize: "12px" }}>
                ${refunds}
              </div>
            </BoxContainer>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              textAlign: "center",

              backgroundColor: theme.palette.secondary.dark,
              borderRadius: "0.4rem",
              boxShadow:
                "0px 7px 8px -4px rgb(0 0 0 / 20%), 0px 12px 17px 2px rgb(0 0 0 / 14%), 0px 5px 22px 4px rgb(0 0 0 / 12%)",
            }}
          >
            <BoxContainer>
              <AccountBalanceIcon />
              <div style={{ fontWeight: "600", fontSize: "15px" }}>
              Taxes
              </div>
              <div style={{ fontWeight: "500", fontSize: "12px" }}>
                ${taxes}
              </div>
            </BoxContainer>
          </Box>



        </Box>

      </ResponsiveContainer>
    </DashboardBox>
  );
}

export default BoxI;
