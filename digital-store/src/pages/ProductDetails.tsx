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
