import React from "react";
import "./about.css";

const About = () => {
  return (
    <div className="about">
      <p>
        <b>Muzaffarpur Institute of Technology (MIT)</b>, Muzaffarpur is a premier
        institution of eastern India for technical education. It is under
        administrative control of department of science and technology and
        wholly funded by Govt. of Bihar. Established in 1954, MIT is one of the
        oldest technical institute in India working with moto{" "}
        <img src="https://www.mitmuzaffarpur.org/wp-content/themes/mit/assets/img/moto-line.png" alt="img"></img>
        i.e. <b>[Work is above everything else]</b>. The foundation stone was laid by
        the first prime minister of India, Pandit Jawaharlal Nehru.
      </p>
      <br />
      <p>
        M.I.T. came into existence on 25th September 1954, just seven years
        after independence of India. It was inaugurated by Sri C.P.N. Sinha,
        then governor of East Punjab. Initially it was started with Civil
        Engineering descipline with a batch of 45 students as 1954-55 batch with
        the name <b>'College of Civil Engineering, Muzaffarpur'</b>.
      </p>
      <br />
      <p>
        It is affiliated to Aryabhatta Knowlege University, Patna and offers
        undergraduate programs in engineering and pharmacy with postgraduate
        specialisation in Machine design and thermal engineering. The institute
        also caters to the research and development activities of the state of
        Bihar.
      </p>
      <p className="about_down">Read More »</p>
    </div>
  );
};

export default About;
