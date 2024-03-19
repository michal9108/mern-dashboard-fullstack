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
import { IntegrationsFilter } from "./IntegrationsFilter";
import { Container, Divider, useTheme } from "@mui/material";
import { useState } from "react";
import { tokensDark } from "@/theme";

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

const pageSize = 3;

export default function Integrations(): React.JSX.Element {
  const theme = useTheme();

  const [pagination, setPagination] = useState({
    page: 1,
    pageCount: Math.ceil(integrations.length / pageSize),
  });

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    page: number,
  ) => {
    setPagination({ ...pagination, page });
  };

  const getData = () => {
    const from = (pagination.page - 1) * pageSize;
    const to = from + pageSize;
    const data = integrations.slice(from, to);
    return { count: integrations.length, data: data };
  };

  const { count, data } = getData();

  return (
    <>
      <Stack spacing={0}>
        <Container
          // spacing={1} sx={{ flex: "1 1 auto" ,  alignItems:"flex-start"}}
          maxWidth="xs"
          sx={{
            width: "100%",
            height: "100%",
            paddingLeft: "1rem",
            paddingTop: "1rem",
            paddingBottom: "1rem",
            marginLeft: "0rem",
          }}
        >
          <Typography variant="h2" sx={{ marginBottom: "1rem" }}>
            Integrations
          </Typography>

          <Stack>
            <Stack
              sx={{ alignItems: "center" }}
              direction="row"
              spacing={2}
              justifyContent="space-between"
            >
              <Button
                sx={{ bgcolor: theme.palette.secondary.dark }}
                startIcon={<CloudUploadIcon />}
                variant="contained"
              >
                Import
              </Button>
              <Button
                sx={{ bgcolor: theme.palette.secondary.dark }}
              
                variant="contained"

                startIcon={<DownloadIcon />}
              >
                Export
              </Button>
              <Button
                sx={{ bgcolor: theme.palette.secondary.dark }}
                startIcon={<AddIcon />}
                variant="contained"
              >
                Add
              </Button>
            </Stack>
          </Stack>
        </Container>
        <div></div>

        <IntegrationsFilter />
        <Divider />

        <Grid
          container
          sx={{ padding: "1.5rem 1.5rem 1.5rem 1.5rem" }}
          spacing={3}
        >
          {data.map((integration) => (
            <Grid key={integration.id} lg={4} md={6} xs={12}>
              <IntegrationCard integration={integration} />
            </Grid>
          ))}
        </Grid>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Pagination
            count={pagination.pageCount}
            page={pagination.page}
            size="small"
            onChange={handlePageChange}
          />
        </Box>
      </Stack>
    </>
  );
}
