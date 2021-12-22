import { combineReducers } from 'redux'
import { reserveReducer } from './reserves/reducer'

export const reducers = combineReducers({
  reserveReducer

})

export type RootState = ReturnType<typeof reducers>
