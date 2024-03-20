import { Box, PaletteMode, Switch, useMediaQuery } from "@mui/material";
import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./scenes/dashboard/Dashboard";
import Login from "@/scenes/auth/Login";
import Signup from "@/scenes/auth/Signup";
import Logout from "@/scenes/auth/Logout";
import RedirectIfAuthenticated from "@/middleware/RedirectIfAuthenticated";
import RequireAuth from "@/middleware/RequireAuth";
import { ColorModeContext } from "./state/ColorModeContext";
import Profile from "./scenes/profile/Profile";
import Layout from "./scenes/layout";
import Integrations from "./scenes/integrations/Integrations";
import { useCustomTheme } from "./hooks/useCustomTheme";
import Products from "./scenes/products/Products";
import Transactions from "./scenes/transactions/Transactions";
import Documentation from "./scenes/documentation/Documentation";

export default function App() {
  const { theme, toggleColorMode } = useCustomTheme();

  return (
    <div className="app">
      <BrowserRouter>
        <ColorModeContext.Provider value={{ toggleColorMode }}>
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
                <Route
                  path="/predictions"
                  element={<div>Predictions Page</div>}
                />
                <Route path="/products" element={<Products />} />
                <Route path="/transactions" element={<Transactions />} />
                <Route path="/integrations" element={<Integrations />} />
                <Route path="/settings" element={<Profile />} />
                <Route path="/documentation" element={<Documentation />} />
              </Route>
            </Routes>
          </ThemeProvider>
        </ColorModeContext.Provider>
      </BrowserRouter>
    </div>
  );
}
