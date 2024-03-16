import DashboardBox from "@/components/DashboardBox";
import { tokensDark } from "@/theme";
import { Box, Divider, useTheme } from "@mui/material";
import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { funnelStore } from "../../../../server/data/data";
const pieColors = [tokensDark.negative[800], tokensDark.primary[500]];

function BoxJ() {
  const theme = useTheme();

  return (
    <DashboardBox gridArea="j">
      <ResponsiveContainer width="100%" height="100%">
        <Box
          display="grid"
          gap="0rem"
          height="100%"
          width="100%"
          flexDirection="row"
          sx={{
            backgroundColor: theme.palette.secondary.dark,
            borderRadius: "0.4rem",
           
            boxShadow:
              "0px 7px 8px -4px rgb(0 0 0 / 20%), 0px 12px 17px 2px rgb(0 0 0 / 14%), 0px 5px 22px 4px rgb(0 0 0 / 12%)",
          }}
        >
          <Box display={"flex"} justifyContent={"center"}>
            <section
              style={{
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
                flexDirection: "column",
                backgroundColor: theme.palette.secondary.dark,
                borderRadius: "0.4rem",
                
             
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
      </ResponsiveContainer>
    </DashboardBox>
  );
}

export default BoxJ;
