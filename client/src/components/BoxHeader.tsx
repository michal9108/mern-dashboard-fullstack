import { Box, Typography } from "@mui/material";
import "../index.css";
import React from "react";
import FlexBetween from "./FlexBetween";


type Props = {
  title: string;
  icon?: React.ReactNode;
  totalProfit?: number;
  totalExpenses?: number;
  totalRevenue?: number;
  totalOrders?: number;
  totalSessions?: number;
  conversionRate?: number;
};
const BoxHeader = ({
  icon,
  title,
  totalProfit,
  totalExpenses,
  totalOrders,
  totalRevenue,
  conversionRate,
  totalSessions,
}: Props) => {
  return (
    <FlexBetween color="#c2c5ce" margin="1.5rem 1rem 0 1rem">
      <FlexBetween>
  <div style={{marginRight:'1rem'}}>{icon}</div>

        <Box width="100%">
          <div className={"box-header"}>{title}</div>
        </Box>
      </FlexBetween>

      <FlexBetween>
        {totalRevenue && (
          <div className={"a-revenue"} style={{ marginRight: "0.5rem" }}>
            ${totalRevenue}{" "}
          </div>
        )}
        {totalProfit && <div className={"a-profit"}>${totalProfit} </div>}
        {totalExpenses && <div className={"a-expenses"}>${totalExpenses} </div>}
        {totalOrders && <div className={"row2-num "}>{totalOrders} </div>}
        {conversionRate && (
          <div className={"row2-num "}>{conversionRate}% </div>
        )}
        {totalSessions && <div className={"row2-num"}>{totalSessions}</div>}
      </FlexBetween>
    </FlexBetween>
  );
};

export { BoxHeader };
