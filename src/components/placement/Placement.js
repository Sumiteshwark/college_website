import React from "react";
import "./placement.css";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FaCubes } from "react-icons/fa";

const Placement = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 666, min: 0 },
      items: 2,
    },
  };
  return (
    <div className="place">
        <div className="place_heding">
            <p><FaCubes /> Placement Partners</p>
        </div>
      <Carousel
        responsive={responsive}
        infinite="true"
        itemClass="place_img"
        autoPlay="true"
        autoPlaySpeed={2000}
      >
        <div>
          <img
            src="https://i0.wp.com/www.mitmuzaffarpur.org/wp-content/uploads/2018/05/hcl.jpg?fit=268%2C188&ssl=1"
            alt="imgss"
          ></img>
          <p className="place_para">Recruiters Company-HCL</p>
        </div>

        <div>
          <img
            src="https://i0.wp.com/www.mitmuzaffarpur.org/wp-content/uploads/2018/05/high_point_rendel.jpg?fit=104%2C67&ssl=1"
            alt="imgss"
          ></img>
          <p className="place_para">Recruiters Company - HPR</p>
        </div>

        <div>
          <img
            src="https://i0.wp.com/www.mitmuzaffarpur.org/wp-content/uploads/2018/05/sr_infotech.jpg?fit=110%2C68&ssl=1"
            alt="imgss"
          ></img>
          <p className="place_para">Recruiters Company</p>
        </div>

        <div>
          <img
            src="https://i0.wp.com/www.mitmuzaffarpur.org/wp-content/uploads/2018/05/bseblogo.gif?fit=80%2C99&ssl=1"
            alt="imgss"
          ></img>
          <p className="place_para">Recruiters Company -BSEB</p>
        </div>

        <div>
          <img
            src="https://i0.wp.com/www.mitmuzaffarpur.org/wp-content/uploads/2018/05/samsung.jpg?fit=225%2C225&ssl=1"
            alt="imgss"
          ></img>
          <p className="place_para">Company-Samsung</p>
        </div>

      </Carousel>
    </div>
  );
};

export default Placement;
