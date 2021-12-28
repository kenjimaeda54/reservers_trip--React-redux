// saga e para lidar com  effects,tipo requisicao de api banco de dados
import { AxiosResponse } from 'axios'
import { Action } from 'redux'
import { call, put, all, takeLatest, select } from 'redux-saga/effects'
import { api } from '../../../services/api'
import { Trips } from '../../../utils'
import { RootState } from '../root-Store'
import { addReserveSuccess, updateReserveSuccess } from './action'
import { TripsSelect } from './reducer'
import { history } from '../../../services/history'

// no saga eu consigo capturar o valor do state e passar para o reducer
// usando o select
export interface ActionProps extends Action {
  id: number;
  amount?: number;
}

export interface StockProps {
  id: number;
  amount: number;
}

// cuidado com a tipagem do id ele precisa satisfazer em baixo no takeLatest,
// para isto pasta extends as Action
// {id}  e o id que esta vindo do action
function * addReserve ({ id }: ActionProps) {
  const exisTrips: TripsSelect = yield select((state: RootState) => state.reserveReducer.find((item: Trips) => item.id === id))

  const stockResponse: AxiosResponse<StockProps> = yield call(api.get, `/stock/${id}`)

  const stock: number = stockResponse.data.amount

  const currentAmount: number = exisTrips ? exisTrips.amount + 1 : 0
  if (currentAmount > stock) {
    return alert('Quantidade maxima atingida')
  }

  if (exisTrips) {
    yield put(updateReserveSuccess(id, currentAmount))
  } else {
    const response: AxiosResponse<TripsSelect> = yield call(api.get, `/trips/${id}`)
    const data = {
      ...response.data,
      amount: 1
    }
    yield put(addReserveSuccess(data))
  }
  history.push('/reservas')
}

function * updateReserve ({ id, amount }: ActionProps) {
  if (amount!! <= 0) return
  const stockResponse: AxiosResponse<StockProps> = yield call(api.get, `/stock/${id}`)

  const stock: number = stockResponse.data.amount

  if (amount!! > stock) {
    return alert('Quantidade maxima atingida')
  }
  yield put(updateReserveSuccess(id, amount!!))
}

export default all([
  takeLatest('ADD_RESERVE_REQUEST', addReserve),
  takeLatest('UPDATE_RESERVE_REQUEST', updateReserve)

])
