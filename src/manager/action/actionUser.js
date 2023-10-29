import database from "../../firebase/firebaseConfig";



export const addUSer = (shop) => ({
  type: "ADD_USERS",
  shop,
  // shop: {
  //    id :crypto.randomUUID(),
  //   category,
  //    image,
  //   model,
  //  price,
  // },
});


export const addUserToDatabase = (userData = {}) => {
  return (dispatch) => {
    const {
      email = "",
      name = "",
      password = "",
    } = userData;
    const shop = { email, name, password};

    database
      .ref("shop")
      .push(shop)
      .then((res) => {
        dispatch(
          addUser({
            id: res.key,
            ...shop,
          })
        );
      });
  };
};
