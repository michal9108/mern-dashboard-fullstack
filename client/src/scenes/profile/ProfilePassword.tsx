import { tokensDark } from "@/theme";
import {
  Grid,
  Card,
  CardContent,
  Stack,
  Avatar,
  Typography,
  Divider,
  CardActions,
  Button,
  useTheme,
  CardHeader,
  FormControl,
  InputLabel,
  OutlinedInput,
  Box,
} from "@mui/material";
import useImageUpload from "./useImageUpload";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const serverUrl = import.meta.env.VITE_FLYIO_SERVER_URL;

const ProfilePassword = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  const handleChangePassword = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    if (newPassword !== confirmNewPassword) {
      alert("New password and confirm password do not match");
      return;
    }
    axios
      .post(`${serverUrl}/change-password`, {
        username: "user", // Assuming you have a way to identify the user
        oldPassword: currentPassword,
        newPassword: newPassword,
      })
      .then(() => {
        alert("Password changed successfully");
        setCurrentPassword("");
        setNewPassword("");
        setConfirmNewPassword("");
        navigate("/"); // Redirect to the dashboard or another appropriate page
      })
      .catch((error) => {
        console.log("Error changing password", error);
        alert("Error changing password. Please try again.");
      });
  };

  return (
    <form onSubmit={handleChangePassword}>
      <Card
        sx={{
          margin: "1rem 1.5rem 1.5rem 1.5rem",
          borderRadius: "0.4rem",
          backgroundColor: theme.palette.secondary.dark,
        }}
      >
        <CardHeader title="Update password" />

        <CardContent>
          <Grid container spacing={1}>
            <Grid md={12} xs={12}>
              <FormControl fullWidth required>
                <InputLabel>Current password</InputLabel>
                <OutlinedInput
                  type="password"
                  label="Current password"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                />
              </FormControl>
            </Grid>
            <Grid md={12} xs={12}>
              <FormControl fullWidth required>
                <InputLabel>New password</InputLabel>
                <OutlinedInput
                  type="password"
                  label="New password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
              </FormControl>
            </Grid>
            <Grid md={12} xs={12}>
              <FormControl fullWidth required>
                <InputLabel>Confirm new password</InputLabel>
                <OutlinedInput
                  type="password"
                  label="Confirm new password"
                  value={confirmNewPassword}
                  onChange={(e) => setConfirmNewPassword(e.target.value)}
                />
              </FormControl>
            </Grid>

            <Grid>
              <Button
                type="submit"
                variant="contained"
                sx={{ bgcolor: tokensDark.primary[500], m: 1.5 }}
              >
                Update password
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </form>
  );
};

export default ProfilePassword;
