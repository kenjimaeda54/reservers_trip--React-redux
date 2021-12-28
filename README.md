## Reservers Trip
Pequena aplicacao  consumindo api de reservas. Principal objetivo reforcar conceitos do Redux.

## Motivacao
APlicacao para praticar redux, usuario consegue selecionar as viagens que deseja e selecionar a quantidade de cada viagem

## Feature
- Redux e redux saga
- Redux e para gerenciar estados enquanto o saga lida com efeito colaterais exemplo de uso  useEfect
- Saga  faz as  requests na api e compartilhar com redux, seu princípio lembra os middleware em uma api Node js
- Redux trabalha com conceitos de action e reducers, abaixo esta o exemplo de um reducer
- Cada case do switch e um reducer
- Nos reducers existe a imutabilidade então não e possível lidar direto com push de um array
- Para lidar com as mutações utilizei a lib [immer](https://immerjs.github.io/immer/) a função produce do retornara através  do state o valor  modificado e com draft consigo pegar o valor atual
- As actions  contem o tipo e o valor que desejo compartilhar, normalmente usamos o type para indicar as action
- - Recordando o splice, primeiro parâmetro  e o valor que desejo excluir o segundo e a quantidade
``` typescript
//arquivo de action
export function addReserveSuccess (trips: TripsSelect) {
  return {
    type: 'ADD_RESERVE_SUCCESS',
    payload: trips
  }
}


//-----------------------------------------------------//
export const reserveReducer = (state = [], action: TripsSelect) => {
  switch (action.type) {
    case 'ADD_RESERVE_SUCCESS':
      return produce(state, (draft:Trips[]) => {
        draft.push(action.payload)
      })
    case 'REMOVE_RESERVE':
      return produce(state, (draft: DraftProps) => {
        const findIndex = draft.findIndex(item => item.id === action.id)
        draft.splice(findIndex, 1)
      })
    case 'UPDATE_RESERVE_SUCCESS': {
      return produce(state, (draft: DraftProps) => {
        const findIndex = draft.findIndex(item => item.id === action.id)
        draft[findIndex].amount = action.amount
      }) }
    default:
      return state
  }
}







```
