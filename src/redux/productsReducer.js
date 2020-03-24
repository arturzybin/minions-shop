import { FETCH_PRODUCTS, CHANGE_STATUS } from "./types"


export const productsReducer = (state = [], action) => {
   switch (action.type) {
      case FETCH_PRODUCTS:
         return [...state, ...action.payload]
      case CHANGE_STATUS:
         const newState = [...state]
         newState[action.payload.id].status = action.payload.status
         return newState
      default:
         return state
   }
}