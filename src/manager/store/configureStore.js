import { applyMiddleware, compose, createStore } from "redux"
import { carReducer } from "../reducer/carReducer";
import thunk from "redux-thunk";


const configureStore = () =>{
    const store = createStore(carReducer,compose(applyMiddleware(thunk)));
    return store;
}

export default configureStore





// import { applyMiddleware, combineReducers, compose, createStore } from "redux";
// import { carReducer } from "../reducer/carReducer";
// import thunk from "redux-thunk";
// import { userREducer } from "../reducer/userREducer";

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;



// const configureStore = () => {

//   const store = createStore(
//     combineReducers({
//       mr: carReducer,
//       br: userREducer,
//     }),
//     composeEnhancers(applyMiddleware(thunk)));
//   return store;
// };

// export default configureStore;