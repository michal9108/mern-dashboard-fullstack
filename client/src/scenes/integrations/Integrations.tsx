import * as React from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import DownloadIcon from "@mui/icons-material/Download";

import { IntegrationCard } from "./IntegrationsCard";
import {
  Autocomplete,
  Container,
  Divider,
  OutlinedInput,
  TextField,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import { tokensDark } from "@/theme";
import { integrations } from "./dataIntegrations";
import useIntegrationsImport from "./useIntegrationsImport";
import useIntegrationsExport from "./useIntegrationsExport";

export default function Integrations(): React.JSX.Element {
  const { handleImportClick, handleFileChange, fileInputRef } =
    useIntegrationsImport();
  const { handleExportClick, downloadAnchorRef } = useIntegrationsExport();

  const theme = useTheme();

  //AUTOCOMPLETE

  React.useEffect(() => {
    setList(integrations);
  }, []);

  const handleInput = (e) => {
    console.log(e.target.value);
    setInput(e.target.value.toLowerCase());
  };

  const [input, setInput] = useState("");
  const [list, setList] = useState([]);

  const filteredList = list.filter((element) => {
    if (input === "") {
      return element;
    } else {
      return element.title.toLowerCase().includes(input);
    }
  });



  return (
    <>
      <Stack spacing={0}>
        <Container
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

          <Stack spacing={2}>
            <Stack
              sx={{ alignItems: "center" }}
              direction="row"
              spacing={0}
              justifyContent="flex-start"
              gap="1.5rem"
            >
              <input
                type="file"
                ref={fileInputRef}
                style={{ display: "none" }}
                onChange={handleFileChange}
              />
              <Button
                sx={{ bgcolor: theme.palette.secondary.dark }}
                startIcon={<CloudUploadIcon />}
                variant="contained"
                onClick={handleImportClick}
              >
                Import
              </Button>
              <a ref={downloadAnchorRef} style={{ display: "none" }} />

              <Button
                sx={{ bgcolor: theme.palette.secondary.dark }}
                variant="contained"
                startIcon={<DownloadIcon />}
                onClick={handleExportClick}
              >
                Export
              </Button>
              
            </Stack>
            <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={list.map((item) => item.title)}
          renderInput={(params) => (
            <OutlinedInput
              type="search"
              {...params}
              placeholder="Search avalaible integrations..."
            
              onSelect={handleInput}
              sx={{
                width: "full",
                margin: "10px auto",
                bgcolor: theme.palette.secondary.dark
                
              }}
            />
          )}
        />
          </Stack>
        </Container>
      
       
        <Divider />

        <Grid
          container
          sx={{ padding: "1.5rem 1.5rem 1.5rem 1.5rem" }}
          spacing={3}
        >
          {filteredList.map((integration) => (
            <Grid key={integration.id} lg={4} md={6} xs={12}>
              <IntegrationCard integration={integration} />
            </Grid>
          ))}
        </Grid>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
        
        </Box>
      </Stack>
    </>
  );
}
