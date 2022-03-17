import { Grid } from "@mui/material";
import React from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";

const Home = () => {
  return (
    <Grid container>
      <Grid item xs={2}>
        <Sidebar />
      </Grid>
      <Grid item xs={10}>
        <Navbar />
      </Grid>
    </Grid>
  );
};

export default Home;
