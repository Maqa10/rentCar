import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Col, Container } from 'react-bootstrap';

const Section12a = () => {
  return (
    <Container className="section-12-swiper">
      <Col sm={12}>
        <Swiper
          slidesPerView={3}
          spaceBetween={60}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 3,
              // spaceBetween:20,
            },
          }}
          modules={[Pagination, Autoplay, Navigation]}
          className="mySwiper"
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
        >
          <SwiperSlide>
            <div className="card" style={{ width: "18rem" }}>
              <div className="card-body">
                <h5 className="card-title">Best Price Assured </h5>
                <div className="card-icons-12">
                  <i class="full fa-solid fa-star"></i>
                  <i class="full fa-solid fa-star"></i>
                  <i class="empty fa-regular fa-star"></i>
                  <i class="empty fa-regular fa-star"></i>
                  <i class="empty fa-regular fa-star"></i>
                </div>
                <p className="card-text">
                  Indulge in opulence with our exclusive luxury car rentals for
                  an unforgettable driving experience like no other
                </p>
                <p className="card-footer">Madison Edwar , NEW YORK</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card" style={{ width: "18rem" }}>
              <div className="card-body">
                <h5 className="card-title">Clean & Comfortable </h5>
                <div className="card-icons-12">
                  <i class="full fa-solid fa-star"></i>
                  <i class="full fa-solid fa-star"></i>
                  <i class="full fa-solid fa-star"></i>
                  <i class="full fa-solid fa-star"></i>
                  <i class="empty fa-regular fa-star"></i>
                </div>
                <p className="card-text">
                  Discover the pinnacle of automotive excellence with our elite
                  luxury car rental service. From prestigious sedans to powerful
                  sports cars, elevate your journey and experience the thrill of
                  the open road like never before.
                </p>
                <p className="card-footer">GLORIA FOLSE , CHICHAGO </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card" style={{ width: "18rem" }}>
              <div className="card-body">
                <h5 className="card-title">Smooth Car Transport</h5>
                <div className="card-icons-12">
                  <i class="full fa-solid fa-star"></i>
                  <i class="full fa-solid fa-star"></i>
                  <i class="full fa-solid fa-star"></i>
                  <i class="empty fa-regular fa-star"></i>
                  <i class="empty fa-regular fa-star"></i>
                </div>
                <p className="card-text">
                  Embark on a luxurious adventure with our high-end car rental
                  options. From elegant sedans to exotic sports cars, we offer
                  the finest vehicles to elevate your travel experience
                </p>
                <p className="card-footer">ELOIN MALONE, AUBURN </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card" style={{ width: "18rem" }}>
              <div className="card-body">
                <h5 className="card-title">Best Price Assured </h5>
                <div className="card-icons-12">
                  <i class="full fa-solid fa-star"></i>
                  <i class="full fa-solid fa-star"></i>
                  <i class="empty fa-regular fa-star"></i>
                  <i class="empty fa-regular fa-star"></i>
                  <i class="empty fa-regular fa-star"></i>
                </div>
                <p className="card-text">
                  Indulge in opulence with our exclusive luxury car rentals for
                  an unforgettable driving experience like no other
                </p>
                <p className="card-footer">Madison Edwar , NEW YORK</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card" style={{ width: "18rem" }}>
              <div className="card-body">
                <h5 className="card-title">Clean & Comfortable </h5>
                <div className="card-icons-12">
                  <i class="full fa-solid fa-star"></i>
                  <i class="full fa-solid fa-star"></i>
                  <i class="full fa-solid fa-star"></i>
                  <i class="full fa-solid fa-star"></i>
                  <i class="empty fa-regular fa-star"></i>
                </div>
                <p className="card-text">
                  Discover the pinnacle of automotive excellence with our elite
                  luxury car rental service. From prestigious sedans to powerful
                  sports cars, elevate your journey and experience the thrill of
                  the open road like never before.
                </p>
                <p className="card-footer">GLORIA FOLSE , CHICHAGO </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </Col>

      <Col sm={12} md={4}>
        <div className="d-flex">
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
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-15-content d-flex">
              <div className="card-img">
                <img
                  src="https://luxedrive.qodeinteractive.com/wp-content/uploads/2023/02/h1-icon-img-1.2.png"
                  alt=""
                />
              </div>
              <div className="card-info">
                <p className="card-info-tel">Phone: (012) 345 6789 0123;</p>
                <p className="card-info-email">Email: luxe@example.com</p>
              </div>
            </div>
          </div>
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
                <p className="card-info-email">Sunday is closed.</p>
              </div>
            </div>
          </div>
        </div>
      </Col>
    </Container>
  );
}

export default Section12a