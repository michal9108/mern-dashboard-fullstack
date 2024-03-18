import React, { useEffect } from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import blog1 from './blog1.md';

import Main from "./Main";

import { Container } from "@mui/material";



const posts = [blog1];


export default function Documentation() {

    
    
 


  return (
    <Container maxWidth="lg">
      <main>
        <Grid container spacing={5} sx={{ mt: 3 }}>
        <Main title="From the firehose" posts={posts} />
        </Grid>
      </main>
    </Container>
  );
}
