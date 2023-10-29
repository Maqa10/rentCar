import React, { useContext } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Langcontext } from '../context/Langcontext';

const Section5 = () => {
  const [lang, setLang] = useContext(Langcontext);
  return (
    <Container>
      <Row>
        <Col sm={12} md={3}></Col>
        <Col sm={12} md={9}>
          <Row className="g-5" style={{ margin: 0 }}>
            <Col sm={12} md={6}>
              <div>
                <h2>{lang === "az" ? "Gecikmə yoxdur" : "No Delays"}</h2>
                <p className="section-5-info">
                  {lang === "az"
                    ? "İcarəyə verilə bilən yüksək səviyyəli dəbdəbəli avtomobillərin eksklüziv seçimi ilə zənginlikdən zövq alın və səyahətlərinizi yüksəldin. Bu gün dəbdəbəni sərbəst buraxın!"
                    : "Indulge in opulence and elevate your travels with our exclusive selection of high-end luxury cars available for rent. Unleash luxury today!"}
                </p>
              </div>
              <div>
                <h2>{lang === "az" ? "Yüksək keyfiyyət" : " High Quality"}</h2>
                <p className="section-5-info">
                  {lang === "az"
                    ? "İcarəyə verilə bilən yüksək səviyyəli dəbdəbəli avtomobillərin eksklüziv seçimi ilə zənginlikdən zövq alın və səyahətlərinizi yüksəldin. Bu gün dəbdəbəni sərbəst buraxın!"
                    : "  Indulge in opulence and elevate your travels with our exclusive selection of high-end luxury cars available for rent. Unleash luxury today!"}
                </p>
              </div>
            </Col>
            <Col sm={12} md={6}>
              <div>
                <h2>{lang === "az" ? "Premium Dəstək" : "Premium Support"}</h2>
                <p className="section-5-info">
                  {lang === "az"
                    ? "İcarəyə verilə bilən yüksək səviyyəli dəbdəbəli avtomobillərin eksklüziv seçimi ilə zənginlikdən zövq alın və səyahətlərinizi yüksəldin. Bu gün dəbdəbəni sərbəst buraxın!"
                    : "  Indulge in opulence and elevate your travels with our exclusive selection of high-end luxury cars available for rent. Unleash luxury today!"}
                </p>
              </div>
              <div>
                <h2>
                  {lang === "az" ? "Müxtəlif Seçim" : "A Diverse Selection"}
                </h2>
                <p className="section-5-info">
                  {lang === "az"
                    ? "İcarəyə verilə bilən yüksək səviyyəli dəbdəbəli avtomobillərin eksklüziv seçimi ilə zənginlikdən zövq alın və səyahətlərinizi yüksəldin. Bu gün dəbdəbəni sərbəst buraxın!"
                    : "  Indulge in opulence and elevate your travels with our exclusive selection of high-end luxury cars available for rent. Unleash luxury today!"}
                </p>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
export default Section5