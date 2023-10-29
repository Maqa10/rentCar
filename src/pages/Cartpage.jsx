import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from 'react-use-cart';

const Cartpage = () => {
  const navigate = useNavigate()

    const {
      items,
      updateItemQuantity,
      removeItem,
      isEmpty,
      cartTotal,
      emptyCart,
    } = useCart();

  const handleCheckout = (e) => {
    e.preventDefault()

    const isLogged = localStorage.getItem("active");
    navigate(isLogged ? "/buy" : "/login")
  }

  return (
    <>
      {isEmpty ? (
        <h1 className="text-center" style={{ height: "100vh" }}>
          No Products
        </h1>
      ) : (
        <Container className="cartpage" style={{ height: "100vh" }}>
          <h1 className="text-center text-light mt-5"> Cart page</h1>
          <Row>
            <Col sm={12} md={9}>
              <table className="cart-table">
                <thead>
                  <tr>
                    <th scope="col"></th>
                    <th scope="col">Image</th>
                    <th scope="col">Model</th>
                    <th scope="col">Price</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item, count) => (
                    <tr>
                      <th scope="row">{count + 1}</th>
                      <td>
                        <img className="cart-img" src={item.image} alt="" />
                      </td>
                      <td>{item.model}</td>
                      <td>{item.price * item.quantity}</td>
                      <td className="current-number">
                        <div className="d-flex justify-content-center">
                          <button
                            className="btn btn-danger "
                            onClick={() =>
                              updateItemQuantity(item.id, item.quantity - 1)
                            }
                          >
                            -
                          </button>
                          <span className="mx-2 me-2">{item.quantity}</span>
                          <button
                            className="btn btn-success "
                            onClick={() =>
                              updateItemQuantity(item.id, item.quantity + 1)
                            }
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td>
                        <button
                          className="btn btn-danger"
                          onClick={() => removeItem(item.id)}
                        >
                          X
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Col>
            <Col sm={12} md={3}>
              <ul className="list-group">
                <li className="list-group-item">
                  <h3>Total Price</h3>
                </li>
                <li className="list-group-item">
                  <h4>{cartTotal}$</h4>
                </li>
                <li className="list-group-item">

                  <Link onClick={handleCheckout}>
                    <button class="Btn">
                      Checkout
                      <svg class="svgIcon" viewBox="0 0 576 512">
                        <path d="M512 80c8.8 0 16 7.2 16 16v32H48V96c0-8.8 7.2-16 16-16H512zm16 144V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V224H528zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm56 304c-13.3 0-24 10.7-24 24s10.7 24 24 24h48c13.3 0 24-10.7 24-24s-10.7-24-24-24H120zm128 0c-13.3 0-24 10.7-24 24s10.7 24 24 24H360c13.3 0 24-10.7 24-24s-10.7-24-24-24H248z"></path>
                      </svg>
                    </button>
                  </Link>
                </li>
                <li className="list-group-item">
                  <button
                    class="button"
                    onClick={() => {
                      emptyCart();
                    }}
                  >
                    <svg viewBox="0 0 448 512" class="svgIcon">
                      <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path>
                    </svg>
                  </button>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
}

export default Cartpage