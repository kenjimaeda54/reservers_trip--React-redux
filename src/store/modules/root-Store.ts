import { combineReducers } from 'redux'
import { reserveReducer } from '../modules/reserves'

export const reducers = combineReducers({
  reserveReducer

})

export type RootState = ReturnType<typeof reducers>
