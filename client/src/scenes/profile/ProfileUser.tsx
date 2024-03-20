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
} from "@mui/material";
import useImageUpload from "./useImageUpload";

const user = {
  name: "User",
  avatar: "/assets/avatar.png",
  jobTitle: "Senior Developer",
  country: "USA",
  city: "Los Angeles",
  timezone: "GTM-7",
} as const;
const ProfileUser = () => {
  const { handleUploadClick, handleFileChange, fileInputRef } =
    useImageUpload();

  const theme = useTheme();
  return (
  
      <Card
        sx={{
          margin: "1rem 1.5rem 1.5rem 1.5rem",
          borderRadius: "0.4rem",
          backgroundColor: theme.palette.secondary.dark,
        }}
      >
        <CardContent>
          <Stack spacing={2} sx={{ alignItems: "center" }}>
            <div>
              <Avatar
                src={user.avatar}
                sx={{ height: "80px", width: "80px" }}
              />
            </div>
            <Stack spacing={1} sx={{ textAlign: "center" }}>
              <Typography variant="h5">{user.name}</Typography>
              <Typography color="text.secondary" variant="body2">
                {user.city} {user.country}
              </Typography>
              <Typography color="text.secondary" variant="body2">
                {user.timezone}
              </Typography>
            </Stack>
          </Stack>
        </CardContent>
        <Divider />
        <CardActions>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
          <Button
            variant="contained"
            sx={{ bgcolor: tokensDark.primary[500], m: 1.5 }}
            onClick={handleUploadClick}
          >
            Upload picture
          </Button>
        </CardActions>
      </Card>
   
  );
};

export default ProfileUser;
