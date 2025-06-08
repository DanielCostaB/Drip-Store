# Drip-Store
PROJETO FINAL FRONT END

=========================

Estrutura de Pastas

src/
│
├── assets/              # Imagens e recursos estáticos
├── components/          # Componentes reutilizáveis (Header, Footer, ProductCard)
├── data/                # Dados mockados
├── pages/               # Páginas principais
├── styles/              # Estilização customizada se necessário
├── App.tsx              # Componente principal
└── main.tsx             # Ponto de entrada


=====================================

Rotas:

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CssBaseline, Container } from "@mui/material";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Header from "./components/Header";
import Footer from "./components/Footer";


const App: React.FC = () => {
  return (
    <Router>
      <CssBaseline />
      <Header />
      <Container sx={{ mt: 4, mb: 4 }} maxWidth="lg">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produtos" element={<Products />} />
          <Route path="/produtos/:id" element={<ProductDetails />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
};


export default App;
 
===============================
COMPONENTES
===============================
 
 
components/Header.tsx :
 
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


=================================
 
components/Footer.tsx
 
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


===================================
 
components/ProductCard.tsx:
 
import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActionArea,
} from "@mui/material";
import { useNavigate } from "react-router-dom";


interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}


const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const navigate = useNavigate();


  return (
    <Card onClick={() => navigate(`/produtos/${product.id}`)} sx={{ height: "100%" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={product.image}
          alt={product.name}
        />
        <CardContent>
          <Typography variant="h6">{product.name}</Typography>
          <Typography color="text.secondary">R$ {product.price.toFixed(2)}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};


export default ProductCard;


===============================
PÁGINAS
================================
 
pages/Home.tsx
 
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
 
=====================
 
pages/Products.tsx
 
import React from "react";
import { Grid, Typography } from "@mui/material";
import ProductCard from "../components/ProductCard";
import products from "../data/products";


const Products: React.FC = () => {
  return (
    <>
      <Typography variant="h4" gutterBottom>
        Produtos em destaque
      </Typography>
      <Grid container spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};


export default Products;


========================
 
pages/ProductDetails.tsx:
 
import { useParams } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";
import products from "../data/products";


const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === Number(id));


  if (!product) {
    return <Typography variant="h6">Produto não encontrado.</Typography>;
  }


  return (
    <Box display="flex" flexDirection={{ xs: "column", md: "row" }} gap={4}>
      <Box flex={1}>
        <img
          src={product.image}
          alt={product.name}
          style={{ width: "100%", borderRadius: 8 }}
        />
      </Box>
      <Box flex={1}>
        <Typography variant="h4" gutterBottom>
          {product.name}
        </Typography>
        <Typography variant="h5" color="primary" gutterBottom>
          R$ {product.price.toFixed(2)}
        </Typography>
        <Typography variant="body1" paragraph>
          Esta é uma descrição detalhada do produto. Vista-se com estilo e atitude com as peças da Drip Store.
        </Typography>
        <Button variant="contained" color="primary">
          Adicionar ao carrinho
        </Button>
      </Box>
    </Box>
  );
};


export default ProductDetails;


====================================
Mock de Dados
====================================
 
data/products.ts:
 
const products = [
  {
    id: 1,
    name: "Camiseta Oversized",
    price: 129.9,
    image: "/products/camiseta-1.jpg",
  },
  {
    id: 2,
    name: "Calça Cargo Street",
    price: 199.9,
    image: "/products/calca-1.jpg",
  },
  {
    id: 3,
    name: "Moletom Hype",
    price: 249.9,
    image: "/products/moletom-1.jpg",
  },
];


export default products;


==========================
 
==========================
 
DOCUMENTAÇÃO:
 
1. APRESENTAÇÃO DO PROJETO
 

# 🛍️ DRIP STORE

Aplicação web desenvolvida com **React + TypeScript + Material UI**, com base no projeto **Digital Store** da Digital College. O objetivo é simular uma loja online de roupas streetwear, com foco em uma interface moderna, responsiva e funcional.

---

## 🎯 Objetivo do Projeto

Este projeto visa aplicar os conceitos de React com TypeScript em um ambiente prático, desenvolvendo uma aplicação completa baseada nos seguintes requisitos:

Interface moderna e funcional inspirada em design real no Figma
- Organização modular por páginas, componentes e dados
- Simulação de navegação por produtos

====================================

2. Instalação das dependências:

npm install


===================================

3. Execução do projeto:

npm run dev


===================================

4. Stack Utilizada

React com TypeScript

Material UI (componentes de interface)

React Router DOM (navegação entre páginas)

Vite (ferramenta de build e desenvolvimento)

Dados mockados para simulação de produtos

 ===========================================
 
5. Funcionalidades:
 

 Página Inicial com banner e chamada para ação

 Página de listagem de produtos mockados

 Página de visualização individual do produto

 Componentes reutilizáveis (Header, Footer, ProductCard)

 Navegação fluida com React Router

 Layout responsivo com Material UI

=======================================

6. Créditos

Baseado no projeto Digital Store da Digital College

Design retirado do Figma oficial da DRIP STORE
