import React, { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import BASE_URL from "../config";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  });

  const handleLogin = async () => {
    let result = await fetch(`${BASE_URL}/login`, {
      method: "post",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.log(result);
    if (result.auth) {
      localStorage.setItem("user", JSON.stringify(result.user));
      localStorage.setItem("token", JSON.stringify(result.auth));
      navigate("/");
    } else {
      alert("Please Enter Correct details");
    }
  };

  return (
    <>
      <div className="heading">
        <h1>Login</h1>
      </div>
      <div className="Product">
        <Col xs={7}>
          <FloatingLabel
            controlId="floatingInput"
            label="Email address"
            className="mb-3"
          >
            <Form.Control
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Email"
              aria-describedby="Email"
            />
          </FloatingLabel>
        </Col>
      </div>
      <div className="Product">
        <Col xs={7}>
          <FloatingLabel controlId="floatingPassword" label="Password">
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Password"
              aria-describedby="Password"
            />
          </FloatingLabel>
        </Col>
      </div>
      <div className="Product">
        <Button
          variant="secondary"
          size="lg"
          onClick={handleLogin}
          className="appbutton"
        >
          Login
        </Button>
      </div>
    </>
  );
};

export default Login;
