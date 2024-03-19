import axios from 'axios';
import React from 'react'

const useLogout = () => {

    const handleLogout = async () => {
        const token = localStorage.getItem("token");
    
        // Call the server-side logout route
        await axios.post("https://server-dashboard-mern.fly.dev/logout", { token });
    
        // Clear the token from local storage
        localStorage.removeItem("token");
    
        // Redirect or perform other logout-related actions
        // For example, you can redirect to the login page
        window.location.href = "/";
      };

  return {handleLogout }
}

export default useLogout
