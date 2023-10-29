import React from 'react'
import { Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Userboard = () => {
    const shop = useSelector((p) => p);
    const dispatch = useDispatch();
  return (
    <Container>
      <h1 className="text-center my-5">Admin panel</h1>
      <Link className="btn btn-success" to="/admin/add">
        Add Car
      </Link>
      <div className="d-flex justify-content-center flex-column">
        <Col sm={12} md={12}>
          <table className="admin-table w-100">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Image</th>
                <th scope="col">Categoty</th>
                <th scope="col">Model</th>
                <th scope="col">Price</th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
              {user.reverse().map((item, count) => (
                <tr key={count}>
                  <th>{count + 1}</th>
                  <td>
                    <img src={item.image} alt="" style={{ width: "70px" }} />
                  </td>
                  <td>{item.category}</td>
                  <td>{item.model}</td>
                  <td>{item.price}</td>
                  <td>
                    <Link to={`/admin/edit/${item.id}`}>
                      <button className="edit">Edit</button>
                    </Link>
                  </td>
                  <td>
                    <button
                      className="delete"
                      onClick={() => {
                        dispatch(deleteUserFromDatabase(item.id));
                      }}
                    >
                      X
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Col>
      </div>
    </Container>
  );
}

export default Userboard