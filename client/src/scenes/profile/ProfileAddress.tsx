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
import useImageUpload from "./useImageUpload";
import { useTheme } from "@mui/material";

const ProfileAddress= () => {

    const theme = useTheme();
  return (
    <Grid lg={8} md={6} xs={12}>
      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <Card
          sx={{
            margin: "1rem 1.5rem 1.5rem 1.5rem",
            borderRadius: "0.4rem",
            backgroundColor: theme.palette.secondary.dark,
          }}
        >
          <CardHeader
            subheader="The information can be edited"
            title="Profile"
          />
          <Divider />
          <CardContent>
            <Grid container spacing={3}>
              <Grid md={6} xs={12}>
                <FormControl fullWidth required>
                  <InputLabel>First name</InputLabel>
                  <OutlinedInput
                    defaultValue="John"
                    label="First name"
                    name="firstName"
                  />
                </FormControl>
              </Grid>
              <Grid md={6} xs={12}>
                <FormControl fullWidth required>
                  <InputLabel>Last name</InputLabel>
                  <OutlinedInput
                    defaultValue="Doe"
                    label="Last name"
                    name="lastName"
                  />
                </FormControl>
              </Grid>
              <Grid md={6} xs={12}>
                <FormControl fullWidth required>
                  <InputLabel>Email address</InputLabel>
                  <OutlinedInput
                    defaultValue="john@email.io"
                    label="Email address"
                    name="email"
                  />
                </FormControl>
              </Grid>
              <Grid md={6} xs={12}>
                <FormControl fullWidth>
                  <InputLabel>Phone number</InputLabel>
                  <OutlinedInput label="Phone number" name="phone" type="tel" />
                </FormControl>
              </Grid>
              <Grid md={6} xs={12}>
                <FormControl fullWidth>
                  <InputLabel>State</InputLabel>

                  <OutlinedInput label="Phone number" name="phone" type="tel" />
                </FormControl>
              </Grid>
              <Grid md={6} xs={12}>
                <FormControl fullWidth>
                  <InputLabel>City</InputLabel>
                  <OutlinedInput label="City" />
                </FormControl>
              </Grid>
              <Grid md={6} xs={12}>
                <FormControl fullWidth>
                  <InputLabel>Company</InputLabel>
                  <OutlinedInput label="City" />
                </FormControl>
              </Grid>

              <Grid md={8} xs={12}>
                <Button
                  disabled
                  variant="contained"
                  sx={{ m: 1.5, bgcolor: tokensDark.secondary[300] }}
                >
                  Change Password
                </Button>
              </Grid>
            </Grid>
          </CardContent>

          <CardContent>
            <Grid lg={8} md={6} xs={12}>
              <Grid md={6} xs={12}>
                <FormControl fullWidth>
                  <InputLabel>Country</InputLabel>
                  <OutlinedInput label="City" />
                </FormControl>
              </Grid>
              <Grid md={6} xs={6}>
                <FormControl fullWidth>
                  <InputLabel>Region</InputLabel>
                  <OutlinedInput label="City" />
                </FormControl>
              </Grid>
              <Grid md={3} xs={6}>
                <FormControl fullWidth>
                  <InputLabel>City</InputLabel>
                  <OutlinedInput label="City" />
                </FormControl>
              </Grid>
            </Grid>
          </CardContent>
          <Divider />
          <CardActions sx={{ justifyContent: "flex-end" }}>
            <Button
              variant="contained"
              disabled
              sx={{ m: 1.5, bgcolor: tokensDark.primary[500] }}
            >
              Save details
            </Button>
          </CardActions>
        </Card>
      </form>
    </Grid>
  );
};

export default ProfileAddress;
