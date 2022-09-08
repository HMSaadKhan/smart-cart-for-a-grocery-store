import { Box, Card, CardContent, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
export default function CategoryCard({ category }) {
  const navigate = useNavigate();
  return (
    <Box m={2} sx={{ width: "250px" }}>
      <Card
        sx={{ backgroundColor: "#fafafa", cursor: "pointer" }}
        onClick={() => {
          navigate("product/" + category._id);
        }}
      >
        <CardContent>
          <>
            <Typography
              align="left"
              variant="caption"
              color="primary"
              noWrap
              sx={{ fontWeight: "bold", fontSize: "20px" }}
            >
              {category.name}
            </Typography>
            <Typography
              mt={2}
              noWrap
              sx={{
                fontWeight: "bold",
              }}
            >
              {category.products} Products
            </Typography>
          </>
        </CardContent>
      </Card>
    </Box>
  );
}
