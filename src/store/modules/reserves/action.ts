import { Trips } from '../../../utils'

export function addReserveRequest (id?: number) {
  return {
    type: 'ADD_RESERVE_REQUEST',
    id
  }
}

export function addReserveSuccess (trips: Trips) {
  return {
    type: 'ADD_RESERVE_SUCCESS',
    payload: trips
  }
}

export function removeReserve (id: number) {
  return {
    type: 'REMOVE_RESERVE',
    id
  }
}

export function updateReserve (id:number, amount:number) {
  return {
    type: 'UPDATE_RESERVE',
    id,
    amount
  }
}