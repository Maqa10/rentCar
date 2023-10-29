import React, { useContext } from 'react'
import { Langcontext } from '../context/Langcontext';

const Slider = () => {
  const [lang, setLang] = useContext(Langcontext);
  return (
    <div className="slider-container">
      <div id="carouselExampleDark" className="carousel carousel-dark slide">
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <img
              src="https://luxedrive.qodeinteractive.com/wp-content/uploads/2023/04/h1-rev-img-1b.jpg"
              className="d-block w-100"
              alt="..."
            />
            <div className="slider-info">
              <h1>
                {lang === "az"
                  ? "Lüks avtomobil kirayə vermək lazımdır,"
                  : "Need to Rend a Luxury car,"}
                <br />
                {lang === "az" ? "amma necə bilmirəm?" : "but do not know how?"}
              </h1>
              <p>{lang === "az" ? "Zəng edin: 509999999" : "Call:509999999"}</p>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img
              src="https://luxedrive.qodeinteractive.com/wp-content/uploads/2023/04/h1-rev-img-2b.jpg"
              className="d-block w-100 image2"
              alt="..."
            />
            <div className="slider-info">
              <h1>
                {lang === "az"
                  ? "Lüks avtomobil kirayə vermək lazımdır,"
                  : "Need to Rend a Luxury car,"}
                <br />
                {lang === "az" ? "amma necə bilmirəm?" : "but do not know how?"}
              </h1>
              <p>{lang === "az" ? "Zəng edin: 509999999" : "Call:509999999"}</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="	https://luxedrive.qodeinteractive.com/wp-content/uploads/2023/04/h1-rev-img-3b.jpg"
              className="d-block w-100"
              alt="..."
            />
            <div className="slider-info">
              <h1>
                {lang === "az"
                  ? "Lüks avtomobil kirayə vermək lazımdır,"
                  : "Need to Rend a Luxury car,"}
                <br />
                {lang === "az" ? "amma necə bilmirəm?" : "but do not know how?"}
              </h1>
              <p>{lang === "az" ? "Zəng edin: 509999999" : "Call:509999999"}</p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Slider