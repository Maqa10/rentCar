import React, { Component, useContext } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container } from "react-bootstrap";
import { Langcontext } from "../context/Langcontext";


export default function PauseOnHover(){
   const [lang, setLang] = useContext(Langcontext);
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
          },
        },
        {
          breakpoint: 450,
          dots: true,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    };
    return (
      <Container>
        <div>
          <h2>Pause On Hover</h2>
          <Slider {...settings}>
            <div className="slider-card-1">
              <div className="card" style={{ width: "18rem " }}>
                <img
                  src="	https://luxedrive.qodeinteractive.com/wp-content/uploads/2023/02/Vihecle-list-image-03.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title ">Range Rover Evoque </h5>
                  <p className="starts">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                  </p>
                  <p className="card-text">
                    {lang === "az"
                      ? "Eksklüziv yüksək səviyyəli avtomobil icarəmizlə dəbdəbəli səyahətləri yaşayın."
                      : "Experience luxury travel with our exclusive high-end car rentals."}
                  </p>
                  <p className="price">
                    $ <span>180/</span>h
                  </p>
                </div>
              </div>
            </div>
            <div className="slider-card-2">
              <div className="card" style={{ width: "18rem " }}>
                <img
                  src="https://luxedrive.qodeinteractive.com/wp-content/uploads/2023/02/Vihecle-list-image-02.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Porche Taycan Sport</h5>
                  <p className="starts">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                  </p>
                  <p className="card-text">
                    {lang === "az"
                      ? "Eksklüziv yüksək səviyyəli avtomobil icarəmizlə dəbdəbəli səyahətləri yaşayın."
                      : "Experience luxury travel with our exclusive high-end car rentals."}
                  </p>
                  <p className="price">
                    $ <span>180/</span>h
                  </p>
                </div>
              </div>
            </div>
            <div className="slider-card-3">
              <div className="card" style={{ width: "18rem " }}>
                <img
                  src="https://luxedrive.qodeinteractive.com/wp-content/uploads/2023/02/Vihecle-list-image-01.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Rolls Royce Ghost 3 </h5>
                  <p className="starts">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                  </p>
                  <p className="card-text">
                    {lang === "az"
                      ? "Eksklüziv yüksək səviyyəli avtomobil icarəmizlə dəbdəbəli səyahətləri yaşayın."
                      : "Experience luxury travel with our exclusive high-end car rentals."}
                  </p>
                  <p className="price">
                    $ <span>180/</span>h
                  </p>
                </div>
              </div>
            </div>
            <div className="slider-card-4">
              <div className="card" style={{ width: "18rem " }}>
                <img
                  src="	https://luxedrive.qodeinteractive.com/wp-content/uploads/2023/02/Vihecle-list-image-04.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Ferrari 365 Daytona</h5>
                  <p className="starts">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                  </p>
                  <p className="card-text">
                    {lang === "az"
                      ? "Eksklüziv yüksək səviyyəli avtomobil icarəmizlə dəbdəbəli səyahətləri yaşayın."
                      : "Experience luxury travel with our exclusive high-end car rentals."}
                  </p>
                  <p className="price">
                    $ <span>180/</span>h
                  </p>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </Container>
    );
  }

