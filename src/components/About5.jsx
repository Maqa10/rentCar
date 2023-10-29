import React, { useContext } from 'react'
import { Col, Row } from 'react-bootstrap'
import { Langcontext } from '../context/Langcontext';

const About5 = () => {
  const [lang, setLang] = useContext(Langcontext);
  return (
    <Row className="about-5 mt-5 mb-5">
      <Col sm={12} md={6}>
        <img
          src="https://luxedrive.qodeinteractive.com/wp-content/uploads/2023/02/inner-ab-img-2.jpg"
          className="img-fluid"
          alt="..."
        ></img>
      </Col>
      <Col sm={12} md={6}>
        <div className="about5-right ms-5 d-flex align-items-center">
          <div>
            <h2>
              {lang === "az"
                ? "Biz Sizin Təhlükəsizliyinizlə və"
                : "We Care About Your"}
              <br />{" "}
              {lang === "az"
                ? "Rahatlığınızınla maraglaniriq"
                : "Comfort And Safety"}
            </h2>
            <h6>{lang === "az" ? "ƏN YAXŞI SÜRÜCÜLƏR" : "BEST DRIVERS"}</h6>
            <p>
              {lang === "az"
                ? "Yüksək səviyyəli avtomobillərdən ibarət elit parkımızı icarəyə götürməklə misilsiz dəbdəbəni yaşayın. İstər zərif idman avtomobili, istərsə də prestijli sedan olsun, bizim premium avtomobil icarəsi xidmətlərimizlə səyahətinizi yüksəldin."
                : " Experience unparalleled luxury by renting our elite fleet of high-end vehicles. Whether it's a sleek sports car or a prestigious sedan, elevate your travel with our premium car rental services."}
            </p>
          </div>
        </div>
      </Col>
    </Row>
  );
}

export default About5