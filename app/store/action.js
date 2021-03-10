import { Alert } from "react-native"

export function setInitial(payload) {
  return { type: 'SETINITIAL/BOARD', payload }

}

export function setResultBoard(payload) {
  return { type: 'SETRESULT/BOARD', payload }

}

export function sugokuSolve(payload) {
  return { type: 'SOLVE/BOARD', payload }

}

export function statusValidate(payload) {
  return {type: 'STATUS/VALIDATE', payload}
}

export function changeLoading(payload){
  return {type: 'LOADING/BOARD', payload}
}

export function fetchInitialData(payload) {
  // console.log('masuk', payload);
  return async (dispatch) => {
    try {
      dispatch(changeLoading(true))
      const response = await fetch(`https://sugoku.herokuapp.com/board?difficulty=${payload}`)
      const data = await response.json()
      // console.log(data, '_--------------------------------------------------------------------')
      dispatch(setInitial(data))
      dispatch(setResultBoard(data))
      dispatch(changeLoading(false))


    } catch (err) {
      console.log(err)
    }
  }
}

export function solveBoard(payload) {
  const encodeBoard = (board) => board.reduce((result, row, i) => result + `%5B${encodeURIComponent(row)}%5D${i === board.length - 1 ? '' : '%2C'}`, '')

  const encodeParams = (params) =>
    Object.keys(params)
      .map(key => key + '=' + `%5B${encodeBoard(params[key])}%5D`)
      .join('&');
  const data = { board: payload }
  return async (dispatch) => {
    try {
      const response = await fetch('https://sugoku.herokuapp.com/solve', {
        method: 'POST',
        body: encodeParams(data),
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
      })
      const dataSolver = await response.json()
      console.log(dataSolver.solution, '<><><><><><><><><><><><><><>')
      dispatch(changeResultBoard({board: dataSolver.solution}))

    } catch (err) {
      console.log(err)
    }

  }
}

export function validateBoard(payload) {
  const encodeBoard = (board) => board.reduce((result, row, i) => result + `%5B${encodeURIComponent(row)}%5D${i === board.length - 1 ? '' : '%2C'}`, '')

  const encodeParams = (params) =>
    Object.keys(params)
      .map(key => key + '=' + `%5B${encodeBoard(params[key])}%5D`)
      .join('&');
  const data = { board: payload }
  return async (dispatch) => {
    try {
      const response = await fetch('https://sugoku.herokuapp.com/validate', {
        method: 'POST',
        body: encodeParams(data),
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
      })
      const dataSolver = await response.json()
      console.log(dataSolver.status, '<><><><><><><><><><><><><><>')
      dispatch(statusValidate(dataSolver.status))

      if (dataSolver.status === 'solved') {
        Alert.alert(
          'SOLVED',
          `Your're Board is Perfect`,
          [
            { text: `Continue`, onPress: () => console.log('OK Pressed') }
          ],
          { cancelable: false }
        )
      } else {
        //   navigation.navigate('Finish', route.params[0] )
        Alert.alert(
          'NOT SOLVED',
          `Your're Board Still Not Right`,
          [
            { text: `Fix your Board`, onPress: () => console.log('OK Pressed') }
          ],
          { cancelable: false }
        )
      }
      
    } catch (err) {
      console.log(err)
    }

  }
  
}
export function changeResultBoard(payload) {
  console.log(payload, 'ini di action changeResultBoard')
  return { type: 'RESULT/BOARD', payload }
  
}

export function changeIsWin(payload) {
  // console.log(payload, 'ini di action changeResultBoard')
  return { type: 'ISWIN/STATUS', payload }
  
}
