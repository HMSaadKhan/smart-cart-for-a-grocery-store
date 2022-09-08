import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home/Home";
import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CookiesProvider } from "react-cookie";
import TopBar from "./Component/Topbar/TopBar";
import Products from "./Pages/Products/Products";
import Login from "./Pages/Login/Login";
import Cart from "./Pages/Cart/Cart";
import CartCount from "./ContextAPIs/CartChanger";

function App() {
  return (
    <CartCount>
      <Router>
        <ToastContainer />
        <TopBar />
        <Routes>
          <Route path="/product/:id" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </CartCount>
  );
}

export default App;
