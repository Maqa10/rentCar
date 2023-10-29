import React, { useContext } from 'react'
import { Langcontext } from '../context/Langcontext';

const Section14 = () => {
    const [lang, setLang] = useContext(Langcontext);
  return (
    <div className="section-14-main mt-5 mb-5">
      <div className="section-14-img">
        <img
          src="https://luxedrive.qodeinteractive.com/wp-content/uploads/2023/01/h1-img-13.jpg"
          className="img-fluid"
          alt="..."
        ></img>
        <h2>
          {lang === "az"
            ? "İcarəyə 15% endirim qazanın!"
            : "Get 15% Off Your Rental!"}
          <br />{lang === "az" ? "Modelinizi seçin" : "Choose Your Model"}
        </h2>
      </div>
    </div>
  );
}

export default Section14