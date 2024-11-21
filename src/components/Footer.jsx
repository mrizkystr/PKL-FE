import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        textAlign: "center",
        padding: "1rem",
        backgroundColor: "#f1f1f1",
      }}
    >
      <Typography variant="body2">FOLLOW</Typography>
      <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
        <a href="#"><img src="/facebook-icon.png" alt="Facebook" width="24" /></a>
        <a href="#"><img src="/twitter-icon.png" alt="Twitter" width="24" /></a>
        <a href="#"><img src="/instagram-icon.png" alt="Instagram" width="24" /></a>
      </Box>
    </Box>
  );
};

export default Footer;
