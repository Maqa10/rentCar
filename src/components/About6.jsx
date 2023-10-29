import React, { useContext } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { Langcontext } from '../context/Langcontext';

const About6 = () => {
    const [lang, setLang] = useContext(Langcontext);
  return (
    <Container>
      <Row style={{ borderBottom: "1px solid white" }}>
        <Col sm={12} md={12}>
          <h2 className="section-4-title">
            {lang === "az"
              ? "Tez-tez soruşulan suallar"
              : "Frequently Asked Questions"}
          </h2>
          <p className="section-4-info">
            {lang === "az" ? "CAVABLARIN SİYAHISI" : "LIST OF ANSWERS"}
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default About6