import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import BarChartIcon from "@mui/icons-material/BarChart";
import FE_API_URL from "@/config";
const Signup = () => {
  const [users, setUsers] = useState([]);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    axios.get(`${FE_API_URL}/register`).then((res) => {
      // console.log(res.data)
    });
  };

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    axios
      .post(`${FE_API_URL}/register`, { email, username, password })
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
          <form className="auth-form" onSubmit={handleSubmit}>
            <div className="auth-title">Create a new account</div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <section>
                {/* Email input */}
                <div style={{ padding: "15px 0px" }}>
                  <label className="auth-label">Email</label>

                  <input
                    className="auth-input"
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                {/* Username input */}
                <div style={{ padding: "15px 0px" }}>
                  <label className="auth-label">Username</label>
                  <input
                    className="auth-input"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                {/* Paswword input */}
                <div style={{ padding: "15px 0px" }}>
                  <label className="auth-label">Password</label>
                  <input
                    className="auth-input"
                    type="text"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                {/* Button*/}
                <button className="auth-button" type="submit">
                  Sign Up
                </button>
              </section>
            </div>
          </form>
        </div>
      </div>
    </Box>
  );
};

export default Signup;
