import React from "react";
import { IntegrationCard } from "./IntegrationsCard";
import { Grid } from "@mui/material";

const integrations = [
  {
    id: "dsdsds",
    title: "Dropbox",
    description:
      "Dropbox is a file hosting service that offers cloud storage, file synchronization, a personal cloud",
    logo: "logo",
    installs: 2342,
  },
  {
    id: "fdsdfsr",
    title: "Netlflix",
    description:
      "Dropbox is a file hosting service that offers cloud storage, file synchronization, a personal cloud",
    logo: "logo",
    installs: 2342,
  },
  {
    id: "retbt",
    title: "Tiktok",
    description:
      "Dropbox is a file hosting service that offers cloud storage, file synchronization, a personal cloud",
    logo: "logo",
    installs: 2342,
  },
];

function Integrations() {
  return (
    <div>
      <Grid container spacing={1}>
        <Grid xs={1} md={3}>
          {integrations.map((integration) => (
            <IntegrationCard key={integration.id} integration={integration} />
          ))}
        </Grid>
      </Grid>
    </div>
  );
}

export default Integrations;
