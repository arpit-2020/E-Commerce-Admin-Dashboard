import React, { useState, useEffect } from "react";
import { header } from "request/lib/hawk";

//hook which is used for redirecting
import { useNavigate } from "react-router-dom";

import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import BASE_URL from "../config";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  });

  const collectData = async () => {
    console.log(name, email, password);
    if (!name || !email || !password) {
      alert("Please Enter valid credentials");
      return false;
    }
    let result = await fetch(`${BASE_URL}/register`, {
      method: "post",
      body: JSON.stringify({ name, email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.log(result);
    if (result == false) {
      alert("Email Already exist please enter another email and try again");
      return result;
    }
    localStorage.setItem("user", JSON.stringify(result.result));
    localStorage.setItem("token", JSON.stringify(result.auth));
    navigate("/");
  };

  return (
    <>
      <div className="heading">
        <h1>Sign Up</h1>
      </div>
      <div className="Product">
        <Col xs={7}>
          <FloatingLabel
            controlId="floatingInput"
            label="Name"
            className="mb-3"
          >
            <Form.Control
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter Name"
              aria-describedby="Name"
            />
          </FloatingLabel>
        </Col>
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
          onClick={collectData}
          className="appbutton"
        >
          Signup
        </Button>
      </div>
    </>
  );
};

export default SignUp;
