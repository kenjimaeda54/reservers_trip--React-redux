import reserve from './reserves/saga'
import { all } from 'redux-saga/effects'

export default function * rootSaga () {
  yield all([
    reserve
  ])
}
