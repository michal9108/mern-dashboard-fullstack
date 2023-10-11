// import { Box, Typography, useTheme } from "@mui/material";
import { Box, Typography} from "@mui/material";
import "../index.css"; 
import React from "react";
import FlexBetween from "./FlexBetween";

type Props = {
  title: string;
  sideText: string;
  subtitle?: string;
  icon?: React.ReactNode;
};

const BoxHeader = ({ icon, title, subtitle, sideText }: Props) => {
  return (
    <FlexBetween color="#c2c5ce" margin="1.5rem 1rem 0 1rem">
      <FlexBetween>
        {icon}
        <Box width="100%">
          <div className={"box-header"}>{title}</div>
          {subtitle && <div className={"subtitle"}>{subtitle}</div>}
        </Box>
      </FlexBetween>
      <div className={"side-text"}>{sideText}</div>
    </FlexBetween>
  );
};

export default BoxHeader;