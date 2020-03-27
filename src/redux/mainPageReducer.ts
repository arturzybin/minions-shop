import { SHOW_LOADER, HIDE_LOADER, CHANGE_FILTER } from "./types"


type TState = {
   isLoading: boolean,
   filters: {
      eyes?: string,
      clothes?: string,
      color?: string
   }
}

type TAction = {
   type: string,
   payload: {
      filter: 'eyes' | 'clothes' | 'color',
      value: string
   }
}


const initialState = {
   isLoading: false,
   filters: {}
}

export const mainPageReducer = (state: TState = initialState, action: TAction) => {
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