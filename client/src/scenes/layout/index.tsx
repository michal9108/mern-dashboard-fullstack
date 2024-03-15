import NavBar from '@/components/NavBar';
import SidebarPro from '@/components/sidebar/SidebarPro';
import { Box, useTheme } from '@mui/material';
import React, { useState } from 'react'
import { Outlet } from 'react-router-dom';
import { useMediaQueries } from '../../../shared/screensResponsivness';

function Layout() {

    const theme = useTheme();
    const { isAboveMediumScreens, isAboveMobileScreens } = useMediaQueries();
  
    const [collapsed, setCollapsed] = useState(false);
    const [isMobileSidebarShown, setIsMobileSidebarShown] = useState(true);
  
    const handleToggleSidebar = () => {
      setCollapsed(!collapsed);
    };
    
      const handelMobileSidebarShown = () => {
        setIsMobileSidebarShown(!isMobileSidebarShown);
      };
  return (
    <Box width="100%" height="100%">
      <NavBar
        handleToggleSidebar={handleToggleSidebar}
        handelMobileSidebarShown={handelMobileSidebarShown}
        isAboveMobileScreens={isAboveMobileScreens}
      />
      <Box
        display={isAboveMobileScreens ? "flex" : "block"}
        width="100%"
        height="100%"
      >
        <SidebarPro
          collapsed={collapsed}
          isAboveMobileScreens={isAboveMobileScreens}
          isMobileSidebarShown={isMobileSidebarShown}
        />
          <Box flexGrow={1}>
        <Outlet/>
        </Box>
      </Box>
    </Box>
  )
}

export default Layout;
