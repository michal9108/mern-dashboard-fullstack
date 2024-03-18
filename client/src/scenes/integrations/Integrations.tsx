import * as React from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import DownloadIcon from "@mui/icons-material/Download";
import AddIcon from "@mui/icons-material/Add";

import dayjs from "dayjs";


import { IntegrationCard } from "./IntegrationsCard";
import  { IntegrationsFilter }  from "./IntegrationsFilter";
import { Container, Divider, useTheme } from "@mui/material";

const integrations = [
  {
    id: "INTEG-006",
    title: "Dropbox",
    description:
      "Dropbox is a file hosting service that offers cloud storage, file synchronization, a personal cloud.",
    logo: "https://www.vectorlogo.zone/logos/dropbox/dropbox-tile.svg",
    installs: 594,
    updatedAt: dayjs().subtract(12, "minute").toDate(),
  },
  {
    id: "INTEG-005",
    title: "Medium Corporation",
    description:
      "Medium is an online publishing platform developed by Evan Williams, and launched in August 2012.",
    logo: "https://commons.wikimedia.org/wiki/File:Medium_logo_Monogram.svg",
    installs: 625,
    updatedAt: dayjs().subtract(43, "minute").subtract(1, "hour").toDate(),
  },
  {
    id: "INTEG-004",
    title: "Slack",
    description:
      "Slack is a cloud-based set of team collaboration tools and services, founded by Stewart Butterfield.",
    logo: "https://www.vectorlogo.zone/logos/slack/slack-tile.svg",
    installs: 857,
    updatedAt: dayjs().subtract(50, "minute").subtract(3, "hour").toDate(),
  },
  {
    id: "INTEG-003",
    title: "Lyft",
    description:
      "Lyft is an on-demand transportation company based in San Francisco, California.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Lyft_logo.svg",
    installs: 406,
    updatedAt: dayjs()
      .subtract(7, "minute")
      .subtract(4, "hour")
      .subtract(1, "day")
      .toDate(),
  },
  {
    id: "INTEG-002",
    title: "GitHub",
    description:
      "GitHub is a web-based hosting service for version control of code using Git.",
    logo: "https://www.vectorlogo.zone/logos/github/github-tile.svg",
    installs: 835,
    updatedAt: dayjs()
      .subtract(31, "minute")
      .subtract(4, "hour")
      .subtract(5, "day")
      .toDate(),
  },
  {
    id: "INTEG-001",
    title: "Squarespace",
    description:
      "Squarespace provides software as a service for website building and hosting. Headquartered in NYC.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/8b/Font_Awesome_5_brands_squarespace.svg",
    installs: 435,
    updatedAt: dayjs()
      .subtract(25, "minute")
      .subtract(6, "hour")
      .subtract(6, "day")
      .toDate(),
  },
];
// satisfies Integration[];

export default function Integrations(): React.JSX.Element {
  const theme = useTheme();

  return (
    <>
      <Stack spacing={1}>
       
          <Container
            // spacing={1} sx={{ flex: "1 1 auto" ,  alignItems:"flex-start"}}
            maxWidth="xs"
            sx={{
              width: "100%",
              height: "100%",
  
              paddingTop: "1rem",
          paddingBottom: "1rem",
          
            }}
          >
             <Box
          width="100%"
          height="100%"
          display="flex"
          gap="1rem"
          justifyContent="center"
          alignItems="flex-start"
          flexDirection="column"
        >
            <Typography variant="h2">Integrations</Typography>
          
            </Box>
            <Stack> 
            

            <Stack sx={{ alignItems: "center" }} direction="row" spacing={1}>
              <Button color="inherit" startIcon={<CloudUploadIcon />}>
                Import
              </Button>
              <Button color="inherit" startIcon={<DownloadIcon />}>
                Export
              </Button>
            </Stack>
            </Stack>
            
          </Container>
          <div>
              <Button startIcon={<AddIcon />} variant="contained">
                Add
              </Button>
            </div>

        <IntegrationsFilter />
        <Divider />

        <Grid
          container
          sx={{ padding: "1.5rem 1.5rem 1.5rem 1.5rem" }}
          spacing={3}
        >
          {integrations.map((integration) => (
            <Grid key={integration.id} lg={4} md={6} xs={12}>
              <IntegrationCard integration={integration} />
            </Grid>
          ))}
        </Grid>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Pagination count={3} size="small" />
        </Box>
      </Stack>
    </>
  );
}


