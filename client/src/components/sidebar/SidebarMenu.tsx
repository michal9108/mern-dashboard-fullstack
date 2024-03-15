import { useTheme } from "@mui/material";
import {
  PublicOutlined,
  ReceiptLongOutlined,
  SettingsOutlined,
} from "@mui/icons-material";
import React from "react";
import { Menu, MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import PowerIcon from '@mui/icons-material/Power';
import { tokensDark } from "@/theme";
function SidebarMenu() {
  const theme = useTheme();

  return (
    <div>
      <Menu
        menuItemStyles={{
          button: ({ level, active, disabled }) => {
            if (level === 0) {
              return {
                color: theme.palette.text.primary,
                backgroundColor: active
                  ? theme.palette.background.default
                  : theme.palette.background.default,
                "&:hover": {
                  backgroundColor: "#312F3B !important",
                  color: "white !important",

                  fontWeight: "bold !important",
                },
              };
            }
          },
        }}
      >
        <MenuItem component={<Link to="/dashboard" />}>
          <PublicOutlined
            sx={{ minWidth: "20px", fontSize: "25px", marginRight: "1rem" }}
          />
          Dashboard
        </MenuItem>
        <MenuItem component={<Link to="/dashboard" />}>
          <ReceiptLongOutlined
            sx={{ minWidth: "20px", fontSize: "25px", marginRight: "1rem" }}
          />{" "}
          Reporting
        </MenuItem>
        <MenuItem component={<Link to="/dashboard" />}>
          {" "}
          <AttachMoneyIcon
            sx={{ minWidth: "20px", fontSize: "25px", marginRight: "1rem" }}
          />
          Sales Data
        </MenuItem>
        <MenuItem component={<Link to="/dashboard" />}>
          {" "}
          <TrendingUpIcon
            sx={{ minWidth: "20px", fontSize: "25px", marginRight: "1rem" }}
          />
          Tracking
        </MenuItem>
        <MenuItem component={<Link to="/integrations" />}>
          {" "}
          <PowerIcon
            sx={{ minWidth: "20px", fontSize: "25px", marginRight: "1rem" }}
          />
          Integrations
        </MenuItem>
        <MenuItem component={<Link to="/settings"  />}>
          {" "}
          <SettingsOutlined
            sx={{ minWidth: "20px", fontSize: "25px", marginRight: "1rem" }}
          />
          Settings
        </MenuItem>
        <MenuItem component={<Link to="/dashboard" />}>
          {" "}
          <PublicOutlined
            sx={{ minWidth: "20px", fontSize: "25px", marginRight: "1rem" }}
          />
          Documentation
        </MenuItem>
      </Menu>
    </div>
  );
}

export default SidebarMenu;
