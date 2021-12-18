import { produce } from 'immer'
import { Trips } from '../../../utils'

export type ActionsReserveReducer = {
  type: string
  payload: Trips
}

export type DraftProps = {
  id?: number,
  amount: number,
}[]

export const reserveReducer = (state = [], action: ActionsReserveReducer) => {
  switch (action.type) {
    case 'ADD_RESERVE':
      // immer lida com a parte de imutabilidade
      // https://immerjs.github.io/immer/docs/introduction
      // produce recebe o estado atual e retorna um novo estado  para ele
      return produce(state, (draft:DraftProps) => {
        const findIndex = draft.findIndex(item => item.id === action.payload.id)
        if (findIndex >= 0) {
          // aqui usando immer tudo mutavel entao nao preciso ir na lista
          // deletar um valor posso apenas ataulizar o valor que desejo
          draft[findIndex].amount += 1
        } else {
          draft.push({
            ...action.payload,
            amount: 1
          })
        }
      })
    default:
      return state
  }
}
