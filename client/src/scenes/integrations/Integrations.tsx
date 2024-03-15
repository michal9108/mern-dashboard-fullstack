import React from "react";
import { IntegrationCard } from "./IntegrationsCard";

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
      {integrations.map((integration) => (
        <IntegrationCard key={integration.id} integration={integration} />
      ))}
    </div>
  );
}

export default Integrations;
