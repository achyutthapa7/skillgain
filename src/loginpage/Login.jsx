import { TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { Bounce } from "react-reveal";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const inputdiv = {
    display: "flex",
    flexDirection: "column",
    gap: "30px",
  };
  const input = {
    width: "100%",
    background: "white",
    outlineWidth: 0,
    border: "none",
    height: "40px",
    borderRadius: "5px",
    padding: "0 10px",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    checkInput();
  };
  const checkInput = () => {
    if (email != "" && password != "") {
      navigate("/interest");
    } else if (email == "" || password == "") {
      alert("cannot leave space");
    }
  };
  return (
    <Bounce right>
      <div>
        <br />
        <br />
        <br />
        <Typography variant="h3" textAlign="center">
          Login
        </Typography>
        <br />
        <form onSubmit={handleSubmit}>
          <div style={inputdiv}>
            <TextField
              type="email"
              className="email"
              variant="standard"
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              type="password"
              label="Password"
              className="password"
              variant="standard"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <br />
          <br />

          <div className="buttondiv">
            <button className="loginbtn">Login</button>
          </div>
          <br />

          <div
            className="text"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Typography variant="p">
              Don't have an account? <a href="">Sign Up</a>
            </Typography>
          </div>
        </form>
      </div>
    </Bounce>
  );
};

export default Login;
