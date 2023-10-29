import React, { useContext } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Langcontext } from '../context/Langcontext';

const Section2 = () => {
   const [lang, setLang] = useContext(Langcontext);
  return (
    <Container>
      <Row className=" g-5" style={{ margin: 0 }}>
        <Col sm={12} md={6}>
          <div className="left">
            <p className="left-title">
              {lang === "az"
                ? "Təqdim etdiyimiz Lüks Nəqliyyat və Ən Rahat Təcrübədir"
                : "What We Provide Is The Luxury Transport And Most Comfortable Experience"}
            </p>
          </div>
        </Col>
        <Col sm={12} md={6}>
          <div className="right">
            <p>
              {lang === "az"
                ? "Lüks avtomobil icarəsi xidmətlərimizlə avtomobil mükəmməlliyinin zirvəsini yaşayın. Yüksək səviyyəli avtomobillərin incə kolleksiyamızdan seçdiyiniz kimi dünyanı üslub və rahatlıqla kəşf edin. İstər zərif idman avtomobili, istər dəbdəbəli sedan və ya güclü SUV olsun, bizim premium avtomobil icarəsi ilə səyahətinizi yüksəldin."
                : "Experience the pinnacle of automotive excellence with our luxury car rental services. Explore the world in style and comfort as you choose from our exquisite collection of high-end vehicles. Whether  it's a sleek sports car, a luxurious sedan, or a powerful SUV, elevate your journey with our premium car rentals"}
            </p>
            <img
              className="right-img me-3"
              src="https://luxedrive.qodeinteractive.com/wp-content/uploads/2023/02/h1-icon-img-1.2.png"
              alt=""
            />
            <span className="right-tel">
              {lang === "az"
                ? "ÇAĞRI MƏRKƏZİ: +1234 5678 901"
                : "CALL CENTER: +1234 5678 901"}
            </span>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Section2