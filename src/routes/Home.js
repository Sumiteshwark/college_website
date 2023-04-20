import React from "react";
import Top from "../components/header/Top";
import Nav from "../components/header/Nav";
import Photonews from "../components/photo_news/Photonews";
import About from "../components/about/About";
import Event from "../components/events/Event";
import Details from "../components/details/Details";
import Images from "../components/images/Images";
import Placement from "../components/placement/Placement";
import Socialmedia from "../components/socialmedia/Socialmedia";
import Footer from "../components/footer/Footer";
import Bottom from "../components/bottom/Bottom";

import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  return (
    AOS.init(),
    (
      <>
        <div data-aos="flip-up" data-aos-offset="100">
          <Top />
        </div>
        {/* <div data-aos="flip-up" data-aos-offset="100"> */}
          <Nav />
        {/* </div> */}
        <div data-aos="flip-up" data-aos-offset="100">
          <Photonews />
        </div>
        <div data-aos="flip-up" data-aos-offset="100">
          <About />
        </div>
        {/* <div data-aos="slide-right" data-aos-offset="100" data-aos-duration="1500"> */}
          <Event />
        {/* </div> */}
        {/* <div data-aos="flip-up" data-aos-offset="100"> */}
          <Details />
        {/* </div> */}
        <div data-aos="flip-up" data-aos-offset="100"  data-aos-duration="1000">
          <Images />
        </div>
        <div data-aos="flip-up" data-aos-offset="100"  data-aos-duration="1000">
          <Placement />
        </div>
        <div data-aos="flip-up" data-aos-offset="100"  data-aos-duration="1000">
          <Socialmedia />
        </div>
        <div data-aos="flip-up" data-aos-offset="100"  data-aos-duration="1000">
          <Footer />
        </div>
        {/* <div data-aos="flip-up" data-aos-offset="100"> */}
          <Bottom />
        {/* </div> */}
      </>
    )
  );
};

export default Home;
