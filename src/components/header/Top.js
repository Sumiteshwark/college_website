import React from 'react';
import './top.css';

const Top = () => {
  return (
    <div className='head_continer'>
      <div className='head_main'>
        <div className='head_top'>
          <p>Font Size: </p>
          <button>A+</button>
          <button>A-</button>
          <p>Color Schema: </p>
          <div className='box_first'></div>
          <div className='box_second'></div>
          <div className='box_third'></div>
        </div>
        <div className='top_logo'>
          <div className='top_logo_left'>
            <img src='https://www.mitmuzaffarpur.org/wp-content/themes/mit/assets/img/mit-logo.jpg' alt="img"></img>
          </div>
          <div className='top_logo_right'>
            <h4>Muzaffarpur Institute of Technology</h4>
            <p>( Dept. Of Science & Technology, Govt. Of Bihar )</p>
          </div>
        </div>
        <div className='head_bottom'>
          <p>TechMITI |</p>
          <p>TEQIP |</p>
          <p>NPTEL |</p>
          <p>AICTE |</p>
          <p>PUBLICATION</p>
        </div>
      </div>
    </div>
  )
}

export default Top;