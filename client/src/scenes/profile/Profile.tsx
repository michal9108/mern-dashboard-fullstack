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
const user = {
  name: "User",
  avatar: "/assets/avatar.png",
  jobTitle: "Senior Developer",
  country: "USA",
  city: "Los Angeles",
  timezone: "GTM-7",
} as const;

export default function Profile() {
  const theme = useTheme();
  return (
    <>
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
              style={{ color: tokensDark.grey[0] }}
            >
              Account
            </Typography>
            <Typography
              component="h4"
              variant="h4"
              style={{ color: tokensDark.grey[0] }}
            >
              Manage your preferences here
            </Typography>
          </Box>
        </Container>
        <Divider />
        <Grid container>
          <Grid lg={4} md={6} xs={12}>
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
                <Button
                  variant="contained"
                  sx={{ bgcolor: tokensDark.primary[500], m: 1.5 }}
                >
                  Upload picture
                </Button>
              </CardActions>
            </Card>
          </Grid>
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
                        <OutlinedInput
                          label="Phone number"
                          name="phone"
                          type="tel"
                        />
                      </FormControl>
                    </Grid>
                    <Grid md={6} xs={12}>
                      <FormControl fullWidth>
                        <InputLabel>State</InputLabel>

                        <OutlinedInput
                          label="Phone number"
                          name="phone"
                          type="tel"
                        />
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
                        variant="contained"
                        sx={{ m: 1.5, bgcolor: tokensDark.secondary[300] }}
                      >
                        Change Password
                      </Button>
                    </Grid>
                  </Grid>
                </CardContent>

                <CardContent>
                  <Grid  lg={8} md={6} xs={12}>
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
                    sx={{ m: 1.5, bgcolor: tokensDark.primary[500] }}
                  >
                    Save details
                  </Button>
                </CardActions>
              </Card>
            </form>
          </Grid>
        </Grid>
      </Stack>
    </>
  );
}
