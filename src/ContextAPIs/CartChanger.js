/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState, useEffect, createContext } from "react";

import axios from "axios";
export const CartCountContext = createContext({});

const CartCount = (props) => {
  const [qty, setqty] = useState(0);
  const [changer, setChanger] = useState();

  const getCartCount = () => {
    axios.get("http://localhost:3000/api/cart/").then((data) => {
      setqty(data.data.items.length);
    });
  };
  useEffect(getCartCount, [changer]);
  return (
    <>
      <CartCountContext.Provider value={{ qty, setChanger }}>
        {props.children}
      </CartCountContext.Provider>
    </>
  );
};
export default CartCount;
