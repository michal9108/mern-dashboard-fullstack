import { useState } from "react";
import axios from "axios";

const useLogin = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = () => {
    axios.get("https://server-dashboard-mern.fly.dev/register").then((res) => {
      console.log(res.data);
    });
  };

  const handleLogin = async (username, password, navigate) => {
    try {
      const response = await axios.post(
        "https://server-dashboard-mern.fly.dev/login",
        { username, password }
      );
      const token = response.data.token;
      alert("Login successful");
      fetchUsers();
      navigate("/");
      window.location.reload();
      localStorage.setItem("token", token);
    } catch (error) {
      console.log("Login Error", error);
    }
  };

  return { users, fetchUsers, handleLogin };
};

export default useLogin;
