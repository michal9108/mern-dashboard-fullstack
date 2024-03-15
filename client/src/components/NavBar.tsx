import { useState } from "react";
import { Link } from "react-router-dom";

import "/src/index.css";
import { Box, Divider, Switch, createTheme, useTheme } from "@mui/material";
import FlexBetween from "@/components/FlexBetween";
import Logout from "../scenes/auth/Logout";
import ThemeToggler from "./ThemeToggler";
import IconButtonMui from "./IconButtonMui";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Menu as MenuIcon } from "@mui/icons-material";

import BarChartIcon from "@mui/icons-material/BarChart";


const NavBar = ({ handleToggleSidebar }) => {


  const theme = useTheme();

  const [selected, setSelected] = useState("dashboard");

  

 
  return (
    <>
    <FlexBetween mb="0.25rem" p="0.5rem 1.5rem" color="#d1d3da">
      {/* LEFT SIDE */}
      <FlexBetween gap="1.5rem">

      <IconButtonMui icon={ <BarChartIcon
            sx={{ fontSize: "25px", color: theme.palette.text.primary }}
          />} />
      <IconButtonMui icon={ <MenuIcon
          sx={{ color: theme.palette.text.primary }}
          onClick={handleToggleSidebar}
        />} />
       
      </FlexBetween>

      {/* RIGHT SIDE */}
      <FlexBetween gap="2rem">
        <IconButtonMui icon={<NotificationsIcon />} />
        <ThemeToggler />

        <Box sx={{ "&:hover": { color: "#d0fcf4" } }}>
          <Logout />
        </Box>
      </FlexBetween>
     
    </FlexBetween>
     <Divider />
     </>
  );
};

export default NavBar;
