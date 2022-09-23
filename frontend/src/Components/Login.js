import { Box, Button, FormControl, TextField } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

async function loginUser(credentials) {
  return fetch("http://localhost:1337/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
    // }).then((data) => data.json());
  }).then((data) => console.log(data));
}

function Login({ setToken }) {
  const navigate = useNavigate();

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
