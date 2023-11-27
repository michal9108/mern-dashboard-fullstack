import { Box, Typography } from "@mui/material";
import "../index.css";
import React from "react";
import FlexBetween from "./FlexBetween";

type Props = {
  funnelStep: string;
  funnelStepAmount: number;
};

const ConversionRow = ({ funnelStep, funnelStepAmount }: Props) => {
  return (
    <FlexBetween color="#c2c5ce" margin="1.5rem 1rem 0 1rem">
      <FlexBetween>
        <Box width="100%">
          <div className={"conversion-row"}>{funnelStep}</div>
        </Box>
      </FlexBetween>

      <FlexBetween>
        <div className={"conversion-row"}>{funnelStepAmount} </div>
      </FlexBetween>
    </FlexBetween>
  );
};

export { ConversionRow };
