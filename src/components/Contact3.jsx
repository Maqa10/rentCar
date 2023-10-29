import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';

const Contact3 = () => {
  return (
    <Container>
      <Row>
        <Col sm={12} md={3}></Col>
        <Col sm={12} md={9}>
          <Row className="g-5" style={{ margin: 0 }}>
            <Col sm={12} md={6}>
              <div>
                <h2>Amesterdam</h2>
                <p className="section-5-info" style={{ fontWeight: "500" }}>
                  Schoonboomstraat 109, Nederland
                </p>
                <p className="section-5-info" style={{ fontWeight: "500" }}>
                  Office: +123 4567 8901
                </p>
                <p className="section-5-info" style={{ fontWeight: "500" }}>
                  Mon-Sat 9:00-23:00; Sunday closed
                </p>
              </div>
              <div>
                <h2>Milan</h2>
                <p className="section-5-info" style={{ fontWeight: "500" }}>
                  Via Sebastiano Caboto 2, Italy
                </p>
                <p className="section-5-info" style={{ fontWeight: "500" }}>
                  Office: +345 6789 0123
                </p>
                <p className="section-5-info" style={{ fontWeight: "500" }}>
                  Mon-Sat 9:00-23:00; Sunday closed
                </p>
              </div>
            </Col>
            <Col sm={12} md={6}>
              <div>
                <h2>London</h2>
                <p className="section-5-info" style={{ fontWeight: "500" }}>
                  9 Stockwell Park Rd, United Kingdom
                </p>
                <p className="section-5-info" style={{ fontWeight: "500" }}>
                  Office: +234 5678 9012
                </p>
                <p className="section-5-info" style={{ fontWeight: "500" }}>
                  Mon-Sat 9:00-23:00; Sunday closed
                </p>
              </div>
              <div>
                <h2>Barcelona</h2>
                <p className="section-5-info" style={{ fontWeight: "500" }}>
                  C. del Consell de Cent 549, Spain
                </p>
                <p className="section-5-info" style={{ fontWeight: "500" }}>
                  Office: +456 7890 1234
                </p>
                <p className="section-5-info" style={{ fontWeight: "500" }}>
                  Mon-Sat 9:00-23:00; Sunday closed
                </p>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact3