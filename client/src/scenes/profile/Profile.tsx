import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import CardHeader from "@mui/material/CardHeader";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import OutlinedInput from "@mui/material/OutlinedInput";
import Select from "@mui/material/Select";
import Grid from "@mui/material/Unstable_Grid2";
import { tokensDark } from "@/theme";
import { Box, Container, useTheme } from "@mui/material";
import useImageUpload from "./useImageUpload";
import ProfileAddress from "./ProfileAddress";
import ProfileUser from "./ProfileUser";
import ProfilePassword from "./ProfilePassword";

export default function Profile() {
  const theme = useTheme();
  return (
    <Stack spacing={2}>
      <Container
        maxWidth="xs"
        sx={{
          width: "100%",
          height: "100%",
          paddingTop: "1rem",
          paddingBottom: "1rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          width="100%"
          height="100%"
          display="flex"
          gap="1rem"
          justifyContent="flex-start"
          alignItems="flex-start"
          flexDirection="column"
        >
          <Typography
            component="h2"
            variant="h2"
            style={{ color: theme.palette.text.primary }}
          >
            Account
          </Typography>
          <Typography
            component="h4"
            variant="h4"
            style={{ color: theme.palette.text.primary }}
          >
            Manage your preferences here
          </Typography>
        </Box>
      </Container>
      <Divider />
      <Grid container>
        <Grid lg={4} md={6} xs={12}>
          <ProfileUser />

          <ProfilePassword />
        </Grid>
        <Grid lg={8} md={6} xs={12}>
          <ProfileAddress />
        </Grid>
      </Grid>
    </Stack>
  );
}
