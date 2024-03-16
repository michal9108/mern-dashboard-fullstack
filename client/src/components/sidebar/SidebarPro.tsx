import { useTheme } from "@mui/material";
import { Sidebar, Menu, MenuItem, sidebarClasses } from "react-pro-sidebar";
import { tokensDark } from "@/theme";
import SidebarMobile from './SidebarMobile'
import SidebarMenu from "./SidebarMenu";

export default function SidebarPro({
  collapsed,
  isAboveMobileScreens,
  
  isMobileSidebarShown,
}) {
  const theme = useTheme();

  return (
    <>
      {isAboveMobileScreens ? (
        <Sidebar
          collapsed={collapsed}
        
          style={{
            color: theme.palette.text.primary,
            borderColor: tokensDark.grey[700],
          }}
          rootStyles={{
            [`.${sidebarClasses.container}`]: {
              backgroundColor: theme.palette.background.default,
            },
          }}
        >
       <SidebarMenu />
        </Sidebar>
      ) : (

        <SidebarMobile isMobileSidebarShown={isMobileSidebarShown} />
        
       
      )}
    </>
  );
}
