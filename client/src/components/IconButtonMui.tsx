import { Box, IconButton } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function IconButtonMui({ icon }) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        color: "text.primary",
        borderRadius: 1,
        p: 0,
      }}
    >
      <IconButton
        sx={{
          fontSize: "25px",
          minWidth: "25px",
          color: theme.palette.text.primary,
        }}
      >
        {icon}
      </IconButton>
    </Box>
  );
}
