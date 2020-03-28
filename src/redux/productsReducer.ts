import { FETCH_PRODUCTS, CHANGE_STATUS } from "./types"
import { IProduct } from "../interfaces"


interface TAction {
   type: string,
   payload: any
}

export const productsReducer = (state: IProduct[] = [], action: TAction): IProduct[] => {
   switch (action.type) {
      case FETCH_PRODUCTS:
         return [...state, ...action.payload]
      case CHANGE_STATUS:
         const newState: IProduct[] = [...state]
         newState[action.payload.id].status = action.payload.status
         return newState
      default:
         return state
   }
}