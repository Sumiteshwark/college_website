import React from "react";
import "./socialmedia.css";

import Iframe from "react-iframe";

import { FaFacebook, FaShareAlt, FaTwitter } from "react-icons/fa";

const Socialmedia = () => {
  return (
    <div className="social_main">
      <div className="s_head">
        <p><FaShareAlt /> Follow Us On Social Network</p>
      </div>
      <div className="social">
        <div className="first">
          <p>
            {/* <span className="s_icon"> */}
              <FaFacebook />
            {/* </span> */}
            Facebook
          </p>
          <Iframe
            url="https://www.facebook.com/v2.9/plugins/page.php?adapt_container_width=true&app_id=&channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df33714db079590c%26domain%3Dwww.mitmuzaffarpur.org%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252Fwww.mitmuzaffarpur.org%252Ff29578daa52db44%26relation%3Dparent.parent&container_width=360&hide_cover=false&href=https%3A%2F%2Fwww.facebook.com%2Fmitmuzaffarpur&locale=en_GB&sdk=joey&show_facepile=true&small_header=false&tabs=timeline"
            width="350px"
            height="450px"
            id=""
            className=""
            display="block"
            position="relative"
          />
        </div>
        <div className="first">
          <p>
            {/* <span className="s_icon"> */}
              <FaTwitter />
            {/* </span> */}
            Twitter
          </p>
          <Iframe
            url="https://syndication.twitter.com/srv/timeline-profile/screen-name/MITM_DST?dnt=false&embedId=twitter-widget-0&features=eyJ0ZndfdGltZWxpbmVfbGlzdCI6eyJidWNrZXQiOltdLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X2ZvbGxvd2VyX2NvdW50X3N1bnNldCI6eyJidWNrZXQiOnRydWUsInZlcnNpb24iOm51bGx9LCJ0ZndfdHdlZXRfZWRpdF9iYWNrZW5kIjp7ImJ1Y2tldCI6Im9uIiwidmVyc2lvbiI6bnVsbH0sInRmd19yZWZzcmNfc2Vzc2lvbiI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9LCJ0ZndfbWl4ZWRfbWVkaWFfMTU4OTciOnsiYnVja2V0IjoidHJlYXRtZW50IiwidmVyc2lvbiI6bnVsbH0sInRmd19leHBlcmltZW50c19jb29raWVfZXhwaXJhdGlvbiI6eyJidWNrZXQiOjEyMDk2MDAsInZlcnNpb24iOm51bGx9LCJ0ZndfZHVwbGljYXRlX3NjcmliZXNfdG9fc2V0dGluZ3MiOnsiYnVja2V0Ijoib24iLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X3ZpZGVvX2hsc19keW5hbWljX21hbmlmZXN0c18xNTA4MiI6eyJidWNrZXQiOiJ0cnVlX2JpdHJhdGUiLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X2xlZ2FjeV90aW1lbGluZV9zdW5zZXQiOnsiYnVja2V0Ijp0cnVlLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X3R3ZWV0X2VkaXRfZnJvbnRlbmQiOnsiYnVja2V0Ijoib24iLCJ2ZXJzaW9uIjpudWxsfX0%3D&frame=false&hideBorder=false&hideFooter=false&hideHeader=false&hideScrollBar=false&lang=en&origin=https%3A%2F%2Fwww.mitmuzaffarpur.org%2F&sessionId=cc8fcff369f323922d45c99dbf28e00e5845e28f&showHeader=true&showReplies=false&transparent=false&widgetsVersion=aaf4084522e3a%3A1674595607486"
            width="340px"
            height="450px"
            id=""
            className=""
            display="block"
            position="relative"
          />
        </div>
        <div className="first">
          <p>
            {/* <span className="s_icon"> */}
              <FaFacebook />
            {/* </span> */}
            Facebook
          </p>
          <Iframe
            url="https://www.facebook.com/v2.9/plugins/page.php?adapt_container_width=true&app_id=&channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df102f092f7e1c3c%26domain%3Dwww.mitmuzaffarpur.org%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252Fwww.mitmuzaffarpur.org%252Ff29578daa52db44%26relation%3Dparent.parent&container_width=360&hide_cover=false&href=https%3A%2F%2Fwww.facebook.com%2Ftpomitm&locale=en_GB&sdk=joey&show_facepile=true&small_header=false&tabs=timeline"
            width="350px"
            height="450px"
            id=""
            className=""
            display="block"
            position="relative"
          />
        </div>

        <div className="first last">
          <Iframe
            url="https://www.facebook.com/v2.9/plugins/page.php?adapt_container_width=true&app_id=&channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df102f092f7e1c3c%26domain%3Dwww.mitmuzaffarpur.org%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252Fwww.mitmuzaffarpur.org%252Ff29578daa52db44%26relation%3Dparent.parent&container_width=360&hide_cover=false&href=https%3A%2F%2Fwww.facebook.com%2Ftpomitm&locale=en_GB&sdk=joey&show_facepile=true&small_header=false&tabs=timeline"
            width="350px"
            height="450px"
            id=""
            className=""
            display="block"
            position="relative"
          />
        </div>
      </div>
    </div>
  );
};

export default Socialmedia;
