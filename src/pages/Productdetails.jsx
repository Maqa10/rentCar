import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const Productdetails = () => {
   const shop = useSelector(p =>p);
      const { id } = useParams();
      const Productdetails = shop.find((p) => p.id.toString() === id);
  return (
    <>
      {Productdetails === undefined ? (
        <h1>Loading...</h1>
      ) : (
        <div
          className="row flex-lg-row-reverse align-items-center g-5 py-5"
          style={{ margin: "0" }}
        >
          <div className="Read-More col-lg-6">
            <h1 className="display-5 fw-bold  lh-1 mb-3">
              Cattgoty: {Productdetails.category}
            </h1>
            <p className="model">Model: {Productdetails.model}</p>
            <p className="info">
              Explore our diverse range of luxury car rentals, from powerful
              off-road SUVs to sleek sports cars and everything in between.
              Experience opulence, performance, and style tailored to your
              preferences.
            </p>
            <p className="price">Price: {Productdetails.price}$</p>
          </div>
          <div className="col-10 col-sm-8 col-lg-6">
            <img
              src={Productdetails.image}
              className="d-block mx-lg-auto img-fluid"
              alt="Bootstrap Themes"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>
        </div>
      )}
    </>
  );
}







export default Productdetails