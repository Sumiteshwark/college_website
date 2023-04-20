import React from 'react';
import './details.css';
import { FaBars, FaBullhorn, FaCubes, FaRegClock, FaTrophy, FaUserPlus } from 'react-icons/fa';

import AOS from "aos";
import "aos/dist/aos.css";


const Details = () => {
  return (
    AOS.init(),
    <div className='details_container'>
      <div className='details_main'>
        <div data-aos="fade-up-left" data-aos-offset="100" data-aos-duration="1500" className='details_left'>
          <div className='left_top'>
            <p className='left_top_first'><FaBullhorn /> Notices</p>
            <p className='left_top_second'><FaCubes /> Tenders</p>
            <p className='left_top_third'><FaUserPlus /> Placement</p>
            <p className='left_top_fourth'><FaTrophy /> Awards & Accolades</p>
          </div>
          <div className='left_bottom'>
            <div className='left_bottom_sec'>
              <h7>&raquo; Notice regarding Project Presentation @M.Tech 3rd Sem (2021 Batch)Mech.</h7>
              <p><FaRegClock/>   17 Apr, 2023</p>
            </div>
            <div className='left_bottom_sec'>
              <h7>&raquo; 1st sem B.Pharm and 3rd sem B.Tech one paper resheduled</h7>
              <p> <FaRegClock/> 31 Mar, 2023</p>
            </div>
            <div className='left_bottom_sec'>
              <h7>&raquo; Revised program for M.Tech 1st sem mid sem examination 2022 (2022 batch)</h7>
              <p> <FaRegClock/> 28 Mar, 2023</p>
            </div>
            <div className='left_bottom_sec'>
              <h7>&raquo; Revised program for B.Tech 1st sem mid sem exam 2022</h7>
              <p> <FaRegClock/> 28 Mar, 2023</p>
            </div>
            <div className='left_bottom_sec'>
              <h7>&raquo; Revised program for B.Tech/B.Pharma 7th sem mid sem exam 2023</h7>
              <p> <FaRegClock/> 28 Mar, 2023</p>
            </div>
            <div className='left_bottom_sec_last'>
              <h7>&raquo; Revised program for B.Tech/B.Pharma 7th sem mid sem exam 2023</h7>
              <p> <FaRegClock/> 25 Mar, 2023</p>
            </div>
          </div>
        </div>
        <div data-aos="fade-up-right" data-aos-offset="100" data-aos-duration="1500" className='details_right'>
          <div className='right_top'>
            <h2><FaBars /> Featured Videos</h2>
            <button>View All</button>
          </div>
          <div className='right_iframe'>
            <iframe width="100%" height="315" src="https://www.youtube.com/embed/67T9px3JzKI" title="Low Cost Water Flow Meter - Innovation by Team SUVANA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
          <div className='right_bottom_heading'>
            <h2><FaBars /> Important Links</h2>
          </div>
          <div className='right_bottom_comtent'>
            <p>&raquo; Department of Pharmacy</p>
            <p>&raquo; AKU previous year question papers</p>
            <p>&raquo; Important help line link</p>
            <p>&raquo; The Edugrievance Software URL for the Institution</p>
            <p>&raquo; Social Welfare Dept. Bihar</p>
            <p>&raquo; Aryabhatta Knowledge University</p>
            <p>&raquo; All India Council for Technical Education (AICTE)</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Details;