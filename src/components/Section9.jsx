import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Section9 = () => {
  return (
    <Container>
      <Row className="mt-5">
        <Col sm={12} md={3}></Col>
        <Col sm={12} md={9}>
          <Row className="section-9-cards">
            <div className="card" style={{ width: "19rem" }}>
              <img
                src="https://luxedrive.qodeinteractive.com/wp-content/uploads/2023/01/h1-team-img-1.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Marco Watkivi</h5>
                <p className="card-text">
                  <span>
                    <i class="fa-solid fa-phone"></i>
                  </span>
                  +1234 5678 901
                </p>
              </div>
            </div>
            <div className="card" style={{ width: "19rem" }}>
              <img
                src="	https://luxedrive.qodeinteractive.com/wp-content/uploads/2023/01/h1-team-img-2.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title"> Marily Sulli</h5>
                <p className="card-text">
                  <span>
                    <i class="fa-solid fa-phone"></i>
                  </span>
                  +2345 6789 012
                </p>
              </div>
            </div>
            <div className="card" style={{ width: "19rem" }}>
              <img
                src="	https://luxedrive.qodeinteractive.com/wp-content/uploads/2023/01/h1-team-img-3.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title"> Zakary Tapun</h5>
                <p className="card-text">
                  <span>
                    <i class="fa-solid fa-phone"></i>
                  </span>
                  +3456 7890 123
                </p>
              </div>
            </div>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Section9