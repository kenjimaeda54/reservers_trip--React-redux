import { produce } from 'immer'
import { Trips } from '../../../utils'

export type TripsSelect = {
  type: string
  payload: Trips
  id:number
  amount: number
}

export type DraftProps = {
  id?: number,
  amount: number,
}[]

export const reserveReducer = (state = [], action: TripsSelect) => {
  switch (action.type) {
    case 'ADD_RESERVE_SUCCESS':
      // ja que estamos usando saga ele ficara responsável por aumentar
      // ou diminuir o amount e nao o reducer
      // immer lida com a parte de imutabilidade
      // https://immerjs.github.io/immer/docs/introduction
      // produce recebe o estado atual e retorna um novo estado  para ele
      return produce(state, (draft:Trips[]) => {
        draft.push(action.payload)
      })
    case 'REMOVE_RESERVE':
      return produce(state, (draft: DraftProps) => {
        const findIndex = draft.findIndex(item => item.id === action.id)
        // splice no primeiro parametro  e oque desejo excluir
        // segundo parametro quantos elementos desejo excluir
        draft.splice(findIndex, 1)
      })
    case 'UPDATE_RESERVE': {
      if (action.amount <= 0) {
        return state
      }
      return produce(state, (draft: DraftProps) => {
        const findIndex = draft.findIndex(item => item.id === action.id)
        draft[findIndex].amount = action.amount
      }) }
    default:
      return state
  }
}
