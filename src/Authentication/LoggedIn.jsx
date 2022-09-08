/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";

import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
const LoggedIn = (props) => {
  const navigate = useNavigate();

  React.useEffect(() => {
    if (localStorage.getItem("token")) {
      // navigate("/");
      window.location.href = "/";
    }
  }, []);
  return <>{props.children}</>;
};

export default LoggedIn;
