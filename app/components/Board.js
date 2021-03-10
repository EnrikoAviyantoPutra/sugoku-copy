import React from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { changeResultBoard } from '../store/action'


function Board(props) {
  const dispatch = useDispatch()
  const { number, rowId, colId } = props
  const result = useSelector(state => state.result.result)
  const initial = useSelector(state => state.board.board)


  const changeInput = (input, row, col) => {
    // console.log({ input, row, col })
    let validateBoard = []
    for (let i = 0; i < result.board.length; i++) {
      let arr1 = [...result.board[i]]
      validateBoard.push(arr1)
    }

    validateBoard[row][col] = +input
    // console.log(result, 'ini adalah result setelah diedit')
    // console.log(validateBoard, '..........................................................')
    dispatch(changeResultBoard({ board: validateBoard }))

  }
  
  return (
    <>

      <View style={styles.box}>
        <TextInput
          editable={initial.board[rowId][colId] === 0 ? true : false}
          maxLength={1}
          style={initial.board[rowId][colId] === 0 ? styles.input : styles.input2}
          defaultValue={number == 0 ? '': number.toString()}
          keyboardType='numeric'
          onChangeText={(e) => e.length < 2 ? changeInput(e, rowId, colId) : ''} />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  box: {
    borderWidth: 1,
    width: 30,
    height: 30
  },
  input: {
    height: 30,
    flexWrap: 'wrap',
    borderColor: 'gray',
    backgroundColor: '#ecf0f1',
    borderWidth: 1,
    fontSize: 15,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  input2: {
    height: 30,
    flexWrap: 'wrap',
    backgroundColor: '#16a085',
    borderColor: 'gray',
    borderWidth: 1,
    fontSize: 15,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  }
});



export default Board