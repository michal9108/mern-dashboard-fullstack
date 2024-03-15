import { Box, Typography, useTheme } from "@mui/material";
import "../index.css";
import React from "react";

type Props = {
  funnelStep: string;
  funnelStepAmount: number;
  icon: React.ReactNode;
};

export default function ConversionStep({
  funnelStep,
  funnelStepAmount,
  icon,
}: Props) {
  const theme = useTheme();

  return (
    <Box sx={{ display: "flex", flexDirection: "row", gap:'0.5rem', marginLeft:'0.5rem',marginRight:'0.5rem' }}>
      <div
        style={{
          fontWeight: "400",
          display: "flex",
          fontSize: "12px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {icon}{" "}
      </div>
      <span style={{ display: "flex", flexDirection: "column" }}>
        {" "}
        <div style={{ fontWeight: "500", fontSize: "12px" }}> {funnelStep}</div>
        <div style={{ fontWeight: "500", fontSize: "12px" }}>
          {funnelStepAmount}{" "}
        </div>
      </span>
    </Box>
  );
}
