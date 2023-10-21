import { Grid, Typography, Link } from "@mui/material";
import React from "react";

const Navigation = () => {
  return (
    <Grid
      container
      spacing={2}
      p={4}
      sx={{ background: "#9BD7D5" }}
      alignItems="center"
      justifyContent="space-between"
    >
      <Grid item>
        <Typography variant="h4" sx={{ color: "#505050" }}>
          Calendar
        </Typography>
      </Grid>
      <Grid item gap={4}>
        <Link href="/" underline="none" mx={1}>
          Home
        </Link>
        <Link href="/calendar" underline="none" mx={1}>
          Calendar
        </Link>
      </Grid>
    </Grid>
  );
};

export default Navigation;
