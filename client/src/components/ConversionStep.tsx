import { Box, Typography, useTheme } from "@mui/material";
import "../index.css";

import { useMediaQueries } from "../../shared/screensResponsivness";
import { ConversionTypes } from "shared/types";

export default function ConversionStep({
  funnelStep,
  funnelStepAmount,
  icon,
}: ConversionTypes) {
  const { isAboveMobileScreens, applyFontStyles } = useMediaQueries();
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        gap: isAboveMobileScreens ? "0.5rem" : "1.5rem",
        marginLeft: "0.5rem",
        marginRight: "0.5rem",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          ...applyFontStyles(),
        }}
      >
        {icon}{" "}
      </div>
      <span style={{ display: "flex", flexDirection: "column" }}>
        {" "}
        <div style={{ ...applyFontStyles() }}> {funnelStep}</div>
        <div style={{ ...applyFontStyles() }}>{funnelStepAmount} </div>
      </span>
    </Box>
  );
}
