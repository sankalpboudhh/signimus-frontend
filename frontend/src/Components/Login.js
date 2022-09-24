import { Box, Button, FormControl, TextField } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { userDetails } from "../user/userSlice";
import axios from "axios";
import config from "../App";

function Login() {
  const navigate = useNavigate();

  const user = useSelector((state) => state.userReducer.user);
  const dispatch = useDispatch();

  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isLoggedIn = await loginUser({
      username,
      password,
    });

    navigate("/Hello");
  };

  const loginUser = async (credentials) => {
    const costomConfig = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const res = await axios.post(
      "http://localhost:1337/login",
      credentials,
      costomConfig
    );
    console.log("From Login.js", res.data);
    dispatch(userDetails(res.data));
  };

  return (
    <FormControl className="App">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <Box
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
        >
          <TextField
            type="text"
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
          />

          <br></br>

          <TextField
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <br></br>

          <div>
            <Button variant="contained" type="submit">
              Submit
            </Button>
          </div>
        </Box>
      </form>
    </FormControl>
  );
}

export default Login;
