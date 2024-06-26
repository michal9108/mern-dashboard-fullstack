import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Box, useTheme } from "@mui/material";
import BarChartIcon from "@mui/icons-material/BarChart";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { tokensDark } from "@/theme";
import useLogin from "./useLogin";
function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link style={{ color: tokensDark.primary[500] }} to="/">
        Dashboard
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function Login() {
  const theme = useTheme();
  const { users, fetchUsers, handleLogin } = useLogin();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

const handleSubmit =(event) => {
  event.preventDefault();
  handleLogin(username, password, navigate);
  setUsername("");
  setPassword("");
}



  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <CssBaseline />
      <Box
        width="100%"
        height="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Avatar sx={{ m: 1, bgcolor: tokensDark.primary[500] }}>
          <BarChartIcon />
        </Avatar>
        <Typography
          component="h2"
          variant="h2"
          style={{ color: tokensDark.grey[0] }}
        >
          Log In
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
            color="secondary"
            sx={{
              input: { color: tokensDark.grey[0] },
              label: { color: tokensDark.grey[0] },
              "& .MuiOutlinedInput-root": {
                "&.Mui-focused fieldset": {
                  borderColor: tokensDark.primary[500],
                },
              },
            }}
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            color="secondary"
            sx={{
              input: { color: tokensDark.grey[0] },
              label: { color: tokensDark.grey[0] },
              "& .MuiOutlinedInput-root": {
                "&.Mui-focused fieldset": {
                  borderColor: tokensDark.primary[500],
                },
              },
            }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="secondary" />}
            sx={{ color: "secondary" }}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, bgcolor: tokensDark.primary[500] }}
          >
            Log in
          </Button>

          <div style={{ textAlign: "center" }}>
            <h4
              style={{
                fontSize: "15px",
                color: "secondary",
              }}
            >
              Don't have an account?
              <Link
                to={"../signup"}
                style={{ textDecoration: "none" }}
                color="secondary"
              >
                {" Sign Up"}
              </Link>
            </h4>
          </div>
          <div
            style={{
              fontSize: "14px",
              color: "secondary",
              textAlign: "center",
            }}
          >
            <Typography color={tokensDark.primary[500]}>
              Test login: <i>Username: user password: user</i>{" "}
            </Typography>
          </div>
        </Box>
      </Box>
      <Copyright sx={{ mt: 8, mb: 4, color: "white" }} />
    </Container>
  );
}
