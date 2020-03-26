import { FETCH_PRODUCTS, SHOW_LOADER, HIDE_LOADER, CHANGE_STATUS, CHANGE_FILTER, CHANGE_ACTIVE_PAGE } from "./types";

// app -----------------------------------------------------------------------
export function changeActivePage(nextPage) {
   return {
      type: CHANGE_ACTIVE_PAGE,
      payload: nextPage
   }
}


// products -----------------------------------------------------------------------
export function fetchFirstProducts() {
   return async (dispatch) => {
      dispatch({ type: SHOW_LOADER })

      const response = await fetch(process.env.PUBLIC_URL + '/products.json');
      const products = await response.json()

      dispatch({ type: FETCH_PRODUCTS, payload: products })
      dispatch({ type: HIDE_LOADER })
   }
}

export function fetchNewProducts(nextId) {
   return async (dispatch) => {
      dispatch({ type: SHOW_LOADER })

      const response = await fetch(process.env.PUBLIC_URL + '/products.json');
      const products = await response.json()
      products.forEach((product) => {
         product.id = nextId++
      })

      dispatch({ type: FETCH_PRODUCTS, payload: products })
      dispatch({ type: HIDE_LOADER })
   }
}

export const saveProduct = (id) => (
   {
      type: CHANGE_STATUS, payload: {
         id,
         status: 'saved'
      }
   }
)
export const addProductToBag = (id) => (
   {
      type: CHANGE_STATUS, payload: {
         id,
         status: 'bag'
      }
   }
)
export const removeProductStatus = (id) => (
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

export const changeFilter = (filter, value) => ({
   type: CHANGE_FILTER,
   payload: { filter, value }
})