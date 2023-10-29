import React, { useContext } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { Langcontext } from '../context/Langcontext';

const Section7 = () => {
    const [lang, setLang] = useContext(Langcontext);
  return (
    <Container>
      <Row className="mt-5">
        <Col sm={12} md={6} className="d-flex align-items-center">
          <div className="section-7-info">
            <h2 className="section-7-title">
              {lang === "az"
                ? "Biz Sizin Təhlükəsizliyiniz və Rahatlığınızın Qayğıdayıq"
                : "We Care Of Your Safety And Convenience"}
            </h2>
            <h5 className="section-7-subtitle">
              {lang === "az" ? "PREMIUM SÜRÜCÜLƏR" : "PREMIUM DRIVERS"}
            </h5>
            <p className="section-7-text mt-3 mb-3">
              {lang === "az"
                ? "Bizim yüksək səviyyəli avtomobil icarəsi xidmətimizlə dəbdəbənin və incəliyin təcəssümünü yaşayın. Parlaq idman avtomobillərindən tutmuş prestijli sedanlara qədər səyahətinizi yüksəldin və yolda bəyanat verin."
                : " Experience the epitome of luxury and sophistication with our high-end car rental service. From sleek sports cars to prestigious sedans, elevate your journey and make a statement on the road."}
            </p>
            <Link to="/shop">
              <button className="section-7-button mt-5">
                {lang === "az" ? "+ İNDİ REZERVASYON EDİN" : "+ BOOK NOW"}
              </button>
            </Link>
          </div>
        </Col>
        <Col sm={12} md={6} className="mt-5">
          <div className="">
            <img
              src="https://luxedrive.qodeinteractive.com/wp-content/uploads/2023/01/h1-img-3.jpg"
              class="img-fluid mt-5 ms-2"
              style={{ width: "300px" }}
              alt="..."
            ></img>
            <img
              src="https://luxedrive.qodeinteractive.com/wp-content/uploads/2023/01/h1-img-4.jpg"
              class="img-fluid mt-5  ms-3"
              style={{ width: "300px" }}
              alt="..."
            ></img>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Section7