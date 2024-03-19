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
  Divider,
} from "@mui/material";
import {
  Menu as MenuIcon,
  ArrowDropDownOutlined,
  SettingsOutlined,
} from "@mui/icons-material";
import FlexBetween from "@/components/FlexBetween";
import Avatar from "@mui/material/Avatar";
import { tokensDark } from "@/theme";
import LogoutIcon from "@mui/icons-material/Logout";
import IconButtonMui from "@/components/IconButtonMui";
import { Link } from "react-router-dom";
import useLogout from "./useLogout";

const Logout = () => {

  const {handleLogout} = useLogout();
  
  const theme = useTheme();

  const [anchorEl, setAnchorEl] = useState(null);
  const isOpen = Boolean(anchorEl);
  const handleClose = () => setAnchorEl(null);
  const handleClick = (event: any) => setAnchorEl(event.currentTarget);



  return (
    <>
      <Button onClick={handleClick}>
        <Box textAlign="left" display="flex" flexDirection="row">
          <Avatar sx={{ bgcolor: tokensDark.primary }}>N</Avatar>
          <Typography
            fontWeight="bold"
            fontSize="1rem"
            textAlign="center"
            width="100%"
            margin="auto"
            padding="0.5rem"
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

 {/*  USER COPY EMAIL TO CLIPBOARD TO DO  */}
        {/* <MenuItem> Email</MenuItem> */}

        <Link to="/settings" style={{ color: "inherit", textDecoration:"none" }}>
          <MenuItem>
            <IconButtonMui icon={<SettingsOutlined />} />
            {"Profile Settings"}
          </MenuItem>
        </Link>

        <Link to="/login" style={{ color: "inherit", textDecoration:"none" }}>
          <MenuItem onClick={handleLogout}>
            <IconButtonMui icon={<LogoutIcon />} />
            {"Log Out"}
          </MenuItem>
        </Link>
      </Menu>
    </>
  );
};

export default Logout;
