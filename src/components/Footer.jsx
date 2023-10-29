import React, { useContext } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { Langcontext } from '../context/Langcontext';

const Footer = () => {
  const [lang, setLang] = useContext(Langcontext);
  return (
    <Container className="mt-5 ">
      <Row>
        <Col className="footer" sm={12} md={6}>
          <div className="card">
            <div className="card-body">
              <h2 className="card-title mb-3">
                {lang === "az" ? "LUXEDRIVE" : "LUXEDRIVE"}
              </h2>
              <p className="card-text">
                {lang === "az"
                  ? "Yüksək səviyyəli avtomobil icarəsi xidmətlərimizlə yolda zənginliyi hiss edin. Unudulmaz səyahət üçün bir sıra lüks avtomobillərdən seçin.!"
                  : "Experience opulence on the road with our high-end car rental services. Choose from a range of luxury vehicles for a memorable journey.!"}
              </p>
              <p className="tel">
                {lang === "az"
                  ? "ÇAĞRI MƏRKƏZİ: +1234 5678 901"
                  : "CALL CENTER: +1234 5678 901"}
              </p>
            </div>
          </div>
        </Col>
        <Col sm={12} md={6}>
          <Row>
            <Col sm={12} md={6}>
              <div className="footer-info-3">
                <h2 className="mb-3 mt-3">
                  {lang === "az" ? "Sürətli bağlantılar" : "Quick links"}
                </h2>
                <p>{lang === "az" ? "BİZ NECƏ" : "HOW WE"}</p>
                <p>{lang === "az" ? "İŞ FAQ" : "WORK FAQ"}</p>
                <p>{lang === "az" ? "XİDMƏTLƏR" : "SERVICES"}</p>
                <p>{lang === "az" ? "ƏLAQƏ" : "CONTACT"}</p>
              </div>
            </Col>
            <Col sm={12} md={6}>
              <div className="footer-info-4">
                <h2 className="mb-3 mt-3">
                  {lang === "az" ? "BİZİM XİDMƏTLƏR" : "OUR SERVICES"}
                </h2>
                <p>
                  {lang === "az"
                    ? "KORPORATİV Səyahətlər"
                    : "CORPORATE TRAVELS"}
                </p>
                <p>{lang === "az" ? "XÜSUSİ TƏDBİRLƏR" : "SPECIAL EVENTS"}</p>
                <p>
                  {lang === "az" ? "Aeroport NƏQLİYYATI" : "AIRPORT TRANSPORT"}
                </p>
                <p>{lang === "az" ? "TOY LİMUZİNİ" : "WEDDING LIMOUSINE"}</p>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer