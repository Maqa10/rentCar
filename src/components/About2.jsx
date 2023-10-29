import React, { useContext } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { Langcontext } from '../context/Langcontext';

const About2 = () => {
    const [lang, setLang] = useContext(Langcontext);
  return (
    <Container className="mt-5">
      <Row style={{ borderBottom: "1px solid white" }}>
        <Col sm={12} md={6}>
          <h2 className="section-4-title">
            {lang === "az"
              ? "Biz Müştərilərimizi Dəyərləyirik və Onların Gözəl Təcrübə Olmasını İstəyirik"
              : "We Value Our Clients And Want Them To Have A Nice Experience"}
          </h2>
          <p className="section-4-info">
            {" "}
            {lang === "az" ? "ƏN YAXŞI NƏQLİYYAT" : "FINEST TRANSPORT"}
          </p>
        </Col>
        <Col sm={12} md={6}></Col>
      </Row>
    </Container>
  );
}

export default About2