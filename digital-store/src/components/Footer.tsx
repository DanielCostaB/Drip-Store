import React from "react";
import { Box, Typography } from "@mui/material";

const Footer: React.FC = () => {
  return (
    <Box sx={{ py: 2, textAlign: "center", backgroundColor: "#f5f5f5" }}>
      <Typography variant="body2" color="text.secondary">
        &copy; {new Date().getFullYear()} DRIP STORE. Todos os direitos reservados.
      </Typography>
    </Box>
  );
};

export default Footer;
