import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";
import axios from "axios";
import IsLoggedin from "../../Authentication/IsLoggedIn";

export default function Home() {
  const [categories, setcategories] = useState([]);

  const getCategories = () => {
    axios
      .get("http://localhost:3000/api/categories/")
      .then((data) => {
        console.log(data);
        setcategories(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(getCategories, []);

  return (
    <IsLoggedin>
      <Box p={5} m={2}>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              width: "40%",
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {categories.map((data) => {
              return (
                <Box key={data._id}>
                  <CategoryCard category={data} />
                </Box>
              );
            })}
          </Box>
        </Box>
      </Box>
    </IsLoggedin>
  );
}
