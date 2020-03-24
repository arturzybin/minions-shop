import { SHOW_LOADER, HIDE_LOADER, CHANGE_FILTER } from "./types"

const initialState = {
   isLoading: false,
   filters: {}
}

export const mainPageReducer = (state = initialState, action) => {
   switch (action.type) {
      case SHOW_LOADER:
         return { ...state, isLoading: true }
      case HIDE_LOADER:
         return { ...state, isLoading: false }
      case CHANGE_FILTER:
         const filters = {...state.filters};
         filters[action.payload.filter] = action.payload.value
         return {...state, filters}
      default:
         return state
   }
}