import React, { useContext } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Langcontext } from '../context/Langcontext';
import SInglecard from '../components/SInglecard';
import { useSelector } from 'react-redux';

const SuccesfullyBuy = () => {
  const [lang, setLang] = useContext(Langcontext);
  const shop = useSelector((p) => p);
  return (
    <Container style={{ height: "auto" }}>
      <Col className="d-flex justify-content-center align-items-center my-5">
        <div>
          <div class="card-buySuccessfully">
            <Link to="/">
              <button type="button" class="dismiss">
                ×
              </button>
            </Link>
            <div class="header">
              <div class="image">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <g stroke-width="0" id="SVGRepo_bgCarrier"></g>
                  <g
                    stroke-linejoin="round"
                    stroke-linecap="round"
                    id="SVGRepo_tracerCarrier"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      stroke-linejoin="round"
                      stroke-linecap="round"
                      stroke-width="1.5"
                      stroke="#000000"
                      d="M20 7L9.00004 18L3.99994 13"
                    ></path>
                  </g>
                </svg>
              </div>
              <div class="content">
                <span class="title">
                  {lang === "az" ? "Sifariş təsdiqləndi" : "Order validated"}
                </span>
                <p class="message">
                  {lang === "az"
                    ? "Satın aldığınız üçün təşəkkür edirik. Etibarınıza görə minnətdaram. Yeni avtomobilinizin lüksündən həzz alın!"
                    : "Thank you for your purchase. Grateful for your trust. Enjoy the luxury of your new car!"}
                </p>
              </div>
              <div class="actions">
                <Link to="/shop">
                  <button type="button" class="history">
                    {lang === "az" ? "Mağaza" : "Shop"}
                  </button>
                </Link>
                <Link to="/wishlist">
                  <button type="button" class="track">
                    {lang === "az" ? "İstək Siyahı" : "Wishlist"}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Col>
      <Col className='my-5' sm={12}>
        <h1 className='text-center'>The most popular cars</h1>
        <Row className="Shop-cars">
          {shop.slice(1, 5).map((item, count) => (
            <SInglecard
              key={count}
              image={item.image}
              title1={item.title1}
              category={item.category}
              model={item.model}
              info={item.info}
              year={item.year}
              price={item.price}
              id={item.id}
              alldata={item}
            />
          ))}
        </Row>
      </Col>
    </Container>
  );
}

export default SuccesfullyBuy