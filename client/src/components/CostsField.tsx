import React from "react";
import { Box, useTheme } from "@mui/material";
import {CostsFieldType } from "../../shared/types";
import "../index.css";
import BoxContainer from "./BoxContainer";


const CostsField = ({ costTitle, iconCosts }: CostsFieldType) => {
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
      {iconCosts}
        <div style={{ fontWeight: "600", fontSize: "15px" }}>{costTitle}</div>
  
       
        </BoxContainer>

    </Box>
  );
};

export { CostsField };
