import axios from 'axios';


const serverUrl = import.meta.env.VITE_FLYIO_SERVER_URL;



const useLogout = () => {

    const handleLogout = async () => {
        const token = localStorage.getItem("token");
    
        // Call the server-side logout route
        await axios.post(`${serverUrl}/logout`, { token });
    
        // Clear the token from local storage
        localStorage.removeItem("token");
    
        // Redirect or perform other logout-related actions
        // For example, you can redirect to the login page
        window.location.href = "/";
      };

  return {handleLogout }
}

export default useLogout
