import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import DropdownMenu from "./DropdownMenu";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Header = () => {
  const navigate = useNavigate(); // Hook untuk navigasi

  const handleLoginClick = () => {
    navigate("/login"); // Navigasi ke halaman login
  };

  return (
    <AppBar position="static" color="default" elevation={1}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Telkom Indonesia
        </Typography>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button onClick={() => navigate("/dashboard")}>Dashboard</Button>
          <Button onClick={() => navigate("/data-ps")}>Data PS</Button>
          <Button onClick={() => navigate("/sales-codes")}>Sales Codes</Button>
          <Button onClick={() => navigate("/sto-chart")}>STO Chart</Button>
          <Button onClick={() => navigate("/mitra-chart")}>Mitra Chart</Button>
          <DropdownMenu />
        </Box>
        <Button
          variant="contained"
          color="error"
          sx={{ ml: 2 }}
          onClick={handleLoginClick} // Panggil fungsi handleLoginClick
        >
          Login
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
