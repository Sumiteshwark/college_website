import React from "react";
import "./footer.css";
import {FaFacebook, FaLinkedin, FaMapMarkerAlt, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="footer_main">
      <div className="footer_left">
        <div className="footer_left_first">
          <h5>Placement</h5>
          <h5>Search Website</h5>
          <h5>Android Apps Developed By Students</h5>
        </div>
        <div className="footer_left_second">
          <h5>Hostels</h5>
          <h5>Photo Gallery</h5>
          <h5>Students</h5>
          <h5>Alumni</h5>
        </div>
      </div>
      <div className="footer_right">
        <div className="footer_right_first">
          <h6>Location:</h6>
          <h6><i>Muzaffarpur Institute of Technology</i></h6>
          <h7><i>Muzaffarpur, Bihar, India, Pin - 842003</i></h7><br />
          <FaMapMarkerAlt /><a href="/">Main Campus</a>
        </div>
        <div className="footer_right_second">
          <h6>Find us on:</h6>
          <span className="faf"><FaTwitter /></span>
          <span className="faf"><FaFacebook /></span>
          <span className="faf"><FaLinkedin /></span>
          <h6> Call us on:</h6>
          <h4>+91-0621-2262442</h4>
        </div>
      </div>
    </div>
  );
};

export default Footer;
