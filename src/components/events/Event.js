import React from "react";
import "./events.css";
import { items } from "./EventItems";

import AOS from "aos";
import "aos/dist/aos.css";

const Event = () => {
  return (
    AOS.init(),
    // (
    //   <div className="event_now">
    //     <div
    //       data-aos="slide-right"
    //       data-aos-offset="100"
    //       data-aos-duration="1500"
    //     >
    //       <div className="container">
    //         {items.map((item, index) => {
    //           return (
    //             <div className={item.curr_class}>
    //               <div data-aos="flip-up" data-aos-offset="100" className="ims">
    //                 <img src={item.curr_src} alt="im"></img>
    //                 <p>{item.mid_p}</p>
    //               </div>
    //               <div>
    //                 <p>
    //                   {item.lst_p} <span className="right">&gt;</span>
    //                 </p>
    //               </div>
    //             </div>
    //           );
    //         })}
    //       </div>
    //     </div>
    //   </div>
    // )

    (    
      <div className="event_now">
          <div className="container" data-aos="slide-right" data-aos-offset="100" data-aos-duration="1500">
            {items.map((item, index) => {
              return (
                <div className={item.curr_class}>
                  <div data-aos="flip-up" data-aos-offset="100" className="ims">
                    <img src={item.curr_src} alt="im"></img>
                    <p>{item.mid_p}</p>
                  </div>
                  <div>
                    <p>
                      {item.lst_p} <span className="right">&gt;</span>
                    </p>
                  </div>
                </div>
              );
            })}
                </div>
      </div>
    )
  );
};

export default Event;
