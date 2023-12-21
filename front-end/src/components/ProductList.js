import React, { useEffect, useState } from "react";

import { Link, NavLink } from "react-router-dom";
import { get } from "request";
import Table from "react-bootstrap/Table";

import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import BASE_URL from "../config";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isFound, setIsFound] = useState(true);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    let result = await fetch(`${BASE_URL}/products`, {
      headers: {
        authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
    });

    result = await result.json();

    setProducts(result);
    setIsLoading(false);
  };

  const deleteProduct = async (id) => {
    console.log(id);
    let result = await fetch(`${BASE_URL}/product/${id}`, {
      method: "Delete",
      headers: {
        authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
    });
    result = await result.json();

    if (result) {
      getProducts();
    }
  };
  const searchHandle = async (event) => {
    console.log(event.target.value);
    setSearch(key);
    let key = event.target.value;
    if (key) {
      let result = await fetch(`${BASE_URL}/search/${key}`, {
        headers: {
          authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`,
        },
      });

      result = await result.json();
      if (result) {
        console.log("result:", result);
        setProducts(result);
      }
      setIsFound(result.length ? true : false);
    } else {
      setIsLoading(true);
      setIsFound(true);
      getProducts();
    }
  };
  console.log(products);
  console.log("products", products);
  return (
    <>
      <section >
        <div className="search-section">
        <h2>Search Products</h2>
        <form>
          <div>
            <input
              type="text"
              placeholder="Search here"
              value={search}
              onChange={searchHandle}
            />
          </div>
        </form>
        <div className="card-error">
          <p>{!isFound && "No product Found!"}</p>
        </div>
        </div>
      </section>
      <section>
        {products.length > 0 ? (
          <div className="container grid grid-4-col">
            {products.map((item, index) => {
              const { _id, name, price, cateogry, company, image } = item;
              const product_name = name.substring(0, 10);
              return (
                <NavLink className="list-info" to={`movie/${_id}`} key={_id}>
                  <div className="card">
                    <div >
                    <img src={image} alt="" />
                      <h2>
                        {name.length >= 10
                          ? `${product_name}...`
                          : product_name}
                      </h2>
                      
                      
                    </div>
                  </div>
                </NavLink>
              );
            })}
          </div>
        ) : (
          <div class="loader-container">
            <div class="loader">
              <div class="loader-dot"></div>
              <div class="loader-dot"></div>
              <div class="loader-dot"></div>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default ProductList;
