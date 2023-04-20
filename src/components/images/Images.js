import React from "react";
import "./images.css";
import { FaTv } from "react-icons/fa";

const Images = () => {
  return (
    <div className="main_container">
      <div className="top">
        <p>
          <FaTv /> Latest Images
        </p>
        <button>View All</button>
      </div>
      <div className="bottom">
        <div className="imgs">
          <img
            src="https://i0.wp.com/www.mitmuzaffarpur.org/wp-content/uploads/2019/12/WhatsApp-Image-2019-12-19-at-16.33.49-scaled.jpeg?fit=1024%2C467&ssl=1"
            alt="imgss"
          ></img>
        </div>
        <div className="imgs">
          <img
            src="https://i0.wp.com/www.mitmuzaffarpur.org/wp-content/uploads/2018/05/DSC_0236.jpg?fit=2048%2C1361&ssl=1"
            alt="imgss"
          ></img>
        </div>
        <div className="imgs">
          <img
            src="https://i0.wp.com/www.mitmuzaffarpur.org/wp-content/uploads/2018/05/DSC_0334.jpg?fit=1024%2C681&ssl=1"
            alt="imgss"
          ></img>
        </div>
        <div className="imgs">
          <img
            src="https://i0.wp.com/www.mitmuzaffarpur.org/wp-content/uploads/2018/05/DSC_0326.jpg?fit=1024%2C681&ssl=1"
            alt="imgss"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Images;
