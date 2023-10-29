import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Col, Container } from "react-bootstrap";
import CardComponent from "./CardComponent"; 
import { Langcontext } from "../context/Langcontext";

const Test = () => {
    const [lang, setLang] = useContext(Langcontext);
  return (
    <Container className="section-12-swiper">
      <Col sm={12}>
        <Swiper
          slidesPerView={3}
          spaceBetween={60}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay, Navigation]}
          className="mySwiper"
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
        >
          <SwiperSlide>
            <CardComponent
              title="Best Price Assured"
              rating={2}
              description="Indulge in opulence with our exclusive luxury car rentals for an unforgettable driving experience like no other"
              footer="Madison Edwar , NEW YORK"
            />
          </SwiperSlide>
          <SwiperSlide>
            <div className="card" style={{ width: "18rem" }}>
              <div className="card-body">
                <h5 className="card-title">
                  {lang === "az" ? "Təmiz və Rahat" : "Clean & Comfortable"}
                </h5>
                <div className="card-icons-12">
                  <i class="full fa-solid fa-star"></i>
                  <i class="full fa-solid fa-star"></i>
                  <i class="full fa-solid fa-star"></i>
                  <i class="full fa-solid fa-star"></i>
                  <i class="empty fa-regular fa-star"></i>
                </div>
                <p className="card-text">
                  {lang === "az"
                    ? "Elitelüks avtomobil icarəsi xidmətimizlə avtomobil mükəmməlliyinin zirvəsini kəşf edin. Prestijli sedanlardan tutmuş güclü idman avtomobillərinə qədər səyahətinizi yüksəldin və heç vaxt olmadığı kimi açıq yolun həyəcanını yaşayın."
                    : "Discover the pinnacle of automotive excellence with our eliteluxury car rental service. From prestigious sedans to powerful sports cars, elevate your journey and experience the thrill of the open road like never before."}
                </p>
                <p className="card-footer">
                  {lang === "az"
                    ? "GLORIA FOLSE, ÇİÇAQO"
                    : "GLORIA FOLSE , CHICHAGO"}
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card" style={{ width: "18rem" }}>
              <div className="card-body">
                <h5 className="card-title">
                  {lang === "az"
                    ? "Rahat Avtomobil Nəqliyyatı"
                    : " Smooth Car Transport"}
                </h5>
                <div className="card-icons-12">
                  <i class="full fa-solid fa-star"></i>
                  <i class="full fa-solid fa-star"></i>
                  <i class="full fa-solid fa-star"></i>
                  <i class="empty fa-regular fa-star"></i>
                  <i class="empty fa-regular fa-star"></i>
                </div>
                <p className="card-text">
                  {lang === "az"
                    ? "Bizim yüksək səviyyəli avtomobil icarəsi seçimlərimizlə dəbdəbəli macəraya çıxın. Zərif sedanlardan ekzotik idman avtomobillərinə qədər, səyahət təcrübənizi yüksəltmək üçün ən yaxşı avtomobilləri təklif edirik."
                    : "Embark on a luxurious adventure with our high-end car rental options. From elegant sedans to exotic sports cars, we offer the finest vehicles to elevate your travel experience"}
                </p>
                <p className="card-footer">
                  {lang === "az"
                    ? "ELOIN MALONE, AUBURN"
                    : " ELOIN MALONE, AUBURN"}
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <CardComponent
              title="Best Price Assured"
              rating={2}
              description="Indulge in opulence with our exclusive luxury car rentals for an unforgettable driving experience like no other"
              footer="Madison Edwar , NEW YORK"
            />
          </SwiperSlide>
          <SwiperSlide>
            <div className="card" style={{ width: "18rem" }}>
              <div className="card-body">
                <h5 className="card-title">
                  {" "}
                  {lang === "az" ? "Təmiz və Rahat" : "Clean & Comfortable"}
                </h5>
                <div className="card-icons-12">
                  <i class="full fa-solid fa-star"></i>
                  <i class="full fa-solid fa-star"></i>
                  <i class="full fa-solid fa-star"></i>
                  <i class="full fa-solid fa-star"></i>
                  <i class="empty fa-regular fa-star"></i>
                </div>
                <p className="card-text">
                  {lang === "az"
                    ? "Elitelüks avtomobil icarəsi xidmətimizlə avtomobil mükəmməlliyinin zirvəsini kəşf edin. Prestijli sedanlardan tutmuş güclü idman avtomobillərinə qədər səyahətinizi yüksəldin və heç vaxt olmadığı kimi açıq yolun həyəcanını yaşayın."
                    : "Discover the pinnacle of automotive excellence with our eliteluxury car rental service. From prestigious sedans to powerful sports cars, elevate your journey and experience the thrill of the open road like never before."}
                </p>
                <p className="card-footer">
                  {lang === "az"
                    ? "GLORIA FOLSE, ÇİÇAQO"
                    : "GLORIA FOLSE , CHICHAGO"}
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </Col>
    </Container>
  );
};

export default Test;
