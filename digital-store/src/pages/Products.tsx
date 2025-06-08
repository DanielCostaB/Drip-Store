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
