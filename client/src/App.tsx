import { Box } from "@mui/material";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useMemo } from "react";
import { themeSettings } from "./theme";
import Dashboard from "@/scenes/dashboard";
import Login from "./scenes/auth/Login";
import Signup from "./scenes/auth/Signup";
import Logout from "./scenes/auth/Logout";
import RedirectIfAuthenticated from "@/middleware/RedirectIfAuthenticated";
import RequireAuth from "@/middleware/RequireAuth";

function App() {
  const theme = useMemo(() => createTheme(themeSettings), []);
  return (
    <div className="app">
      <BrowserRouter>
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
            <Route path="/predictions" element={<div>Predictions Page</div>} />
          </Routes>
        </Box>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
