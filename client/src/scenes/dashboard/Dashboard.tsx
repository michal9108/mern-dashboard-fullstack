import { Box, Divider, Switch, useMediaQuery, useTheme } from "@mui/material";
import Row1 from "./Row1";
import Row2 from "./Row2";
import Row3 from "./Row3";
import NavBar from "../../components/NavBar";
import {
  gridTemplateLargeScreens,
  gridTemplateSmallScreens,
  useMediaQueries,
} from "../../../shared/screensResponsivness";
import { useState } from "react";
import SidebarPro from "@/components/sidebar/SidebarPro";

export default function Dashboard() {
  const theme = useTheme();
  const { isAboveMediumScreens, isAboveMobileScreens } = useMediaQueries();


  return (
    <Box
      width="100%"
      height="100%"
      display="grid"
      gap="1.5rem"
      sx={
        isAboveMediumScreens
          ? {
              textAlign: "center",
              gridTemplateColumns: "repeat(3, minmax(360px, 1fr))",
              gridTemplateRows: "repeat(14, minmax(40px, 1fr))",
              gridTemplateAreas: gridTemplateLargeScreens,
              padding: "1.5rem 1.5rem 4rem 1.5rem",
            }
          : isAboveMobileScreens
            ? {
                textAlign: "center",
                gridAutoColumns: "1fr",
                gridAutoRows: "80px",
                gridTemplateAreas: gridTemplateSmallScreens,
                padding: "1.5rem 1.5rem 4rem 1.5rem",
              }
            : {
                textAlign: "center",
                gridAutoColumns: "1fr",
                gridAutoRows: "80px",
                gridTemplateAreas: gridTemplateSmallScreens,
                padding: "1.5rem 1.5rem 4rem 1.5rem",
              }
      }
    >
      <Row1 />
      <Row2 />
      <Row3 />
    </Box>
  );
}
