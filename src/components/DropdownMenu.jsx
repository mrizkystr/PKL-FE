import React from "react";
import { Menu, MenuItem, Button } from "@mui/material";
import { useState } from "react";

const DropdownMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button onClick={handleOpen}>PS Overview</Button>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem onClick={handleClose} href="/ps-by-sto">
          PS Analysis by STO
        </MenuItem>
        <MenuItem onClick={handleClose} href="/ps-by-code">
          PS Analysis by Code
        </MenuItem>
        <MenuItem onClick={handleClose} href="/ps-by-month">
          PS Analysis by Month
        </MenuItem>
        <MenuItem onClick={handleClose} href="/ps-by-id-mitra">
          PS Analysis by ID Mitra
        </MenuItem>
        <MenuItem onClick={handleClose} href="/ps-by-day">
          PS Data Analysis by Day
        </MenuItem>
      </Menu>
    </>
  );
};

export default DropdownMenu;
