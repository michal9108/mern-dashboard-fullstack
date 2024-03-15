import { useTheme } from '@mui/material';
import React from 'react'
import { Sidebar, Menu, MenuItem, sidebarClasses } from "react-pro-sidebar";
import { tokensDark } from "@/theme";

import SidebarMenu from './SidebarMenu';

export default function SidebarMobile({isMobileSidebarShown}) {

const theme = useTheme();
  return (
    <>
    { isMobileSidebarShown &&<Sidebar
    collapsed={false}
    style={{
      color: theme.palette.text.primary,
      borderColor: tokensDark.grey[700],
      zIndex:9999,
      position:'absolute',
    }}
    rootStyles={{
      [`.${sidebarClasses.container}`]: {
        backgroundColor: theme.palette.background.default,
      },
    }}
  >
         <SidebarMenu />
  </Sidebar> }</>
  )
}


