import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import axios from "axios";
// import productService from "../../Services/ProductServices";
// import { NameBar } from "../../Styles/NameBar";
import ProductCard from "./ProductCard";
import { useParams } from "react-router-dom";
import IsLoggedin from "../../Authentication/IsLoggedIn";

const Products = (props) => {
  const product = useParams();

  const [products, setProducts] = useState([]);

  const getProductsbyCategory = () => {
    axios
      .get("http://localhost:3000/api/products/" + product.id)
      .then((data) => {
        console.log(data);
        setProducts(data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  useEffect(getProductsbyCategory, [product.id]);

  return (
    <IsLoggedin>
      <Typography
        ml={2}
        mt={2}
        color="primary"
        sx={{ fontWeight: "bold", cursor: "pointer" }}
        variant="h4"
      >
        {products[0]?.category.name}
      </Typography>
      <Box
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        {products.length > 0 ? (
          <>
            {products.map((product) => {
              return (
                <Box key={product._id}>
                  <ProductCard product={product} />
                </Box>
              );
            })}
          </>
        ) : (
          <></>
        )}
      </Box>
    </IsLoggedin>
  );
};

export default Products;
