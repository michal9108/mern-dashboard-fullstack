import { Box, Divider, Switch, useMediaQuery, useTheme } from "@mui/material";
import Row1 from "./Row1";
import Row2 from "./Row2";
import Row3 from "./Row3";
import NavBar from "../../components/NavBar";

import { useState } from "react";

import SidebarPro from "@/components/SidebarPro";

const gridTemplateLargeScreens = `
  "a b c"
  "a b c"
  "a b c"
  "a b c"

  "d e f"
  "d e f"
  "d e f"
 
  "g h i"
  "g h i"
  "g h i"
  
`;
const gridTemplateSmallScreens = `
  "a"
  "a"
  "a"
  "a"
  "b"
  "b"
  "b"
  "b"
  "c"
  "c"
  "c"
  "c"
  "d"
  "d"
  "d"
  "e"
  "e"
  "e"
  "e"
  "f"
  "f"
  "f"
  "g"
  "g"
  "g"
  "g"
  "h"
  "h"
  "h"
  "h"
  "i"
  "i"
  "i"
  "i"
`;

export default function Dashboard() {


  const theme = useTheme();
  const isAboveMediumScreens = useMediaQuery("(min-width: 1200px)");
  const isAboveMobileScreens = useMediaQuery("(min-width: 425px)");

  const isNonMobile = useMediaQuery("(min-width: 600px)");
  


  const [collapsed, setCollapsed] = useState(false);

  const handleToggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Box width="100%" height="100%">
      <NavBar
    
        
        handleToggleSidebar={handleToggleSidebar}
      />
      <Box display="flex"  width="100%" height="100%">
      
      <SidebarPro collapsed={collapsed}   isNonMobile={isNonMobile}/>
        <Box flexGrow={1}>
          <Box
            width="100%"
            height="100%"
            display="grid"
            gap="1.5rem"
            sx={
              isAboveMediumScreens
                ? {
                    textAlign: "center",
                    gridTemplateColumns: "repeat(3, minmax(370px, 1fr))",
                    gridTemplateRows: "repeat(10, minmax(60px, 1fr))",
                    gridTemplateAreas: gridTemplateLargeScreens,
                    padding: "1rem 1.5rem 4rem 1.5rem",
                  }
                : isAboveMobileScreens
                  ? {
                      textAlign: "center",
                      gridAutoColumns: "1fr",
                      gridAutoRows: "80px",
                      gridTemplateAreas: gridTemplateSmallScreens,
                      padding: "1rem 1.5rem 4rem 1.5rem",
                    }
                  : {
                      textAlign: "center",
                      gridAutoColumns: "1fr",
                      gridAutoRows: "80px",
                      gridTemplateAreas: gridTemplateSmallScreens,
                      padding: "1rem 1.5rem 4rem 1.5rem",
                    }
            }
          >
            <Row1 />
            <Row2 />
            <Row3 />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
