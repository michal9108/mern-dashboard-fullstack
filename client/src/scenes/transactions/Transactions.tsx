import { Container, Box, Typography, Divider, useTheme, Stack } from "@mui/material";

import React from "react";
import TransactionGrid from "./TransactionGrid";

const transactions = () => {
    const theme = useTheme();
  return (
    <>
    <Stack spacing={1} > 
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
          justifyContent="center"
          alignItems="flex-start"
          flexDirection="column"
        >
          <Typography
            component="h2"
            variant="h2"
            style={{ color: theme.palette.text.primary }}
          >
            Transactions
          </Typography>
          <Typography
            component="h4"
            variant="h4"
            style={{ color: theme.palette.text.primary }}
          >
           Detailed transaction list
          </Typography>
        </Box>
      </Container>
      </Stack>
      <Divider />

<TransactionGrid />
    

    </>
  );
};

export default transactions;
