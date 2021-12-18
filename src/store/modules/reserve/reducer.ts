
export type Action<T, R> = {
   type: T,
    payload: R
}

export function reducerReserve (state = [], action: Action<string, object>) {
  console.log(state)
  switch (action.type) {
    case 'ADD_TRIPS':
      return [...state, action.payload]
    default:
      return state
  }
}
