import { useState } from "react";
import { Link } from "react-router-dom";
import BarChartIcon from "@mui/icons-material/BarChart";
import { Menu as MenuIcon, LightModeOutlined } from "@mui/icons-material";
import "/src/index.css";
import { Box, IconButton } from "@mui/material";
import FlexBetween from "@/components/FlexBetween";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Logout from "../scenes/auth/Logout";

type Props = {};

const NavBar = (props: Props) => {
  const [selected, setSelected] = useState("dashboard");

  return (
    <FlexBetween mb="0.25rem" p="0.5rem 1.5rem" color="#d1d3da">
      {/* LEFT SIDE */}
      <FlexBetween gap="1.5rem" sx={{ pt: 1 }}>
        <BarChartIcon sx={{ fontSize: "25px" }} />

        <MenuIcon />
      </FlexBetween>

      {/* RIGHT SIDE */}
      <FlexBetween gap="2rem">
        <IconButton sx={{ color: "#ffffff" }}>
          <NotificationsIcon sx={{ fontSize: "25px" }} />
        </IconButton>

        <IconButton sx={{ color: "#ffffff" }}>
          <LightModeOutlined sx={{ fontSize: "25px" }} />
        </IconButton>

        <Box sx={{ "&:hover": { color: "#d0fcf4" }, pt: 1 }}>
          <Logout />
        </Box>
      </FlexBetween>
    </FlexBetween>
  );
};

export default NavBar;
