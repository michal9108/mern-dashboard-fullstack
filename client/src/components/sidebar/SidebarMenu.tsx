import { Typography, useTheme } from "@mui/material";
import {
  PublicOutlined,
  ReceiptLongOutlined,
  SettingsOutlined,
} from "@mui/icons-material";
import React from "react";
import { Menu, MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import SchoolIcon from "@mui/icons-material/School";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import PowerIcon from "@mui/icons-material/Power";
import { tokensDark } from "@/theme";
import InventoryIcon from "@mui/icons-material/Inventory";
import NotificationPopover from "../NotificationPopover";

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
        <NotificationPopover note="Main DashBoard Menu">
          <MenuItem
            component={<Link to="/dashboard" />}
            icon={<PublicOutlined />}
          >
            Dashboard
          </MenuItem>
        </NotificationPopover>
        <NotificationPopover note="List of products and their specifics.">
          <MenuItem
            component={<Link to="/products" />}
            icon={<InventoryIcon />}
          >
            {"Products"}
          </MenuItem>
        </NotificationPopover>
        <NotificationPopover note="Transactions with additional informations.">
          <MenuItem
            component={<Link to="/transactions" />}
            icon={<AttachMoneyIcon />}
          >
            {"Transactions"}
          </MenuItem>
        </NotificationPopover>
        <NotificationPopover note="Integrations with other vendors and API's">
          <MenuItem
            component={<Link to="/integrations" />}
            icon={<PowerIcon />}
          >
            {"Integrations "}
          </MenuItem>
        </NotificationPopover>
        <NotificationPopover note="Profile Settings">
          <MenuItem
            component={<Link to="/settings" />}
            icon={<SettingsOutlined />}
          >
            {"Settings"}
          </MenuItem>
        </NotificationPopover>
        <NotificationPopover note="Manual for the service">
          <MenuItem
            component={<Link to="/documentation" />}
            icon={<SchoolIcon />}
          >
            {"Documentation"}
          </MenuItem>
        </NotificationPopover>
      </Menu>
    </div>
  );
}

export default SidebarMenu;
