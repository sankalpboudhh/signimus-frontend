import { Button } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();
  const navigateRegister = () => {
    navigate("/register");
  };
  const navigateLogin = () => {
    navigate("/login");
  };
  return (
    <Box sx={{ "& .MuiButtonBase-root": { m: 1 } }}>
      <h1 className="home-welcome-text">Welcome!!</h1>

      <p>Please select an option </p>
      <Button
        className="btn"
        variant="contained"
        color="primary"
        size="large"
        onClick={navigateRegister}
      >
        Sign up
      </Button>

      <Button
        variant="contained"
        color="primary"
        size="large"
        onClick={navigateLogin}
      >
        Login
      </Button>
    </Box>
  );
}

export default HomePage;
