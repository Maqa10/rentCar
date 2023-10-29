import React, { useContext } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Langcontext } from '../context/Langcontext';

const Section3 = () => {
     const [lang, setLang] = useContext(Langcontext);
  return (
    <Container className="mt-5">
      <Row className="Cars-cards g-5 " style={{ margin: 0 }}>
        <Col sm={12} md={4} className="d-flex">
          <div className="card" style={{ width: "25rem" }}>
            <div className="card-img">
              <img
                src="	https://luxedrive.qodeinteractive.com/wp-content/uploads/2023/02/Main-home-vehicle-list-img-01.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-hover">
                <h3>4 x 4</h3>
                <p className="price-info">
                  <span className="from">
                    {lang === "az" ? "-dan" : "from"}
                  </span>
                  <span className="price">$180/</span>
                  <span className="hour">
                    {lang === "az" ? "-saatda" : " hour"}
                  </span>
                </p>
                <p className="car-info">
                  {lang === "az"
                    ? "Unudulmaz səyahət üçün premium avtomobil icarəmizlə dəbdəbəni yaşayın."
                    : "Experience luxury with our premium car rentals for an unforgettable journey."}
                </p>
              </div>
            </div>
            <div className="card-body">
              <h5 className="card-title">Mercedes G Class Brabus</h5>
              <p className="card-text">
                <span>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </span>
              </p>
            </div>
          </div>
        </Col>
        <Col sm={12} md={4} className="d-flex">
          <div className="card" style={{ width: "25rem" }}>
            <div className="card-img">
              <img
                src="https://luxedrive.qodeinteractive.com/wp-content/uploads/2023/02/Main-home-vehicle-list-img-02.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-hover">
                <h3>4 x 4</h3>
                <p className="price-info">
                  <span className="from">
                    {lang === "az" ? "-dan" : "from"}
                  </span>
                  <span className="price">$180/</span>
                  <span className="hour">
                    {" "}
                    {lang === "az" ? "-saatda" : " hour"}
                  </span>
                </p>
                <p className="car-info">
                  {lang === "az"
                    ? "Unudulmaz səyahət üçün premium avtomobil icarəmizlə dəbdəbəni yaşayın."
                    : "Experience luxury with our premium car rentals for an unforgettable journey."}
                </p>
              </div>
            </div>
            <div className="card-body">
              {/* <div className="card-hover">
                <h3>4 x 4</h3>
                <p className="price-info">
                  <span className="from">from</span>{" "}
                  <span className="price">$180/</span>
                  <span className="hour">hour</span>
                </p>
                <p className="car-info">
                  Experience luxury with our premium car rentals for an
                  unforgettable journey.
                </p>
              </div> */}
              <h5 className="card-title">Aston Martin DB11 AMR</h5>
              <p className="card-text">
                <span>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </span>
              </p>
            </div>
          </div>
        </Col>
        <Col sm={12} md={4} className="d-flex">
          <div className="card" style={{ width: "25rem" }}>
            <div className="card-img">
              <img
                src="	https://luxedrive.qodeinteractive.com/wp-content/uploads/2023/02/Main-home-vehicle-list-img-04.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-hover">
                <h3>4 x 4</h3>
                <p className="price-info">
                  <span className="from">
                    {lang === "az" ? "-dan" : "from"}
                  </span>
                  <span className="price">$180/</span>
                  <span className="hour">
                    {" "}
                    {lang === "az" ? "-saatda" : " hour"}
                  </span>
                </p>
                <p className="car-info">
                  {lang === "az"
                    ? "Unudulmaz səyahət üçün premium avtomobil icarəmizlə dəbdəbəni yaşayın."
                    : "Experience luxury with our premium car rentals for an unforgettable journey."}
                </p>
              </div>
            </div>
            <div className="card-body">
              {/* <div className="card-hover">
                <h3>4 x 4</h3>
                <p className="price-info">
                  <span className="from">from</span>{" "}
                  <span className="price">$180/</span>
                  <span className="hour">hour</span>
                </p>
                <p className="car-info">
                  Experience luxury with our premium car rentals for an
                  unforgettable journey.
                </p>
              </div> */}
              <h5 className="card-title">Rolls-Royce Phantom</h5>
              <p className="card-text">
                <span>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </span>
              </p>
            </div>
          </div>
        </Col>
        <Col sm={12} md={4} className="d-flex">
          <div className="card" style={{ width: "25rem" }}>
            <div className="card-img">
              <img
                src="https://luxedrive.qodeinteractive.com/wp-content/uploads/2023/02/Main-home-vehicle-list-img-03.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-hover">
                <h3>4 x 4</h3>
                <p className="price-info">
                  <span className="from">from</span>
                  <span className="price">$180/</span>
                  <span className="hour">hour</span>
                </p>
                <p className="car-info">
                  Experience luxury with our premium car rentals for an
                  unforgettable journey.
                </p>
              </div>
            </div>
            <div className="card-body">
              {/* <div className="card-hover">
                <h3>4 x 4</h3>
                <p className="price-info">
                  <span className="from">from</span>{" "}
                  <span className="price">$180/</span>
                  <span className="hour">hour</span>
                </p>
                <p className="car-info">
                  Experience luxury with our premium car rentals for an
                  unforgettable journey.
                </p>
              </div> */}
              <h5 className="card-title">Bmw X2 M35i DriveX</h5>
              <p className="card-text">
                <span>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </span>
              </p>
            </div>
          </div>
        </Col>
        <Col sm={12} md={4} className="d-flex">
          <div className="card" style={{ width: "25rem" }}>
            <div className="card-img">
              <img
                src="	https://luxedrive.qodeinteractive.com/wp-content/uploads/2023/02/Main-home-vehicle-list-img-05.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-hover">
                <h3>4 x 4</h3>
                <p className="price-info">
                  <span className="from">
                    {lang === "az" ? "-dan" : "from"}
                  </span>
                  <span className="price">$180/</span>
                  <span className="hour">
                    {" "}
                    {lang === "az" ? "-saatda" : " hour"}
                  </span>
                </p>
                <p className="car-info">
                  {lang === "az"
                    ? "Unudulmaz səyahət üçün premium avtomobil icarəmizlə dəbdəbəni yaşayın."
                    : "Experience luxury with our premium car rentals for an unforgettable journey."}
                </p>
              </div>
            </div>
            <div className="card-body">
              {/* <div className="card-hover">
                <h3>4 x 4</h3>
                <p className="price-info">
                  <span className="from">from</span>{" "}
                  <span className="price">$180/</span>
                  <span className="hour">hour</span>
                </p>
                <p className="car-info">
                  Experience luxury with our premium car rentals for an
                  unforgettable journey.
                </p>
              </div> */}
              <h5 className="card-title">Mercedes G Class</h5>
              <p className="card-text">
                <span>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </span>
              </p>
            </div>
          </div>
        </Col>
        <Col sm={12} md={4} className="d-flex">
          <div className="card" style={{ width: "25rem" }}>
            <div className="card-img">
              <img
                src="	https://luxedrive.qodeinteractive.com/wp-content/uploads/2023/02/Main-home-vehicle-list-img-06.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-hover">
                <h3>4 x 4</h3>
                <p className="price-info">
                  <span className="from">
                    {lang === "az" ? "-dan" : "from"}
                  </span>
                  <span className="price">$180/</span>
                  <span className="hour">
                    {" "}
                    {lang === "az" ? "-saatda" : " hour"}
                  </span>
                </p>
                <p className="car-info">
                  {lang === "az"
                    ? "Unudulmaz səyahət üçün premium avtomobil icarəmizlə dəbdəbəni yaşayın."
                    : "Experience luxury with our premium car rentals for an unforgettable journey."}
                </p>
              </div>
            </div>
            <div className="card-body">
              {/* <div className="card-hover">
                <h3>4 x 4</h3>
                <p className="price-info">
                  <span className="from">from</span>{" "}
                  <span className="price">$180/</span>
                  <span className="hour">hour</span>
                </p>
                <p className="car-info">
                  Experience luxury with our premium car rentals for an
                  unforgettable journey.
                </p>
              </div> */}
              <h5 className="card-title">Ford Raptor 135 X</h5>
              <p className="card-text">
                <span>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </span>
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Section3