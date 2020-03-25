import { combineReducers } from "redux";

import { productsReducer } from './productsReducer';
import { mainPageReducer } from "./mainPageReducer";
import { appReducer } from "./appReducer";

export const rootReducer = combineReducers({
   app: appReducer,
   mainPage: mainPageReducer,
   products: productsReducer
})