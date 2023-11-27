import { Box } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import BarChartIcon from "@mui/icons-material/BarChart";
import FE_API_URL from "../../config";


const Login = () => {
  const [users, setUsers] = useState([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    axios.get(`${FE_API_URL}/register`).then((res) => {
      console.log(res.data);
    });
  };

  const handleLogin = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    try {
      const response = await axios.post(`${FE_API_URL}/login`, {
        username,
        password,
      });
      const token = response.data.token;
      alert("Login successful");
      setUsername("");
      setPassword("");
      fetchUsers();
      navigate("/dashboard");
      window.location.reload();
      localStorage.setItem("token", token);
    } catch (error) {
      console.log("Login Error", error);
    }
  };

  return (
    <Box
      width="100%"
      height="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <div className="auth-logo-circle">
        <BarChartIcon sx={{ fontSize: "40px", color: "white" }} />
      </div>
      <div
        className="auth-border"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>
          <form className="auth-form" onSubmit={handleLogin}>
            <div className="auth-title">Sign in to your account</div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <section>
                {/* Username input */}
                <div style={{ padding: "15px 0px" }}>
                  <label className="auth-label"
              
                  >
                    Username
                  </label>
                  <input className="auth-input"
            
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                {/* Paswword input */}
                <div style={{ padding: "15px 0px" }}>
                <label className="auth-label">

                    Password
                  </label>
                  <input className="auth-input"
                   
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                {/* Button*/}
                <button
                  className="auth-button"
                  type="submit"
                >
                  Sign in
                </button>
                <div
                  style={{
                    fontSize: "15px",
                    color: "white",
                    margin: "30px 0px 30px 0px",
                  }}
                >
                  Don't have an account?{" "}
                  <Link
                    style={{ color: "#8fbcfe", textDecoration: "none" }}
                    to={"../signup"}
                  >
                    {" "}
                    Sign Up
                  </Link>
                </div>
              </section>
            </div>

            <div style={{ fontSize: "10px", color: "white" }}>
              For quick check you can use Username: John password: Doe
            </div>
          </form>
        </div>
      </div>
    </Box>
  );
};

export default Login;
