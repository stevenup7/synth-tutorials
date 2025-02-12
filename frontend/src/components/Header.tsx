import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const Header: React.FC = () => {
  return (
    <AppBar position="sticky" color="primary">
      <Toolbar>
        <Typography variant="h6" component="div">
          Synth Tutorials - step by step howto for your synth
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
