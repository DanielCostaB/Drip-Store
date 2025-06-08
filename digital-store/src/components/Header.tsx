import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <AppBar position="static" color="default" elevation={1}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6" component={RouterLink} to="/" sx={{ textDecoration: "none", color: "inherit" }}>
          DRIP STORE
        </Typography>
        <Button component={RouterLink} to="/produtos" color="primary">
          Produtos
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
