import React, { useContext } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { Langcontext } from '../context/Langcontext';

const About3 = () => {
   const [lang, setLang] = useContext(Langcontext);
  return (
    <Container>
      <Row>
        <Col sm={12} md={3}></Col>
        <Col sm={12} md={9}>
          <Row className="g-5" style={{ margin: 0 }}>
            <Col sm={12} md={6}>
              <div>
                <h2>
                  {lang === "az" ? "Təmiz və Rahat" : "Clean & Comfortable"}
                </h2>
                <p className="section-5-info">
                  {lang === "az"
                    ? "Premium avtomobil icarəmizlə səyahətinizi yüksəldin. Lüks sedanlardan tutmuş ekzotik idman avtomobillərinə qədər biz müstəsna sürücülük təcrübəsi təklif edirik."
                    : "Elevate your journey with our premium car rentals. From luxury sedans to exotic sports cars, we offer an exceptional driving experience."}
                </p>
              </div>
              <div>
                <h2>
                  {lang === "az"
                    ? "Ən yaxşı qiymətə zəmanət verilir"
                    : "Best Price Is Assured"}
                </h2>
                <p className="section-5-info">
                  {lang === "az"
                    ? "Yüksək səviyyəli avtomobil icarəsi xidmətlərimizlə yolda zənginliyi hiss edin. Unudulmaz səyahət üçün bir sıra lüks avtomobillərdən seçin.!"
                    : "Experience opulence on the road with our high-end car rental services. Choose from a range of luxury vehicles for a memorable journey.!"}
                </p>
              </div>
            </Col>
            <Col sm={12} md={6}>
              <div>
                <h2>
                  {lang === "az"
                    ? "Rahat Avtomobil Nəqliyyatı"
                    : "Smooth Car Transport"}
                </h2>
                <p className="section-5-info">
                  {lang === "az"
                    ? "Eksklüziv avtomobil icarəsi seçimlərimizlə dəbdəbədən zövq alın. Zərif sedanlardan güclü idman avtomobillərinə qədər səyahət təcrübənizi yüksəldin.!"
                    : "Indulge in luxury with our exclusive car rental options. From elegant sedans to powerful sports cars, elevate your travel experience."}
                </p>
              </div>
              <div>
                <h2>
                  {lang === "az" ? "Müxtəlif Seçim" : "Diverse Selection"}
                </h2>
                <p className="section-5-info">
                  {lang === "az"
                    ? "Premium avtomobil icarəsi xidmətlərimizlə dəbdəbəli sürücülüyün zirvəsini kəşf edin. Səyahətiniz üçün yüksək səviyyəli avtomobillər parkından seçin."
                    : " Discover the pinnacle of driving luxury with our premium car rental services. Choose from a fleet of high-end vehicles for your journey."}
                </p>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default About3