import { useState, createContext } from "react";

export const WishlistContext = createContext();

// ?? and ||

const listInLocalStorage = localStorage.getItem("wishlist")
  ? JSON.parse(localStorage.getItem("wishlist"))
  : [];

export const WishlistProvider = (props) => {
  const [wishlist, setWishlist] = useState(listInLocalStorage);

  const addToWishlist = (item) => {
    setWishlist((state) => {
        const newState = [...state, item];
        localStorage.setItem("wishlist", JSON.stringify(newState))

        return newState
    });
  };

  const removeFromWishlist = (id) => {
    setWishlist((state) => {
      const newState = state.filter((item) => id !== item.id);
      localStorage.setItem("wishlist", JSON.stringify(newState));

      return newState;
    });
  };

  return (
    <WishlistContext.Provider
      value={{ addToWishlist, removeFromWishlist, wishlist }}
    >
      {props.children}
    </WishlistContext.Provider>
  );
};
