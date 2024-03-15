import { Box, Divider, Switch, useMediaQuery, useTheme } from "@mui/material";
import Row1 from "./Row1";
import Row2 from "./Row2";
import Row3 from "./Row3";
import NavBar from "../../components/NavBar";
// import Sidebar from "../../components/SideBar"
import { useState } from "react";
import { useSelector } from "react-redux";

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
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  // const userId = useSelector((state) => state.global.userId);
  // const { data } = useGetUserQuery(userId);
  return (
    <Box display={isNonMobile ? "flex" : "block"} width="100%" height="100%">
    {/* <Sidebar
  
        isNonMobile={isNonMobile}
        drawerWidth="250px"
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      /> */}
       <Box flexGrow={1}>
      <NavBar  isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen} />
          <Divider/>
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
  );
}


