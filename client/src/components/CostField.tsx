import React from "react";
import { Box, Typography } from "@mui/material";

import "../index.css";

type Props = {
  costTitle: string;
  costAmount: number;
  costDescription: string;
};
const CostField = ({ costTitle, costAmount, costDescription }: Props) => {
  return (
    <Box
      width="50%"
      height="50%"
      margin="auto"
      display="flex"
      alignContent="center"
      justify-content="center"
      flexDirection="column"
    >
      <div className={"box-header"} style={{ marginTop: 35 }}>
        {costTitle}
      </div>
      <div className={"a-revenue"}>${costAmount}</div>
      <div className={"conversion-row"}> {costDescription}</div>
    </Box>
  );
};

export { CostField };
