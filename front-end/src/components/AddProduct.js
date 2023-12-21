import React, { useState } from "react";

import { useParams, useNavigate } from "react-router-dom";

import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";

import BASE_URL from "../config";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const convertToBase64 = (e) => {

      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = () => {
        console.log(reader.result);
        setImage(reader.result);
      }
      reader.onerror = error => {
        console.log("Error: ", error);
      }
  }

  const addProduct = async () => {
    console.log(name, price, category, company, userId);

    console.log(!name);
    if (!name || !price || !category || !company || image === null) {
      setError(true);
      return false;
    }

    const userId = JSON.parse(localStorage.getItem("user"));
    console.log(userId._id);

    let result = await fetch(`${BASE_URL}/add-product`, {
      method: "post",
      body: JSON.stringify({ name, price, category, company, image, userId}),
      headers: {
        "Content-Type": "application/json",
        authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
    });
    result = await result.json();
    console.log("AddProduct: ", result);
    navigate("/");
  };
  
  return (
    <>
      <div className="heading">Add Product</div>
      <div className="Product">
        <Col xs={7}>
          <FloatingLabel
            controlId="floatingInput"
            label="Product Name"
            className="mb-3"
          >
            <Form.Control
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter Product Name"
              aria-describedby="Product Name"
            />
          </FloatingLabel>
        </Col>
        {error && !name && (
          <span className="invalidInput">Enter Valid Name</span>
        )}
      </div>
      <div className="Product">
        <Col xs={7}>
          <FloatingLabel
            controlId="floatingInput"
            label="Product Price"
            className="mb-3"
          >
            <Form.Control
              type="text"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Enter Product Price"
              aria-describedby="Price"
            />
          </FloatingLabel>
        </Col>
        {error && !price && (
          <span className="invalidInput">Enter Valid Price</span>
        )}
      
      </div>
      <div className="Product">
        <Col xs={7}>
          <FloatingLabel
            controlId="floatingPassword"
            label="Product Cateogry"
            className="mb-3"
          >
            <Form.Control
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder="Enter Product Cateogry"
              aria-describedby="Cateogry"
            />
          </FloatingLabel>
        </Col>
        {error && !category && (
          <span className="invalidInput">Enter Valid Category</span>
        )}
      </div>
      <div className="Product">
        <Col xs={7}>
          <FloatingLabel
            controlId="floatingPassword"
            label="Product Company"
            className="mb-3"
          >
            <Form.Control
              type="text"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              placeholder="Enter Product Company"
              aria-describedby="Company"
            />
          </FloatingLabel>
        </Col>
      </div>
      <div className="Product">
        <Col xs = {7}>
          <FloatingLabel
            controlId="floatingInput"
            label="Product Image"
            className="mb-3"
          >
            <Form.Control
              type="file"
              // value={image}
              onChange={convertToBase64}
              // placeholder="Enter Product Price"
              // aria-describedby="Price"
            />
          </FloatingLabel>
        </Col>
        {error && !image && (
          <span className="invalidInput">Upload Valid Image</span>
        )}
      </div>
      <div className="Product">
        <Button
          style={{ width: '7rem', fontSize: '1.2rem' }}
          variant="secondary"
          size="lg"
          onClick={addProduct}
          className="appbutton"
        >
          Add
        </Button>
      </div>
    </>
  );
};

export default AddProduct;
