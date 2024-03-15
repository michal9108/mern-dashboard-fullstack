import { Box, PaletteMode, Switch, useMediaQuery } from "@mui/material";
import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
  
} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { themeSettings } from "@/theme";
import Dashboard from "./scenes/dashboard/Dashboard"
import Login from "@/scenes/auth/Login";
import Signup from "@/scenes/auth/Signup";
import Logout from "@/scenes/auth/Logout";
import RedirectIfAuthenticated from "@/middleware/RedirectIfAuthenticated";
import RequireAuth from "@/middleware/RequireAuth";
import { ColorModeContext } from "./state/ColorModeContext";
import { Sidebar } from "react-pro-sidebar";


export default function App() {

  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const [mode, setMode] = useState<PaletteMode>("dark");

  useEffect(() => {
    setMode(prefersDarkMode ? "dark" : "light");
  }, [prefersDarkMode]);

  const colorMode = useMemo(
    () => ({
      // The dark mode switch would invoke this method
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) =>
          prevMode === "light" ? "dark" : "light",
        );
      },
    }),
    [],
  );

  let theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  theme = responsiveFontSizes(theme);

 

  return (
    <div className="app">
      <BrowserRouter>
        <ColorModeContext.Provider value={colorMode}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
         
         
            <Box width="100%" height="100%">
              <Routes>
                <Route
                  path="/"
                  element={<RedirectIfAuthenticated Component={Login} />}
                />
                
                <Route
                  path="/dashboard"
                  element={<RequireAuth Component={Dashboard} />}
                />
                <Route path="/login" element={<Login />} />
                <Route path="/logout" element={<Logout />} />
                <Route path="/signup" element={<Signup />} /> *
                <Route
                  path="/predictions"
                  element={<div>Predictions Page</div>}
                />
              </Routes>
            </Box>

          </ThemeProvider>
        </ColorModeContext.Provider>
      </BrowserRouter>
    </div>
  );
}
