import { Box, Typography } from "@mui/material";
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
  return (
   

    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <div className={"conversion-row"}>{icon} </div>
      <div className={"conversion-row"}> {funnelStep}</div>
      <div className={"conversion-row"}>{funnelStepAmount} </div>
    </Box>

   
  );
}
