import { combineReducers } from "redux";

import { productsReducer } from './productsReducer';
import { mainPageReducer } from "./mainPageReducer";

export const rootReducer = combineReducers({
   mainPage: mainPageReducer,
   products: productsReducer
})