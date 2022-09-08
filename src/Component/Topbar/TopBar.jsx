import React from "react";
import { useNavigate } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import LoginIcon from "@mui/icons-material/Login";
import { Badge, Button, IconButton } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import { useContext } from "react";
import { CartCountContext } from "../../ContextAPIs/CartChanger";

const Topbar = (props) => {
  const navigate = useNavigate();
  const cartCount = useContext(CartCountContext);
  return (
    <Box>
      <AppBar sx={{ background: "#9ca677", position: "relative" }}>
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography
              color="textPrimary"
              sx={{ fontWeight: "bold", cursor: "pointer" }}
              variant="h4"
              onClick={(e) => {
                navigate("/");
              }}
            >
              Grocery App
            </Typography>
          </Box>
          <Box>
            <IconButton
              onClick={() => {
                navigate("/cart");
              }}
            >
              <Badge badgeContent={cartCount.qty} color="error">
                <ShoppingCartOutlinedIcon />
              </Badge>
            </IconButton>
            {localStorage.getItem("token") ? (
              <IconButton
                onClick={() => {
                  localStorage.removeItem("token");
                  window.location.reload();
                }}
              >
                <LogoutIcon />
              </IconButton>
            ) : (
              <IconButton
                onClick={() => {
                  navigate("/login");
                }}
              >
                <LoginIcon />
              </IconButton>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Topbar;
