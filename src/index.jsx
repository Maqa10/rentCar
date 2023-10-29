import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import "./sass/style.scss"
import { Provider } from 'react-redux';
import configureStore from './manager/store/configureStore';
import { addCar, deleteCar, getCarFromDatabase } from './manager/action/actionCar';
import { DotSpinner } from '@uiball/loaders';



const mystore = configureStore();



const result = (
  <Provider store={mystore}>
    <App />
  </Provider>
);
// mystore.dispatch(
//   addCar({
//     id:crypto.randomUUID(),
//     category: "Ordenary",
//     image:
//       "https://i.gaw.to/vehicles/photos/08/22/082250_2017_toyota_Prius.jpg?640x400",
//     model: "Corolla",
//     price:35
//   })
// );
// mystore.dispatch(
//   addCar({
//     id: crypto.randomUUID(),
//     category: "Ordenary",
//     image:
//       "https://i.gaw.to/vehicles/photos/08/22/082250_2017_toyota_Prius.jpg?640x400",
//     model: "Corolla",
//     price: 35,
//   })
// ); 




// const a = mystore.dispatch(
//   addCar({
//     id: crypto.randomUUID(),
//     category: "Ordenary",
//     image:
//       "https://i.gaw.to/vehicles/photos/08/22/082250_2017_toyota_Prius.jpg?640x400",
//     model: "Corolla",
//     price: 35,
//   })
// );
// console.log(a.shop.id);
// mystore.dispatch(deleteCar({id:a.shop.id}))

ReactDOM.render(
    <DotSpinner className="d-flex justify-content-center" size={40} speed={0.9} color="black" /> 
,
  document.getElementById("root")
);

mystore.dispatch(getCarFromDatabase()).then(() => {
  ReactDOM.render(result, document.getElementById("root"));
});
