import React, { useState } from "react";
import axios from "axios";
import {
  Button,
  Box,
  Typography,
  Menu,
  MenuItem,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Menu as MenuIcon, ArrowDropDownOutlined } from "@mui/icons-material";

type Props = {};

const Logout = () => {
  const theme = useTheme();

  const [anchorEl, setAnchorEl] = useState(null);
  const isOpen = Boolean(anchorEl);
  const handleClose = () => setAnchorEl(null);
  const handleClick = (event: any) => setAnchorEl(event.currentTarget);

  const handleLogout = async () => {
    const token = localStorage.getItem("token");

    // Call the server-side logout route
    await axios.post("https://server-dashboard-mern.fly.dev/logout", { token });

    // Clear the token from local storage
    localStorage.removeItem("token");

    // Redirect or perform other logout-related actions
    // For example, you can redirect to the login page
    window.location.href = "/";
  };

  return (
    <>
      <Button onClick={handleClick}>
        <Box textAlign="left">
          <Typography
            fontWeight="bold"
            fontSize="1rem"
            sx={{ color: theme.palette.text.primary }}
          >
            User
          </Typography>
        </Box>
        <ArrowDropDownOutlined
          sx={{ color: theme.palette.text.primary, fontSize: "25px" }}
        />
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
