import React from "react";
import Card from "react-bootstrap/Card";

const Profile = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <section className="movie-section">
          <div className="movie-card">
            <figure><img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfSWk_PgjeHxLl46ThEz0MIpGAx5MRV1WIHN5AoB9vOA&usqp=CAU&ec=48665701"} alt="" /></figure>
            <div className="card-content">
              <p className="title">Profile</p>
              <p className=""></p>
              <p className="card-text">Name : {user.name}</p>
              <p className="card-text">Email : {user.email}</p>
              {/* <p className="card-text">{movie.imdbRating} / 10</p> */}
              <p className="card-text">Contact : </p>
            </div>
          </div>
        </section>
  );
};

export default Profile;
