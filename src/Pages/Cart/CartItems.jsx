/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect } from "react";
import { Box, Typography, IconButton, Divider, TextField } from "@mui/material";
import { Add, Remove, Delete } from "@mui/icons-material";
import axios from "axios";

export default function CartItems({ item, cartItems }) {
  const IncItem = (id) => {
    console.log("eh");
    axios
      .put("http://localhost:3000/api/cart/inc/" + id)
      .then((data) => {
        console.log(data);
        cartItems();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const DecItem = (id) => {
    axios
      .put("http://localhost:3000/api/cart/dec/" + id)
      .then((data) => {
        console.log(data);
        cartItems();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const DeleteItem = (id) => {
    console.log("eh2");
    axios
      .delete("http://localhost:3000/api/cart/delete/" + id)
      .then((data) => {
        console.log(data);
        cartItems();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Box sx={{}}>
          <img src={item.Product.images} width="50px" height="50px" />
        </Box>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              width: "100%",
            }}
          >
            <Box>
              <Typography
                noWrap
                sx={{ cursor: "pointer", textDecoration: "underline" }}
              >
                {item.Product.name}
              </Typography>
            </Box>
          </Box>

          <Box sx={{ width: "100%" }}>
            <Typography align="center" sx={{ color: "#ba6a62" }}>
              PKR.{item.Product.price}
            </Typography>
          </Box>
          <Box
            sx={{
              width: "100%",
              display: "flex ",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <IconButton
              onClick={() => {
                DecItem(item.Product._id);
              }}
            >
              <Remove />
            </IconButton>
            <Box
              sx={{
                width: "10ch",
              }}
            >
              <TextField
                InputProps={{
                  readOnly: true,
                }}
                fullWidth
                size="small"
                value={item.quantity}
              />
            </Box>
            <IconButton
              onClick={() => {
                IncItem(item.Product._id);
              }}
            >
              <Add />
            </IconButton>
          </Box>
          <Box sx={{ width: "100%" }}>
            <Typography
              align="center"
              sx={{
                fontWeight: "bold",
                color: "#ba6a62",
              }}
            >
              PKR.{item.quantity * item.Product.price}
            </Typography>
          </Box>
        </Box>
        <Box>
          <IconButton
            onClick={() => {
              DeleteItem(item.Product._id);
            }}
          >
            <Delete />
          </IconButton>
        </Box>
      </Box>
      <Divider />
    </>
  );
}
