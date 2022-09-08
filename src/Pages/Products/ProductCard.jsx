import React from "react";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Box from "@mui/material/Box";
import axios from "axios";
import { useContext } from "react";
import { CartCountContext } from "../../ContextAPIs/CartChanger";

import { toast } from "react-toastify";

export default function ProductCard(props) {
  const cartCount = useContext(CartCountContext);
  const { product } = props;
  const addtocart = () => {
    axios
      .post("http://localhost:3000/api/cart/" + product._id)
      .then((data) => {
        console.log(data);
        cartCount.setChanger(data);
        toast.success(data.data, {
          position: toast.POSITION.BOTTOM_LEFT,
        });
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.response.data, {
          position: toast.POSITION.BOTTOM_LEFT,
        });
      });
  };

  return (
    <Box sx={{}}>
      <Card sx={{ width: "200px", margin: 10 }}>
        <Box
          sx={{
            display: "flex ",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box>
            <CardMedia
              //  className={classes.media}
              component="img"
              image={product.images}
              title={product.name}
            />
          </Box>
        </Box>
        <CardContent>
          <Box sx={{ maxHeight: 50 }}>
            <Typography noWrap sx={{ fontSize: "18px" }}>
              {product.name}
            </Typography>
          </Box>

          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  color: "#ba6a62",
                }}
              >
                PKR:{product.price}
              </Typography>
            </Box>
            <Box>
              <Button
                variant="contained"
                fullWidth
                onClick={() => {
                  addtocart();
                }}
              >
                Add to cart
              </Button>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
