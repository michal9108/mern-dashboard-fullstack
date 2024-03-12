import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";



function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="secondary" to="/">
        Dashboard
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function Signup() {
  const [users, setUsers] = useState([]);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    axios.get('https://server-dashboard-mern.fly.dev/register').then((res) => {
      console.log(res.data);
    });
  };

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    axios
      .post('https://server-dashboard-mern.fly.dev/register', { email, username, password })
      .then(() => {
        alert("Registration Successful");
        setEmail("");
        setUsername("");
        setPassword("");
        fetchUsers();
        setTimeout(() => {
          navigate("/login");
        }, 3000);
      })
      .catch((error) => {
        console.log("Unable to register user");
      });
  };

  return (
    <Container
      component="main"
      maxWidth="xs"
      style={{
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
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5" style={{ color: "white" }}>
          Create a new account
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                sx={{ input: { color: "white" }, label: { color: "white" } }}
                color="secondary"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                autoComplete="given-username"
                name="Username"
                required
                fullWidth
                id="username"
                label="Username"
                autoFocus
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                sx={{ input: { color: "white" }, label: { color: "white" } }}
                color="secondary"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                sx={{ input: { color: "white" }, label: { color: "white" } }}
                color="secondary"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
                sx={{ color: "white" }}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            color="secondary"
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item xs={12}>
              <p style={{ color: "white", textAlign: "center" }}>
                Already have an account? <Link to="/login">Log In</Link>
              </p>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 8, mb: 4, color: "white" }} />
    </Container>
  );
}
