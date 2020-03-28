import { CHANGE_ACTIVE_PAGE } from "./types"

type TAction = {
   type: string,
   payload: 'main' | 'saved' | 'bag'
}

type TState = {
   activePage: 'main' | 'saved' | 'bag'
}


const initialState: TState = {
   activePage: 'main'
}

export const appReducer = (state: TState = initialState, action: TAction): TState => {
   switch (action.type) {
      case CHANGE_ACTIVE_PAGE:
         return {...state, activePage: action.payload}
      default:
         return state
   }
}