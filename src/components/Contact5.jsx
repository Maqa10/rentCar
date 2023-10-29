import React, { useContext, useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Aos from 'aos';
import "aos/dist/aos.css"
import { Langcontext } from '../context/Langcontext';


const Contact5 = () => {
  const [lang, setLang] = useContext(Langcontext);
    useEffect(()=>{
        Aos.init({duration:2000})
    },[])
  return (
    <Container className="mt-5 mb-5">
      <Row className="mt-5">
        <Col sm={12} md={6} className="mt-5">
          <div className="">
            <img
              data-aos="fade-down"
              src="https://luxedrive.qodeinteractive.com/wp-content/uploads/2023/01/h1-img-6.jpg"
              class="img-fluid mt-5 ms-2"
              style={{ width: "300px" }}
              alt="..."
            ></img>
            <img
              data-aos="fade-down"
              src="	https://luxedrive.qodeinteractive.com/wp-content/uploads/2023/01/h1-img-7.jpg"
              class="img-fluid mt-5  ms-3"
              style={{ width: "300px" }}
              alt="..."
            ></img>
          </div>
        </Col>
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
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact5