import { combineReducers } from 'redux'
import { reducerReserve } from './reserve/reducer'

// vou importar todos nossos reducers
// export dessa forma para que o combineReducers possa acessar
export default combineReducers({
  reducerReserve
})
