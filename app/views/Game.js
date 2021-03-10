
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, ActivityIndicator } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { fetchInitialData } from '../store/action'
import { solveBoard, validateBoard } from '../store/action'
import Board from '../components/Board'

export default function Game({ route, navigation }) {
  const dispatch = useDispatch()
  const dataBoard = useSelector(state => state.board.board)
  const resultBoard = useSelector(state => state.result.result)
  const status = useSelector(state => state.status.status)
  const loading = useSelector(state => state.loading.loading)


console.log(route.params[1])
  useEffect(() => {
    dispatch(fetchInitialData(route.params[1]))
  }, [dispatch])
  
  useEffect(() => {
    if (status === 'solved') {
      navigation.navigate('Finish', route.params[0])
      }
    }, [status])
    
    
    const solver = () => {
      dispatch(solveBoard(dataBoard.board))
    }
    
    function validate() {
      dispatch(validateBoard(resultBoard.board))
      console.log(status) 
  }
  if (loading) {
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#ffffff" />
    </View>
    
  }
  if (dataBoard) {
    return (
      <>
        <View style={styles.container}>
        <View>
          <Text style={styles.info}> Player:  {route.params[0]}</Text>
        </View>
        <View>
          <Text style={styles.info}> Difficulty:  {route.params[1]}</Text>
        </View>
          {
            resultBoard.board?.map((numbers, rowId) => {
              return (
                <View style={{ flexDirection: 'row' }}>
                  {
                    numbers.map((number, colId) => {
                      return (
                        <Board key={colId} number={number} rowId={rowId} colId={colId} />
                      )
                    })
                  }
                </View>
              )
            })
          }
          <View style={styles.button}>
            <View>
              <Button title="Validate" style={{ marginRight: 4 }} onPress={validate} />
            </View>
            <View>
              <Button title="Solve" onPress={solver} />
            </View>
          </View>
        </View>
      </>
    )
  }

}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#34495e',
    alignItems: 'center',
    justifyContent: 'center',
  },

  input: {
    height: 40,
    flexWrap: 'wrap',
    borderColor: 'gray',
    borderWidth: 1
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
    width: 200
  },
  info:{
    color: '#ecf0f1'
  }
});
