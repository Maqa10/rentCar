import React, { useContext } from "react";
import { ProfilContext } from "../context/ProfilContext";
import { useCart } from "react-use-cart";
import { useWishlist } from "react-use-wishlist";
import { Col, Container, Row } from "react-bootstrap";
import SInglecard from "../components/SInglecard";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { WishlistContext } from "../context/WishlistContext";
import { Langcontext } from "../context/Langcontext";
import { toast, ToastContainer } from "react-toastify";

const CartWishlistUser = () => {
     const shop = useSelector((p) => p);
     const { id } = useParams();
     const Productdetails = shop.find((p) => p.id.toString() === id);
  const { wishlist } = useContext(WishlistContext);
const [lang, setLang] = useContext(Langcontext);
const notify = () =>
  toast.success("Successfully added to cart", {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });
  return (
    <Container style={{ height: "535vh" }}>
      <div>
        <h2 className="text-center mb-5">
          {lang === "az" ? "İstək Siyahım" : "My Wishlist"}
        </h2>
        <Row className="Shop-cars">
          {wishlist.map((item, id) => (
            <SInglecard
              key={id}
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
          <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
        </Row>
      </div>
    </Container>
  );
};

export default CartWishlistUser;








// import React, { useContext } from "react";
// import { ProfilContext } from "../context/ProfilContext";
// import { useCart } from "react-use-cart";
// import { useWishlist } from "react-use-wishlist";
// import { Col, Container, Row } from "react-bootstrap";
// import SInglecard from "../components/SInglecard";
// import { useSelector } from "react-redux";
// import { Link, useParams } from "react-router-dom";
// import { WishlistContext } from "../context/WishlistContext";
// import { Langcontext } from "../context/Langcontext";
// import { toast, ToastContainer } from "react-toastify";

// const CartWishlistUser = () => {
//   const car= useSelector((p) => p);
//   const { id } = useParams();
//   const Productdetails = car.find((p) => p.id.toString() === id);
//   const { wishlist } = useContext(WishlistContext);
//   const [lang, setLang] = useContext(Langcontext);
//   const notify = () =>
//     toast.success("Successfully added to cart", {
//       position: "bottom-right",
//       autoClose: 5000,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//       progress: undefined,
//       theme: "dark",
//     });
//   return (
//     <Container style={{ height: "535vh" }}>
//       <div>
//         <h2 className="text-center mb-5">
//           {lang === "az" ? "İstək Siyahım" : "My Wishlist"}
//         </h2>
//         <Row className="Shop-cars">
//           {wishlist.map((item, id) => (
//             <SInglecard
//               key={id}
//               image={item.image}
//               title1={item.title1}
//               category={item.category}
//               model={item.model}
//               info={item.info}
//               year={item.year}
//               price={item.price}
//               id={item.id}
//               alldata={item}
//             />
//           ))}
//           <ToastContainer
//             position="bottom-right"
//             autoClose={5000}
//             hideProgressBar={false}
//             newestOnTop={false}
//             closeOnClick
//             rtl={false}
//             pauseOnFocusLoss
//             draggable
//             pauseOnHover
//             theme="dark"
//           />
//         </Row>
//       </div>
//     </Container>
//   );
// };

// export default CartWishlistUser;

