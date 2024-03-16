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
import Dashboard from "./scenes/dashboard/Dashboard";
import Login from "@/scenes/auth/Login";
import Signup from "@/scenes/auth/Signup";
import Logout from "@/scenes/auth/Logout";
import RedirectIfAuthenticated from "@/middleware/RedirectIfAuthenticated";
import RequireAuth from "@/middleware/RequireAuth";
import { ColorModeContext } from "./state/ColorModeContext";
import { Sidebar } from "react-pro-sidebar";
import Profile from "./scenes/profile/Profile";
import Layout from "./scenes/layout";
import {
  experimental_extendTheme as materialExtendTheme,
  Experimental_CssVarsProvider as MaterialCssVarsProvider,
  THEME_ID as MATERIAL_THEME_ID,
} from '@mui/material/styles';
import { CssVarsProvider as JoyCssVarsProvider } from '@mui/joy/styles';
import Integrations from "./scenes/integrations/Integrations";

const materialTheme = materialExtendTheme();

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

         
              <Routes>
                <Route
                  path="/"
                  element={<RedirectIfAuthenticated Component={Login} />}
                />

                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route element={<Layout />}>
                  <Route
                    path="/dashboard"
                    element={<RequireAuth Component={Dashboard} />}
                  />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/integrations" element={<Integrations />} />
                  <Route
                    path="/predictions"
                    element={<div>Predictions Page</div>}
                  />
                  <Route path="/settings" element={<Profile />} /> *
                </Route>
              </Routes>
         
          </ThemeProvider>
        </ColorModeContext.Provider>
      </BrowserRouter>
    </div>
  );
}
