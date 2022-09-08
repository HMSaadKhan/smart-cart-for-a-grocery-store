import { Box, Card, CardContent, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import React from "react";
import CartItems from "./CartItems";
import axios from "axios";
import IsLoggedin from "../../Authentication/IsLoggedIn";
import { useContext } from "react";
import { CartCountContext } from "../../ContextAPIs/CartChanger";
export default function Cart() {
  const cartCount = useContext(CartCountContext);
  const [items, setitems] = useState([]);
  const [subtotal, setsubtotal] = useState(0);
  const cartItems = () => {
    axios
      .get("http://localhost:3000/api/cart/")
      .then((data) => {
        console.log(data);
        setitems(data.data.items);
        cartCount.setChanger(data);
        let price = 0;
        data.data.items.forEach((element) => {
          price = price + element.Product.price * element.quantity;
          setsubtotal(price);
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(cartItems, []);

  return (
    <IsLoggedin>
      <Typography
        ml={2}
        mt={2}
        color="primary"
        sx={{ fontWeight: "bold", cursor: "pointer" }}
        variant="h4"
      >
        Cart
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "right",
            }}
          >
            <Typography
              color="primary"
              align="right"
              sx={{ fontWeight: "bold", cursor: "pointer" }}
              variant="h5"
            >
              Subtotal:
            </Typography>
            <Typography
              color="textPrimary"
              align="right"
              sx={{ fontWeight: "bold", cursor: "pointer" }}
              variant="h5"
            >
              {subtotal}
            </Typography>
          </Box>
          <Card sx={{ width: "700px" }}>
            <CardContent>
              {items && (
                <>
                  {items.map((item) => {
                    return (
                      <Box key={item._id}>
                        <CartItems
                          item={item}
                          cartItems={cartItems}
                          subtotal={subtotal}
                          setsubtotal={setsubtotal}
                        />
                      </Box>
                    );
                  })}
                </>
              )}
            </CardContent>
          </Card>
        </Box>
      </Box>
    </IsLoggedin>
  );
}
