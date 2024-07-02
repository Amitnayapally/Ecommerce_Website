import React from "react";
import img1 from "./assets/main.jpg";

const Home = () => {
  return (
    <>
      <div className="hero border-1 pb-3">
        <div className="card bg-dark text-white border-0 mx-3">
          <img
            className="card-img img-fluid"
            src={img1}
            alt="card"
            height={500}
          />
          <div className="card-img-overlay d-flex align-items-center">
            <div className="container">
              <h5 className="card-title fs-1 text fw-lighter">New Season Arrivals Explore Our Latest Collection</h5>
              <p className="card-text fs-5 d-none d-sm-block ">
              Discover a range of new arrivals that offer style and elegance. Browse through our extensive selection of products designed to meet all your fashion and lifestyle needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
