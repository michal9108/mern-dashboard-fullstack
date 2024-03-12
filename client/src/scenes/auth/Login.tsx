// import React, { useState, useEffect } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import axios from "axios";
// import Avatar from "@mui/material/Avatar";
// import Button from "@mui/material/Button";
// import CssBaseline from "@mui/material/CssBaseline";
// import TextField from "@mui/material/TextField";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Checkbox from "@mui/material/Checkbox";
// import { Box } from "@mui/material";
// import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
// import Typography from "@mui/material/Typography";
// import Container from "@mui/material/Container";

// function Copyright(props: any) {
//   return (
//     <Typography
//       variant="body2"
//       color="text.secondary"
//       align="center"
//       {...props}
//     >
//       {"Copyright © "}
//       <Link color="secondary" to="/">
//         Dashboard
//       </Link>{" "}
//       {new Date().getFullYear()}
//       {"."}
//     </Typography>
//   );
// }

// export default function Login() {
//   const [users, setUsers] = useState([]);
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   const fetchUsers = () => {
//     axios.get("http://localhost:3000/register").then((res) => {
//       console.log(res.data);
//     });
//   };

//   const handleLogin = async (event: { preventDefault: () => void }) => {
//     event.preventDefault();
//     try {
//       const response = await axios.post("http://localhost:3000/login", {
//         username,
//         password,
//       });
//       const token = response.data.token;
//       alert("Login successful");
//       setUsername("");
//       setPassword("");
//       fetchUsers();
//       navigate("/dashboard");
//       window.location.reload();
//       localStorage.setItem("token", token);
//     } catch (error) {
//       console.log("Login Error", error);
//     }
//   };

//   return (
//     <Container
//       component="main"
//       maxWidth="xs"
//       sx={{
//         width: "100%",
//         height: "100%",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         flexDirection: "column",
//       }}
//     >
//       <CssBaseline />
//       <Box
//         width="100%"
//         height="100%"
//         display="flex"
//         justifyContent="center"
//         alignItems="center"
//         flexDirection="column"
//       >
//         <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
//           <LockOutlinedIcon />
//         </Avatar>
//         <Typography component="h1" variant="h5" style={{ color: "white" }}>
//           Log In
//         </Typography>
//         <Box component="form" onSubmit={handleLogin} noValidate sx={{ mt: 1 }}>
//           <TextField
//             margin="normal"
//             required
//             fullWidth
//             id="username"
//             label="Username"
//             name="username"
//             autoComplete="username"
//             autoFocus
//             color="secondary"
//             sx={{ input: { color: "white" }, label: { color: "white" } }}
//             onChange={(e) => setUsername(e.target.value)}
//             value={username}
//           />
//           <TextField
//             margin="normal"
//             required
//             fullWidth
//             name="password"
//             label="Password"
//             type="password"
//             id="password"
//             autoComplete="current-password"
//             color="secondary"
//             sx={{ input: { color: "white" }, label: { color: "white" } }}
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <FormControlLabel
//             control={<Checkbox value="remember" color="secondary" />}
//             sx={{ color: "white" }}
//             label="Remember me"
//           />
//           <Button
//             type="submit"
//             fullWidth
//             variant="contained"
//             sx={{ mt: 3, mb: 2 }}
//             color="secondary"
//           >
//             Log in
//           </Button>

//           <div>
//             <p
//               style={{
//                 fontSize: "15px",
//                 color: "white",
//               }}
//             >
//               Don't have an account?
//               <Link
//                 to={"../signup"}
//                 style={{ textDecoration: "none", color: "#9C27B0" }}
//               >
//                 {" Sign Up"}
//               </Link>
//             </p>
//           </div>
//           <div style={{ fontSize: "14px", color: "white", textAlign:"center" }}>
//             <p>Test login </p>
//             <p>Username: user </p>
//             <p>password: user </p>
//           </div>
//         </Box>
//       </Box>
//       <Copyright sx={{ mt: 8, mb: 4, color: "white" }} />
//     </Container>
//   );
// }
