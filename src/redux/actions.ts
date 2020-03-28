import { FETCH_PRODUCTS, SHOW_LOADER, HIDE_LOADER, CHANGE_STATUS, CHANGE_FILTER, CHANGE_ACTIVE_PAGE } from "./types";
import { IProduct } from "../interfaces";

// app -----------------------------------------------------------------------
export function changeActivePage(nextPage: 'main' | 'saved' | 'bag') {
   return {
      type: CHANGE_ACTIVE_PAGE,
      payload: nextPage
   }
}


// products -----------------------------------------------------------------------
export function fetchFirstProducts() {
   return async (dispatch: Function) => {
      dispatch({ type: SHOW_LOADER })

      const response = await fetch(process.env.PUBLIC_URL + '/products.json');
      const products: IProduct[] = await response.json()

      dispatch({ type: FETCH_PRODUCTS, payload: products })
      dispatch({ type: HIDE_LOADER })
   }
}

export function fetchNewProducts(nextId: number) {
   return async (dispatch: Function) => {
      dispatch({ type: SHOW_LOADER })

      const response = await fetch(process.env.PUBLIC_URL + '/products.json');
      const products: IProduct[] = await response.json()
      products.forEach((product: IProduct) => {
         product.id = nextId++
      })

      dispatch({ type: FETCH_PRODUCTS, payload: products })
      dispatch({ type: HIDE_LOADER })
   }
}

export const saveProduct = (id: number) => (
   {
      type: CHANGE_STATUS, payload: {
         id,
         status: 'saved'
      }
   }
)
export const addProductToBag = (id: number) => (
   {
      type: CHANGE_STATUS, payload: {
         id,
         status: 'bag'
      }
   }
)
export const removeProductStatus = (id: number) => (
   {
      type: CHANGE_STATUS, payload: {
         id,
         status: null
      }
   }
)


// mainPage -----------------------------------------------------------------------
export const showLoader = () => ({ type: SHOW_LOADER })
export const hideLoader = () => ({ type: HIDE_LOADER })

type TFilterName = 'eyes' | 'clothes' | 'color'
export const changeFilter = (filter: TFilterName, value: string) => ({
   type: CHANGE_FILTER,
   payload: { filter, value }
})