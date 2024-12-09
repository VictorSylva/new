import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slice/authSlice';
import productReducer from './slice/productSlice';
import filterReducer from './slice/filterSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    products: productReducer,
    filter: filterReducer,
  },
});

export default store;


// import {configureStore, combineReducers} from "@reduxjs/toolkit"

// const rootReducer = combineReducers()

// const store = configureStore({
//     reducer: rootReducer,
// })

// export default store;
