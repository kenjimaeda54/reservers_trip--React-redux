import { DispatchProps } from '../../../pages/home'

export type ActionsReserveReducer<T> = {
  type: string
  payload?: T
}

export const reserveReducer = (state = [], action: ActionsReserveReducer<DispatchProps>) => {
  switch (action.type) {
    case 'ADD_RESERVE':
      return [...state, action.payload]
    default:
      return state
  }
}
