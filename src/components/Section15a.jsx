import React, { useContext } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { Langcontext } from '../context/Langcontext';

const Section15a = () => {
    const [lang, setLang] = useContext(Langcontext);
  return (
    <Container>
      <Row className="mt-5 mb-5" style={{ margin: 0 }}>
        <Col sm={12} md={4}>
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-15-content d-flex">
              <div className="card-img">
                <img
                  src="https://luxedrive.qodeinteractive.com/wp-content/uploads/2023/02/content-bottom-icon-001.png"
                  alt=""
                />
              </div>
              <div className="card-info">
                <p>
                  11 Rue de la Mutualité, <br /> 92400 Paris
                </p>
              </div>
            </div>
          </div>
        </Col>
        <Col sm={12} md={4}>
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-15-content d-flex">
              <div className="card-img">
                <img
                  src="https://luxedrive.qodeinteractive.com/wp-content/uploads/2023/02/h1-icon-img-1.2.png"
                  alt=""
                />
              </div>
              <div className="card-info">
                <p className="card-info-tel">
                  {lang === "az"
                    ? "Telefon: (012) 345 6789 0123;"
                    : " Phone: (012) 345 6789 0123;"}
                </p>
                <p className="card-info-email">Email: luxe@example.com</p>
              </div>
            </div>
          </div>
        </Col>
        <Col sm={12} md={4}>
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-15-content d-flex">
              <div className="card-img">
                <img
                  src="https://luxedrive.qodeinteractive.com/wp-content/uploads/2023/02/content-bottom-icon-003.png"
                  alt=""
                />
              </div>
              <div className="card-info">
                <p className="card-info-tel">Mon-Sat 09:00-23:00;</p>
                <p className="card-info-email">
                  {lang === "az"
                    ? "bazar günü bağlıdır.;"
                    : "Sunday is closed."}
                </p>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Section15a