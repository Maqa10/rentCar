import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { WishlistContext } from "../context/WishlistContext";

const SInglecard = ({
  id,
  category,
  image,
  title1,
  title2,
  model,
  info,
  year,
  price,
  alldata,
}) => {
  const { addItem } = useCart();

  const wishlistContext = useContext(WishlistContext);

  const isInWishlist = wishlistContext.wishlist.some((item) => item.id === alldata.id)

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
    <div className="card" style={{ width: "18rem" }}>
      <img src={image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-category">{category}</h5>
        <p className="model">{model}</p>
        {/* <p className="info">{info}</p> */}
        <p className="price">Price: {price}$ per day</p>
        <button
          className="cart-shop"
          onClick={() => {
            notify(addItem(alldata));
          }}
        >
          <i class="fa-solid fa-cart-shopping"></i>
        </button>
        <Link to={`/Productdetails/${id}`}>
          {/* <button className="btn btn-danger ms-3">Read More</button> */}
          <button class="btn-read ms-3">Read More</button>
        </Link>
        <i
          className={
            isInWishlist
              ? "fav  heart fa-solid fa-heart"
              : "heart fa-solid fa-heart"
          }
          onClick={() => {
            console.log(isInWishlist);
            isInWishlist
              ? wishlistContext.removeFromWishlist(id)
              : wishlistContext.addToWishlist(alldata);
          }}
        ></i>
      </div>
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
    </div>
  );
};

export default SInglecard;
