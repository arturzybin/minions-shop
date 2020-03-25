import { CHANGE_ACTIVE_PAGE } from "./types"

const initialState = {
   activePage: 'main'
}

export const appReducer = (state = initialState, action) => {
   switch (action.type) {
      case CHANGE_ACTIVE_PAGE:
         return {...state, activePage: action.payload}
      default:
         return state
   }
}