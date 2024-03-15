import { Box, useTheme } from "@mui/material";
import React from "react";
import FlexBetween from "./FlexBetween";
import { tokensDark } from "@/theme";
import HeaderTypes from "@/../shared/types";

const BoxHeader = ({
  icon,
  title,
  totalProfit,
  totalExpenses,
  totalOrders,
  totalRevenue,
  conversionRate,
  totalSessions,
}: HeaderTypes) => {
  const theme = useTheme();

  return (
    <FlexBetween
      sx={{ color: theme.palette.text.primary }}
      margin="1.5rem 1rem 0 1rem"
    >
      <FlexBetween>
        <div style={{ marginRight: "1rem" }}>{icon}</div>

        <Box width="100%">
          <div style={{ fontWeight: "700", fontSize: "15px" }}>{title}</div>
        </Box>
      </FlexBetween>

      <FlexBetween>
        {totalRevenue && (
          <div
            style={{
              marginRight: "0.5rem",
              fontWeight: "700",
              fontSize: "15px",
            }}
          >
            ${totalRevenue}{" "}
          </div>
        )}
        {totalProfit && (
          <div
            style={{
              color: tokensDark.primary[500],
              fontWeight: "700",
              fontSize: "15px",
            }}
          >
            ${totalProfit}{" "}
          </div>
        )}
        {totalExpenses && (
          <div
            style={{
              color: tokensDark.negative[800],
              fontWeight: "700",
              fontSize: "15px",
            }}
          >
            ${totalExpenses}{" "}
          </div>
        )}
        {totalOrders && (
          <div
            style={{
              color: tokensDark.primary[500],
              fontWeight: "700",
              fontSize: "15px",
            }}
          >
            {totalOrders}{" "}
          </div>
        )}
        {conversionRate && (
          <div
            style={{
              color: tokensDark.primary[500],
              fontWeight: "700",
              fontSize: "15px",
            }}
          >
            {conversionRate}%{" "}
          </div>
        )}
        {totalSessions && (
          <div
            style={{
              color: tokensDark.grey[0],
              fontWeight: "700",
              fontSize: "15px",
            }}
          >
            {totalSessions}
          </div>
        )}
      </FlexBetween>
    </FlexBetween>
  );
};

export { BoxHeader };
