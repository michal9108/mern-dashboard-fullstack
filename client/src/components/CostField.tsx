import React from "react";
import { Box, Typography, useTheme } from "@mui/material";

import "../index.css";
import BoxContainer from "./BoxContainer";

type Props = {
  costTitle: string;
  costAmount: number;
  costDescription: string;
};
const CostField = ({ costTitle, costAmount, costDescription }: Props) => {
  const theme = useTheme();

  return (
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
        <div className={"box-header"}>{costTitle}</div>
        <div className={"a-revenue"}>${costAmount}</div>
        <div className={"conversion-row"}> ({costDescription})</div>
        </BoxContainer>

    </Box>
  );
};

export { CostField };
