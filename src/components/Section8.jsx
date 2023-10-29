import React, { useContext } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { Langcontext } from '../context/Langcontext';

const Section8 = () => {
    const [lang, setLang] = useContext(Langcontext);
  return (
    <Container className="mt-5">
      <Row style={{ borderBottom: "1px solid white" }}>
        <Col sm={12} md={5}>
          <h2 className="section-4-title">
            {lang === "az"
              ? "Peşəkar Şoferlərimiz"
              : "Our Proffesional Chauffeurs"}
          </h2>
          <p className="section-4-info">
            {lang === "az" ? "KOMANDALARIMIZLA TANIS EDIN" : " MEET OUR TEAM"}
          </p>
        </Col>
        <Col sm={12} md={7}></Col>
      </Row>
    </Container>
  );
}

export default Section8