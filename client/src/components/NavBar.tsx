import "/src/index.css";
import {
  Box,
  Container,
  Divider,
  Popover,
  Switch,
  Typography,
  createTheme,
  useTheme,
} from "@mui/material";
import FlexBetween from "@/components/FlexBetween";
import Logout from "../scenes/auth/Logout";
import ThemeToggler from "./ThemeToggler";
import IconButtonMui from "./IconButtonMui";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Menu as MenuIcon } from "@mui/icons-material";

import BarChartIcon from "@mui/icons-material/BarChart";
import { useState } from "react";
import NotificationPopover from "./NotificationPopover";

const NavBar = ({
  handleToggleSidebar,
  handelMobileSidebarShown,
  isAboveSmallScreens,
}) => {
  const theme = useTheme();



  return (
    <>
      <FlexBetween mb="0.25rem" p="0.5rem 1.5rem" color="#d1d3da">
        {/* LEFT SIDE */}
        <FlexBetween gap="1rem">
          <IconButtonMui
            icon={
              <BarChartIcon
                sx={{ fontSize: "25px", color: theme.palette.text.primary }}
              />
            }
          />
          {isAboveSmallScreens ? (
            <IconButtonMui
              icon={
                <MenuIcon
                  sx={{ color: theme.palette.text.primary }}
                  onClick={handleToggleSidebar}
                />
              }
            />
          ) : (
            <IconButtonMui
              icon={
                <MenuIcon
                  sx={{ color: theme.palette.text.primary }}
                  onClick={handelMobileSidebarShown}
                />
              }
            />
          )}
        </FlexBetween>

        {/* RIGHT SIDE */}
        <FlexBetween gap="1rem">
        

          <NotificationPopover note="There are no Notifications">
            <IconButtonMui icon={<NotificationsIcon />} />
          </NotificationPopover>
          <NotificationPopover note="Switch theme">
          <ThemeToggler />
          </NotificationPopover>
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
