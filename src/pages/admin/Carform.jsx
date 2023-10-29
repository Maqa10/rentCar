import React, { useState } from 'react'
import { Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addCar } from '../../manager/action/actionCar';
import { info } from 'sass';

const Carform = ({ sendData,editcar }) => {
  const [image, setImage] = useState(editcar?editcar.image:"");
  const [category, setCategory] = useState(editcar ? editcar.category : "");
  const [model, setModel] = useState(editcar ? editcar.model : "");
  const [price, setPrice] = useState(editcar ? editcar.price : "");
  const dispatch = useDispatch();
  const carFormSubmit = (e) => {
    e.preventDefault();
    console.log(image, category, model, price,);
    // dispatch(
    //   addCar({
    //     category: category,
    //     image: image,
    //     model: model,
    //     price: price,
    //   })
    // );
    sendData({
      id: crypto.randomUUID(),
      category: "natiq@mamedovgmail.com",
      image:
        "https://static.vecteezy.com/system/resources/previews/008/442/086/non_2x/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg",
      title1: "Toyota",
      title2: "Toyota",
      model: "user12345",
      info: "Discover the joy of simplicity with our upscale ordinary car rentals. Even in everyday travels, elevate your experience with these refined vehicles that offer comfort, reliability, and a touch of luxury to make every journey special.",
      year: 2012,
      price: "Natiq",
    });
  };
  return (
    <div className="d-flex justify-content-center">
      <Col md={6}>
        <form onSubmit={carFormSubmit}>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Image
            </label>
            <input
            value={image}
              type="text"
              className="form-control"
              placeholder="Enter image url"
              aria-describedby="emailHelp"
              onChange={(e) => setImage(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Categoty
            </label>
            <input
            value={category}
              onChange={(e) => setCategory(e.target.value)}
              type="text"
              className="form-control"
              placeholder="categoty"
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Model
            </label>
            <input
            value={model}
              onChange={(e) => setModel(e.target.value)}
              type="text"
              className="form-control"
              placeholder="model"
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Price
            </label>
            <input
            value={price}
              onChange={(e) => setPrice(e.target.value)}
              type="text"
              className="form-control"
              placeholder="price"
            />
          </div>
          <button type="submit" className="btn btn-primary">
          {editcar? "Edit" : "Add"}
          </button>
        </form>
      </Col>
    </div>
  );
};

export default Carform