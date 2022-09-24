import { Button, FormControl, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

async function signupUser(credentials) {
  return fetch("http://localhost:1337/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

export default function Signup() {
  const navigate = useNavigate();

  const [firstname, setFirstName] = useState();
  const [lastname, setLastName] = useState();

  const [email, setEmail] = useState();

  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await signupUser({
      firstname,
      lastname,
      email,
      password,
    });

    navigate("/login");
  };

  return (
    <FormControl className="App">
      <h1>Please Register!!</h1>
      <form onSubmit={handleSubmit}>
        <Box
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
        >
          <TextField
            type="text"
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="FirstName"
          />

          <br></br>

          <TextField
            type="text"
            onChange={(e) => setLastName(e.target.value)}
            placeholder="LastName"
          />
          <br></br>

          <TextField
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />

          <br></br>

          <TextField
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
          />

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
