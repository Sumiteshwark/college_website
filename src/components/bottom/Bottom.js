import React from "react";
import "./bottom.css";

const Bottom = () => {
    const tt=new Date();
  return (
    <div className="bottom_main">
      <div className="bottom_top">
        <h4>©{tt.getFullYear()} Copyright SK, Muzaffarpur</h4>
        <h4>VISITORS: 12468438</h4>
        <h4>Contact us | Privacy Policy</h4>
      </div>
      <div className="bottom_bottom">
        <p>Redesigned & Maintained by Sumiteshwar Kumar</p>
      </div>
    </div>
  );
};

export default Bottom;
