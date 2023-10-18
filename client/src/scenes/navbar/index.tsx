import { useState } from "react";
import { Link } from "react-router-dom";
import BarChartIcon from '@mui/icons-material/BarChart';
import {
  Menu as MenuIcon,
  LightModeOutlined,
  SettingsOutlined,
} from "@mui/icons-material";
import "/src/index.css"; 
import { Box,Menu,MenuItem, IconButton} from "@mui/material";
import FlexBetween from "@/components/FlexBetween";
import NotificationsIcon from '@mui/icons-material/Notifications';


type Props = {};

const Navbar = (props: Props) => {
  
  const [selected, setSelected] = useState("dashboard");

  return (
    <FlexBetween mb="0.25rem" p="0.5rem 0rem" color="#d1d3da">
      {/* LEFT SIDE */}
      <FlexBetween gap="0.75rem"  sx={{  pt:1 }}>
        
        <BarChartIcon sx={{ fontSize: "25px" }} />
         <div className={"title"}>TRACKIFY</div> 
        
        <MenuIcon />
      </FlexBetween>

      {/* RIGHT SIDE */}
      <FlexBetween gap="2rem">
        <Box sx={{ "&:hover": { color:"#d0fcf4" }, pt:1 }}>
          <Link
            to="/"
            onClick={() => setSelected("dashboard")}
            style={{
              color: selected === "dashboard" ? "inherit" : "#6b6d74",
              textDecoration: "inherit",
            }}
          >
            Dashboard
          </Link>
        </Box>
        <IconButton  sx={{ color: "#ffffff" }} >
        <NotificationsIcon  sx={{ fontSize: "25px" }} />

       </IconButton>

        <IconButton  sx={{ color: "#ffffff" }} >
       
          <LightModeOutlined sx={{ fontSize: "25px" }} />
        
          </IconButton>
          <IconButton  sx={{ color: "#ffffff" }}>
            <SettingsOutlined sx={{ fontSize: "25px" }} />
          </IconButton>

      </FlexBetween>
    </FlexBetween>
  );
};

export default Navbar;