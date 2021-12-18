import { reducers } from './modules/root-Store'
import { createStore } from 'redux'

export const store = createStore(reducers)
