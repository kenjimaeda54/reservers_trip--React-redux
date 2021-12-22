import rootSaga from './modules/root-Saga'
import { reducers } from './modules/root-Store'
import createSagaMiddleware from 'redux-saga'
import { createStore, applyMiddleware } from 'redux'

const sagaMiddleware = createSagaMiddleware()
const encher = applyMiddleware(sagaMiddleware)

export const store = createStore(reducers, encher)

sagaMiddleware.run(rootSaga)
