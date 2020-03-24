import { combineReducers } from "redux";

import { productsReducer } from './productsReducer';
import { appReducer } from "./appReducer";

export const rootReducer = combineReducers({
   app: appReducer,
   products: productsReducer
})