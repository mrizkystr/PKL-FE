import React from "react";
import { Box, Typography } from "@mui/material";

const Banner = () => {
  return (
    <Box
      sx={{
        textAlign: "center",
        margin: "2rem 0",
      }}
    >
      <Typography variant="h4" gutterBottom>
        DATA PS MANAGEMENT
      </Typography>
      <img
        src="/satelite.png"
        alt="Satellite"
        style={{
          width: "80%",
          borderRadius: "16px",
        }}
      />
    </Box>
  );
};

export default Banner;
