

const initialState = {
  board: [],
  result: [],
  status: 'unsolved',
  isWin: 'true',
  loading: 'false'

}

function reducer(state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case 'SETINITIAL/BOARD':
      return { ...state, board: payload }
    case 'SETRESULT/BOARD':
      return { ...state, result: payload }
    case 'SOLVE/BOARD':
      return { ...state, board: payload }
    case 'RESULT/BOARD':
      return { ...state, result: payload }
    case 'STATUS/VALIDATE':
      return { ...state, status: payload }
    case 'ISWIN/STATUS':
      return { ...state, isWin: payload }
    case 'LOADING/BOARD':
      return {...state, loading: payload}
    default:
      return state
  }

}

export default reducer

