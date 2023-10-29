import React, { useContext } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Langcontext } from '../context/Langcontext';

const About7 = () => {
  const [lang, setLang] = useContext(Langcontext);
  return (
    <Container className="mt-5">
      <Row>
        <Col sm={12} md={2}></Col>
        <Col sm={12} md={10}>
          <div
            className="accordion"
            id="accordionExample"
            style={{ background: "none" }}
          >
            <div className="accordion-item mb-4">
              <h2 className="accordion-header">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  {lang === "az"
                    ? "Beynəlxalq Ziyarətçilərə İcarəyə Verirsiniz?"
                    : " Do You Rent To International Visitors?"}
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <p>
                    {lang === "az"
                      ? "Lüks avtomobil icarəsi xidmətlərimizlə səyahətinizi yüksəldin. Eleqant sedanlardan tutmuş yüksək performanslı idman avtomobillərinə qədər biz unudulmaz sürücülük təcrübəsi üçün eksklüziv park təklif edirik."
                      : "Elevate your journey with our luxury car rental services.From elegant sedans to high-performance sports cars, we offer an exclusive fleet for an unforgettable driving experience.?"}
                  </p>
                </div>
              </div>
            </div>

            <div className="accordion-item mb-4">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  {lang === "az"
                    ? "Sığortanız varmı?"
                    : "Do You Have Insurance?"}
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <p>
                    {lang === "az"
                      ? "Sığorta təminatınız varmı? Adekvat sığortaya malik olduğunuzu təmin etmək, müxtəlif həyat vəziyyətlərində aktivlərinizi və dincliyinizi qorumaq üçün çox vacibdir.?"
                      : "Do you possess insurance coverage? Ensuring you have adequate insurance is crucial for safeguarding your assets and peace of mind in various life situations."}
                  </p>
                </div>
              </div>
            </div>

            <div className="accordion-item mb-4">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  {lang === "az"
                    ? "Avtomobil İcarəyə Versəm Şoferi Seçə bilərəmmi?"
                    : "If I Rent A Vehicle Can I Choose The Chauffeur?"}
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <p>
                    {lang === "az"
                      ? "Avtomobil icarəyə götürərkən sürücünü seçə bilərəmmi? Sizin rahatlığınız və rahatlığınız üçün avtomobil icarəyə götürərkən şofer xidmətləri və onların mövcudluğu barədə məlumat almaq vacibdir."
                      : "When renting a vehicle, can I select the chauffeur? It's essential to inquire about chauffeur services and their availability when renting a vehicle for your convenience and peace of mind."}
                  </p>
                </div>
              </div>
            </div>

            <div className="accordion-item mb-4">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  {lang === "az"
                    ? "Sürücülərinizin Sertifikatı varmı?"
                    : "Do Your Drivers Have Certificates?"}
                </button>
              </h2>
              <div
                id="collapseFour"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <p>
                    {lang === "az"
                      ? "Sürücülərinizin etibarlı sertifikatları varmı? Sürücülərimizin sertifikatlı və təcrübəli olmasını təmin etmək sizin rahatlığınız üçün təhlükəsiz və peşəkar xidmətə zəmanət verən əsas prioritetdir."
                      : "Do your drivers possess valid certificates? Ensuring our drivers are certified and experienced is a top priority, guaranteeing safe and professional service for your peace of mind."}
                  </p>
                </div>
              </div>
            </div>

            <div className="accordion-item mb-4">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFive"
                  aria-expanded="false"
                  aria-controls="collapseFive"
                >
                  {lang === "az"
                    ? "Avtomobil icarəyə götürmək üçün neçə yaşında olmalısınız?"
                    : "How Old Do You Have To Be To Rent A Car?"}
                </button>
              </h2>
              <div
                id="collapseFive"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <p>
                    {lang === "az"
                      ? "Avtomobil kirayəsi üçün minimum yaş tələbi neçədir? Yaş kriteriyalarını bilmək avtomobil icarəyə götürməyi planlaşdırarkən vacibdir, çünki bu, icarə şirkəti və yerləşdiyi yerə görə dəyişir”."
                      : "What is the minimum age requirement for car rental? Knowing the age criteria is important when planning to rent a car, as it varies by rental company and location."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default About7