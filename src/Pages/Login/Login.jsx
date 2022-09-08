import React from "react";
import {
  TextField,
  Card,
  Box,
  Typography,
  CardContent,
  Divider,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import LoggedIn from "../../Authentication/LoggedIn";
axios.defaults.headers.common["x-auth-token"] = localStorage.getItem("token");
// import LoginAuth from "../../AuthWrapper/isLoginTrue";
// import LoadingScreen from "../../Components/LoadingScreen";
const Login = (props) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loading, setloading] = React.useState(false);
  const direct = () => {
    window.location.href = "/";
  };

  const LoginFunction = async (e) => {
    setloading(true);
    axios
      .post("http://localhost:3000/api/user/login/", { email, password })
      .then((data) => {
        setloading(false);
        setTimeout(direct, 1000);
        console.log(data);
        localStorage.setItem("token", data.data);
      })
      .catch((err) => {
        setloading(false);
        toast.error(err.response.data, {
          position: toast.POSITION.BOTTOM_LEFT,
        });
      });
  };

  return (
    <LoggedIn>
      <Box>
        {/* <LoadingScreen bool={loading} /> */}
        <Box
          // sx={{ paddingLeft: "40%", paddingTop: "5%", paddingBottom: "5%" }}
          sx={{
            display: "flex",
            justifyContent: "center",
            marginTop: "100px",
          }}
        >
          <Card sx={{ maxWidth: 300, padding: "20px" }}>
            <CardContent>
              <Typography
                align="center"
                sx={{
                  fontWeight: "bold",

                  fontSize: "30px",
                }}
              >
                Grocery Store
              </Typography>
              <Divider />
              <Typography
                align="center"
                sx={{
                  fontWeight: "bold",
                  color: "#ba6a62",
                  fontSize: "25px",
                }}
              >
                SIGN IN
              </Typography>
              <Box sx={{}}>
                <>
                  <TextField
                    required
                    fullWidth
                    id="filled-required"
                    label="Email"
                    helperText="example@example.com"
                    variant="standard"
                    defaultValue={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    onKeyPress={(e) => {
                      if (e.key === "Enter") {
                        LoginFunction();
                        // write your functionality here
                      }
                    }}
                  />
                </>
                <>
                  <TextField
                    label="Password"
                    type="password"
                    fullWidth
                    variant="standard"
                    autoComplete="current-password"
                    defaultValue={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    onKeyPress={(e) => {
                      if (e.key === "Enter") {
                        LoginFunction();
                        // write your functionality here
                      }
                    }}
                  />
                </>
                <Box mt={2}>
                  <Button fullWidth variant="contained" onClick={LoginFunction}>
                    LOGIN
                  </Button>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </LoggedIn>
  );
};

export default Login;
