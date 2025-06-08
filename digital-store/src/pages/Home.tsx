import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        height: "500px",
        backgroundImage: "url('/banner.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: 2,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        color: "#fff",
        px: 3,
      }}
    >
      <Box>
        <Typography variant="h3" fontWeight="bold" gutterBottom>
          Bem-vindo à DRIP STORE
        </Typography>
        <Typography variant="h6" mb={4}>
          As melhores roupas streetwear você encontra aqui
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={() => navigate("/produtos")}
        >
          Ver produtos
        </Button>
      </Box>
    </Box>
  );
};

export default Home;
