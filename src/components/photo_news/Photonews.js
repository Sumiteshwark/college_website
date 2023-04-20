import React from "react";
import "./photonews.css";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import Marquee from "react-marquee-master";

const Photonews = () => {
  return (
    <>
      <div className="pn_total">
        <div className="pn_carousel">
          <Carousel autoPlay="true" interval={2000} infiniteLoop="true" transitionTime={0}>
            <div>
              <img
                src="https://i0.wp.com/www.mitmuzaffarpur.org/wp-content/uploads/2019/11/IMG20191117172557_2.jpeg?fit=1024%2C473&ssl=1"
                alt="first_image"
              />
            </div>
            <div>
              <img
                src="https://i0.wp.com/www.mitmuzaffarpur.org/wp-content/uploads/2019/07/66736131_2297017730365393_5708895354754170880_o-2-1-e1563045382284.jpg?fit=853%2C421&ssl=1"
                alt="second_image"
              />
              <p className="legend">Smart India Hackathon -2019 Hardware Edition Winner Team “SUVANA” from MIT Muzaffarpur</p>
            </div>
            <div>
              <img
                src="https://i0.wp.com/www.mitmuzaffarpur.org/wp-content/uploads/2018/05/muzaffarpur-institute-of-technology-mit-muzaffarpur-institutes-for-engineering-jycepdw-1.jpg?fit=950%2C700&ssl=1"
                alt="third_image"
              />
              <p className="legend">MIT, since 25th September 1954</p>
            </div>
            <div>
              <img
                src="https://i0.wp.com/www.mitmuzaffarpur.org/wp-content/uploads/2019/07/20190712_194401-e1563042788948.jpg?fit=1024%2C583&ssl=1"
                alt="fourth_image"
              />
              <p className="legend">Smart India Hackathon -2019 Hardware Edition Winner Team “SUVANA” with Mentors and SPoC/Coordinator</p>
            </div>
          </Carousel>
        </div>

        <div className="pn_news">
          <p className="pn_news_heading">Latest News / Updates</p>
          <Marquee
            marqueeContainerClassName="ins"
            marqueeItemClassName="inside"
            delay={80}
            marqueeItems={[
              "» Notice regarding Project Presentation @M.Tech 3rd Sem (2021 Batch)Mech.",
              "» Revised program for M.Tech 1st sem mid sem examination 2022 (2022 batch)",
              "» 1st sem B.Pharm and 3rd sem B.Tech one paper resheduled",
              "» Revised program for B.Tech 1st sem mid sem exam 2022",
              "» Notice for AMBEDKAR JAYANTI 2023 is Going to Organise by 2K20 batch",
              "» Revised program for B.Tech-B.Pharma 7th sem Mid sem examination 2023 (2019 Batch)",
              "» Revised program for B.Tech-B.Pharma 7th sem Mid sem examination 2023 (2019 Batch)",
              "» Revised program for B.Tech-B.Pharma 7th sem Mid sem examination 2023 (2019 Batch)",
              "» Revised program for B.Tech-B.Pharma 7th sem Mid sem examination 2023 (2019 Batch)",
              "» Revised program for B.Tech-B.Pharma 7th sem Mid sem examination 2023 (2019 Batch)",
              "» Revised program for B.Tech-B.Pharma 7th sem Mid sem examination 2023 (2019 Batch)",
              "» Revised Program for B.pharma 1st sem Mid sem examination 2022 (2022 Batch)",
              "» Revised program for B.Tech 3rd sem Mid sem examination 2023 (2021 Batch)",
            ]}
          />
        </div>
      </div>
      <Marquee
      marqueeContainerClassName="new_m"
      height={80}
      delay={20}
          direction="left"
            marqueeItemClassName="new_inside"
          marqueeItems={[
            " ★ COVID-19 Safety Guidelines for Students",
            " ★ Notice for Welfare Hostel ( H-6) allotment",
            " ★ Notice: Regarding List of Students",
            " ★ B.Tech(L.E.) Admission 2020",
            " ★ India International Science Festival (IISF) - Student Innovation Festival (SIF) on 22 - 23 January 2023"
          ]}
        />
    </>
  );
};

export default Photonews;
