// saga e para lidar com  effects,tipo requisicao de api banco de dados
import { AxiosResponse } from 'axios'
import { Action } from 'redux'
import { call, put, all, takeLatest } from 'redux-saga/effects'
import { api } from '../../../services/api'
import { Trips } from '../../../utils'
import { addReserveSuccess } from './action'

export interface ActionProps extends Action {
  id: number;
}

// cuidado com a tipagem do id ele precisa satisfazer em baixo no takeLatest,
// para isto pasta extends as Action
// {id}  e o id que esta vindo do action
function * addReserve ({ id }: ActionProps) {
  const response: AxiosResponse<Trips> = yield call(api.get, `/trips/${id}`)
  yield put(addReserveSuccess(response.data))
}

export default all([
  takeLatest('ADD_RESERVE_REQUEST', addReserve)

])
