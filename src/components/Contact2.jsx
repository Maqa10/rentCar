import React, { useContext } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { Langcontext } from '../context/Langcontext';

const Contact2 = () => {
    const [lang, setLang] = useContext(Langcontext);
  return (
        <Container className="mt-5">
      <Row style={{ borderBottom: "1px solid white" }}>
        <Col sm={12} md={4}>
          <h2 className="section-4-title">
            {lang === "az"
              ? "Məqsədlərə Maksimum Rahatlıqla Sürün"
              : "Ride To Destinations With Maximum Comfort"}
          </h2>
          <p className="section-4-info">
            {lang === "az" ? "ƏN YAXŞI NƏQLİYYAT" : "FINEST TRANSPORT"}
          </p>
        </Col>
        <Col sm={12} md={8}></Col>
      </Row>
    </Container>
  )
}

export default Contact2