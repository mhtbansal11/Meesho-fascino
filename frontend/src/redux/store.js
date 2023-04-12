import {
    legacy_createStore,
    combineReducers,
    compose,
    applyMiddleware,
  } from "redux";
  import { productsReducer } from "./reducer/ProductsReducer";
  import { profileReducer } from "./reducer/ProfileReducer";
  import thunk from "redux-thunk";
  
  const rootReducers = combineReducers({
    productManager: productsReducer,
    profileManager: profileReducer,
  });
  
  
  const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  
  export const store = legacy_createStore(
    rootReducers,
    composeEnhancer(applyMiddleware(thunk))
  );
  
  
  
 
  
  