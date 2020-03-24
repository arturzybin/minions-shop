import { FETCH_PRODUCTS, SHOW_LOADER, HIDE_LOADER } from "./types";


export function fetchFirstProducts() {
   return async (dispatch) => {
      dispatch({ type: SHOW_LOADER })
      const response = await fetch(process.env.PUBLIC_URL + '/products-00.json');
      const products = await response.json()
      dispatch({ type: FETCH_PRODUCTS, payload: products })
      dispatch({ type: HIDE_LOADER })
   }
}


export function fetchRemainingProducts() {
   return async (dispatch) => {
      dispatch({ type: SHOW_LOADER })
      const response = await fetch(process.env.PUBLIC_URL + '/products-01.json');
      const products = await response.json()
      dispatch({ type: FETCH_PRODUCTS, payload: products })
      dispatch({ type: HIDE_LOADER })
   }
}

export const showLoader = () => ({ type: SHOW_LOADER })
export const hideLoader = () => ({ type: HIDE_LOADER })