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
  const {
    isAbove4KScreens,
    isAboveExtraLargeScreens,
    isAboveLargeScreens,
    isAboveSmallScreens,
    isAboveLaptopScreens,
    isAboveMobileScreens,
    isAboveSmallMobileScreens,
  } = useMediaQueries();

  return (
    <Box
      width="100%"
      height="100%"
      display="grid"
      gap="1.5rem"
      sx={
        isAbove4KScreens
          ? {
              textAlign: "center",
              gridTemplateColumns: "repeat(3, minmax(360px, 1fr))",
              gridTemplateRows: "repeat(14, minmax(40px, 1fr))",
              gridTemplateAreas: gridTemplateLargeScreens,
              padding: "1.5rem 1.5rem 1.5rem 1.5rem",
            }
          : isAboveLaptopScreens
            ? {
                textAlign: "center",
                gridTemplateColumns: "repeat(3, minmax(360px, 1fr))",
                gridTemplateRows: "repeat(14, minmax(45px, 1fr))",
                gridTemplateAreas: gridTemplateLargeScreens,
                padding: "1.5rem 1.5rem 1.5rem 1.5rem",
              }
            : isAboveExtraLargeScreens
              ? {
                  textAlign: "center",
                  gridTemplateColumns: "repeat(3, minmax(360px, 1fr))",
                  gridTemplateRows: "repeat(14, minmax(40px, 1fr))",
                  gridTemplateAreas: gridTemplateLargeScreens,
                  padding: "1.5rem 1.5rem 4rem 1.5rem",
                }
              : isAboveLargeScreens
                ? {
                    textAlign: "center",
                    gridAutoColumns: "minmax(360px, 1fr)",
                    gridAutoRows: "80px",
                    gridTemplateAreas: gridTemplateSmallScreens,
                    padding: "1.5rem 1.5rem 4rem 1.5rem",
                  }
                : isAboveSmallScreens
                  ? {
                      textAlign: "center",
                      gridAutoColumns: "minmax(360px, 1fr)",
                      gridAutoRows: "80px",
                      gridTemplateAreas: gridTemplateSmallScreens,
                      padding: "1.5rem 1.5rem 4rem 1.5rem",
                    }
                  : isAboveMobileScreens
                    ? {
                        textAlign: "center",
                        gridAutoColumns: "minmax(200px, 1fr)",
                        gridAutoRows: "80px",
                        gridTemplateAreas: gridTemplateSmallScreens,
                        padding: "1.5rem 1.5rem 4rem 1.5rem",
                      }
                    : isAboveSmallMobileScreens
                      ? {
                          textAlign: "center",
                          gridAutoColumns: "minmax(200px, 1fr)",
                          gridAutoRows: "80px",
                          gridTemplateAreas: gridTemplateSmallScreens,
                          padding: "1.5rem 1.5rem 4rem 1.5rem",
                        }
                      : {
                          textAlign: "center",
                          gridAutoColumns: "minmax(200px, 1fr)",
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
