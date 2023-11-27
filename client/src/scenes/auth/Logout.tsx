import React, { useState } from "react";
import axios from "axios";
import {
  AppBar,
  useTheme,
  Toolbar,
  IconButton,
  InputBase,
  Button,
  Box,
  Typography,
  Menu,
  MenuItem,
  useMediaQuery,
} from "@mui/material";
import {
  LightModeOutlined,
  DarkModeOutlined,
  Menu as MenuIcon,
  Search,
  SettingsOutlined,
  ArrowDropDownOutlined,
} from "@mui/icons-material";
import FE_API_URL from "@/config";
type Props = {};

const Logout = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const isOpen = Boolean(anchorEl);
  const handleClose = () => setAnchorEl(null);
  const handleClick = (event: { currentTarget: React.SetStateAction<null>; }) => setAnchorEl(event.currentTarget);

  const handleLogout = async () => {
    const token = localStorage.getItem("token");

    // Call the server-side logout route
    await axios.post(`${FE_API_URL}/logout`, { token });

    // Clear the token from local storage
    localStorage.removeItem("token");

    // Redirect or perform other logout-related actions
    // For example, you can redirect to the login page
    window.location.href = "/login";
  };

  return (
    <>
      <Button onClick={handleClick}>
        <Box textAlign="left">
          <Typography fontWeight="bold" fontSize="1rem" sx={{ color: "white" }}>
            User
          </Typography>
        </Box>
        <ArrowDropDownOutlined sx={{ color: "white", fontSize: "25px" }} />
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={isOpen}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <MenuItem onClick={handleLogout}>Log Out</MenuItem>
      </Menu>
    </>
  );
};

export default Logout;
