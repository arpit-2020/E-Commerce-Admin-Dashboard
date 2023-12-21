import React from "react";
import { useEffect, useState  } from "react";
import { useParams, NavLink, useNavigate} from "react-router-dom";

import BASE_URL from "../config";
const SingleProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const [image, setImage] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();
const navigate = useNavigate();

  useEffect(() => {
    // console.log(params);
    // getProducts();
    getProductDetails();
  }, []);
  const getProducts = async () => {
    let result = await fetch(`${BASE_URL}/products`, {
      headers: {
        authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
    });

    result = await result.json();

    // setProducts(result);
    // setIsLoading(false);
  };
  const getProductDetails = async () => {
    let result = await fetch(`${BASE_URL}/product/${params.id}`, {
      headers: {
        authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
    });

    result = await result.json();
    setIsLoading(false);
    setName(result.name);
    setPrice(result.price);
    setCategory(result.category);
    setCompany(result.company);
    setImage(result.image);

    // console.log(result);
  };
  const deleteProduct = async () => {
    // console.log(id);
    let result = await fetch(`${BASE_URL}/product/${params.id}`, {
      method: "Delete",
      headers: {
        authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
    });
    result = await result.json();

    if (result) {
      getProducts();
      alert("record is deleted");
      navigate('/')      
    }
  };
  return (
    <>
      {!isLoading ? (
        <section className="movie-section">
          <div className="movie-card">
            <figure><img src={image} alt="" /></figure>
            <div className="card-content">
              <p className="title">{name}</p>
              <p className=""></p>
              <p className="card-text">Price : {price}</p>
              <p className="card-text">Category : {category}</p>
              {/* <p className="card-text">{movie.imdbRating} / 10</p> */}
              <p className="card-text">Company: {company}</p>
              <div className="btn-container">
                <button className = "back-btn" onClick={() => {navigate('/')}}>
                    Go Back
                </button>
                <NavLink to={`/update/${params.id}`}>
                <button className="back-btn">update</button>
                     </NavLink>
                
                <button onClick={deleteProduct} className="back-btn">delete</button>
            </div>
            </div>
          </div>
        </section>
      ) : (
        <div class="loader-container">
          <div class="loader">
            <div class="loader-dot"></div>
            <div class="loader-dot"></div>
            <div class="loader-dot"></div>
          </div>
        </div>
      )}
    </>
  );
};
export default SingleProduct;
