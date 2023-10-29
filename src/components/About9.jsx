import React, { useContext, useEffect } from 'react'
import { Col, Row } from 'react-bootstrap';
import Aos from "aos";
import "aos/dist/aos.css";
import { Langcontext } from '../context/Langcontext';

const About9 = () => {
  const [lang, setLang] = useContext(Langcontext);
     useEffect(() => {
       Aos.init({ duration: 2000 });
     }, []);
  return (
    <Row className="about-5 mt-5 mb-5">
      <Col sm={12} md={6}>
        <div className="about5-right ms-5 d-flex align-items-center">
          <div>
            <h2>
              {lang === "az" ? "Hər Ehtiyacınız Üçün" : "For Your Every Need"}
            </h2>
            <h6>{lang === "az" ? "YALNIZ YAXŞI" : "ONLY THE BEST"}</h6>
            <p>
              {lang === "az"
                ? "Unudulmaz səyahətiniz üçün zəriflik və performans təklif edən yüksək səviyyəli avtomobil icarələrimizlə lüksü kəşf edin."
                : "Explore luxury with our high-end car rentals, offering elegance and performance for your unforgettable journey.."}
            </p>
            <div></div>
          </div>
        </div>
      </Col>
      <Col sm={12} md={6}>
        <img
          data-aos="fade-dawn"
          src="https://luxedrive.qodeinteractive.com/wp-content/uploads/2023/02/inner-ab-img-3.jpg"
          className="img-fluid"
          alt="..."
        ></img>
      </Col>
    </Row>
  );
}

export default About9