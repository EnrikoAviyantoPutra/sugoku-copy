import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import boardReducer from './reducer/Board'
import resultReducer from './reducer/Board'
import statusReducer from './reducer/Board'
import isWinReducer from './reducer/Board'
import loadingReducer from './reducer/Board'

const rootReducer = combineReducers ({
  result: resultReducer,
  board: boardReducer,
  status: statusReducer,
  isWin: isWinReducer,
  loading: loadingReducer

})
const store = createStore(rootReducer, applyMiddleware(thunk))

export default store