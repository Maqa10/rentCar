import database from "../../firebase/firebaseConfig";



export  const addCar = (shop) => ({
  type: "ADD_CARS",
  shop
  // shop: {
  //    id :crypto.randomUUID(),
  //   category,
  //    image,
  //   model,
  //  price,
  // },
});

export const addCarToDatabase = (carData = {}) =>{
return (dispatch) => {
  const {
    image = "",
    category = "",
    model = "",
    price = "",
    info = "",
  } = carData;
  const shop = {image,category,model,price,info };

  database
    .ref("shop")
    .push(shop)
    .then((res) => {
      dispatch(
        addCar({
          id: res.key,
          ...shop,
        })
      );
    });
};
}




export const editCar = (id,update) => ({
  type: "EDIT_CARS",
  id,
  update
});



export const deleteCar =(id) =>({
  type : "REMOVE_CARS",
  id
})

export const deleteCarFromDatabase = (id) => {
  return (dispatch) => {
    return database
      .ref(`shop/${id}`)
      .remove()
      .then(() => {
        dispatch(deleteCar(id));
      });
  };
};



export const getCar = (shop) => ({
  type: "GET_CARS",
  shop,
});

export const getCarFromDatabase = () => {
  return (dispatch) => {
    return database
      .ref("shop")
      .once("value")
      .then((snapshot) => {
        const shop = [];

        snapshot.forEach((car) => {
          shop.push({
            id: car.key,
            ...car.val(),
          });
        });

        dispatch(getCar(shop));
      });
  };
};