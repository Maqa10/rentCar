import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import Aos from 'aos';
import "aos/dist/aos.css"

const About8 = () => {
    useEffect(()=>{
        Aos.init({duration:2000})
    },[])
  return (
    <Row className="about-8">
      <Col sm={12} md={6} style={{ padding: 0 }}>
        <img
          src="https://luxedrive.qodeinteractive.com/wp-content/uploads/2023/02/inner-faq-img-1.2.jpg"
          className="img-fluid"
          alt="..."
          data-aos="fade-up"
        ></img>
      </Col>
      <Col sm={12} md={6} style={{ padding: 0 }}>
        <img
          style={{ width: "300px" }}
          src="https://luxedrive.qodeinteractive.com/wp-content/uploads/2023/02/inner-faq-img-2.jpg"
          className="img-fluid ms-3 mt-4 "
          alt="..."
          data-aos="fade-down"
        ></img>
        <img
          style={{ width: "300px" }}
          src="	https://luxedrive.qodeinteractive.com/wp-content/uploads/2023/02/inner-faq-img-3.jpg"
          className="img-fluid ms-3 mt-4"
          alt="..."
          data-aos="fade-down"
        ></img>
      </Col>
    </Row>
  );
}

export default About8