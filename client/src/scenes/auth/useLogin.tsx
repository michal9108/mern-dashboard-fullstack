import { useState } from "react";
import axios from "axios";




const serverUrl = import.meta.env.VITE_FLYIO_SERVER_URL;

const useLogin = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = () => {
    axios.get(`${serverUrl}/register`).then((res) => {
      console.log(res.data);
    });
  };

  const handleLogin = async (username, password, navigate) => {
    try {
      const response = await axios.post(`${serverUrl}/login`, {
        username,
        password,
      });
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
