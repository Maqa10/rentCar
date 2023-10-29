import React, { useContext } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { Langcontext } from '../context/Langcontext';

const Section10 = () => {
    const [lang, setLang] = useContext(Langcontext);
  return (
    <Container>
      <Row className="mt-5">
        <Col sm={12} md={7} className="mt-5">
          <div className="">
            <img
              src="	https://luxedrive.qodeinteractive.com/wp-content/uploads/2023/01/h1-img-6.jpg"
              class="img-fluid mt-5 ms-2"
              style={{ width: "300px" }}
              alt="..."
            ></img>
            <img
              src="	https://luxedrive.qodeinteractive.com/wp-content/uploads/2023/01/h1-img-7.jpg"
              class="img-fluid mt-5  ms-3"
              style={{ width: "300px" }}
              alt="..."
            ></img>
          </div>
        </Col>
        <Col sm={12} md={5} className="d-flex align-items-center">
          <div className="section-10-info">
            <h2 className="section-10-title">
              {lang === "az"
                ? "Premium Avtomobil İcarəsi"
                : "Premium Cars Rental"}
            </h2>
            <h5 className="section-10-subtitle">
              {lang === "az" ? "YALNIZ YAXŞI" : "ONLY THE BEST"}
            </h5>
            <p className="section-10-text mt-3 mb-3">
              {lang === "az"
                ? "Aslan və ya saçaqlı elementlər asanlaşdırılır."
                : "Praesent elementum facilisis leo vel fringilla est. Vest bulum lectus a urise ultrices eros in cursus turpi uto."}
            </p>
            <Row>
              <h2 style={{ fontSize: "100px" }}>
                21<sup>+</sup>
              </h2>
              <p className="section-10-text">
                {lang === "az" ? "İllərin təcrübəsi" : "Years of experience"}
              </p>
              <h2 style={{ fontSize: "100px" }}>
                157<span>k</span>
              </h2>
              <p className="section-10-text">
                {lang === "az" ? "Məmnun müştərilər" : " Satisfied clients"}
              </p>
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Section10