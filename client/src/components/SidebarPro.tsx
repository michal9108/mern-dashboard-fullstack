
import { useTheme } from "@mui/material";

import { Sidebar, Menu, MenuItem, sidebarClasses } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import {
  PublicOutlined,
  SettingsOutlined,
  ReceiptLongOutlined,
} from "@mui/icons-material";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";




export default function SidebarPro({collapsed, isNonMobile }) {
    const theme = useTheme();

  return (
    <Sidebar
    collapsed={collapsed}
    style={{ color: theme.palette.text.primary }}
    rootStyles={{
      [`.${sidebarClasses.container}`]: {
        backgroundColor: theme.palette.background.default,
      },
    }}
  >
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
      <MenuItem component={<Link to="/dashboard" />}>
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
  </Sidebar>
  )
}
