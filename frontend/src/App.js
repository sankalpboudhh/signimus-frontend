import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Button from "@mui/material/Button";

import HomePage from "./Components/HomePage";
import Register from "./Components/Register";
import Login from "./Components/Login";
import { Hello } from "./Components/Hello";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/hello" element={<Hello />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
