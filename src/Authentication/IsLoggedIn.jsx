/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useCookies } from "react-cookie";
const IsLoggedin = (props) => {
  const [cookies] = useCookies(["JWTtoken"]);

  React.useEffect(() => {
    if (!localStorage.getItem("token")) {
      window.location.href = "/login";
    }
  }, []);
  return <>{props.children}</>;
};

export default IsLoggedin;
