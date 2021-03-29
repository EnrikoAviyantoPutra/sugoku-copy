
import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, Image } from 'react-native'
import { RadioButton } from 'react-native-paper'
import { color } from 'react-native-reanimated';
import { useDispatch, useSelector } from 'react-redux'
import { statusValidate } from '../store/action'


export default function Home({ navigation }) {
  const dispatch = useDispatch()
  const [playerName, setPlayerName] = useState('')
  const [checked, setChecked] = useState('')
  const loading = useSelector(state => state.loading.loading)
  console.log(playerName)
  console.log(checked)

  const changePage = () => {
    Alert.alert(
      'SUGOKU GAME',
      `Hi ${playerName}`,
      [
        { text: `Let's Play`, onPress: () => console.log('OK Pressed') }
      ],
      { cancelable: false }
    )
    dispatch(statusValidate('unsolved'))
    navigation.navigate('Game', [playerName, checked])
    setPlayerName('')
    setChecked('easy')

  } 
  return (
    <>
      <View style={styles.container}>
      <View>
        <Image style={styles.logo} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQTJdlb6NJQ9rVKtiTnUKSLrtekf11NiIFow&usqp=CAU'}} />
      </View>
        <Text style={styles.title}>S U G O K U </Text>
          <Text style={styles.font}>Input Your Name:</Text>
        <View style={{justifyContent: 'center'}}>
          <TextInput value={playerName} style={{ backgroundColor: '#ffffff', margin: 10, textAlign: 'center', width: 200, height: 20 }} onChangeText={(e) => setPlayerName(e)} ></TextInput>
        </View>

        <Text style={styles.font} >Select Difficulty: </Text>
        <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={styles.title_button}>Easy</Text>
            <RadioButton
              value="easy"  
              status={checked === 'easy' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('easy')}
            />
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={styles.title_button}>Medium</Text>
            <RadioButton
              value="medium"
              status={checked === 'medium' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('medium')}
            />
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={styles.title_button}>Hard</Text>
            <RadioButton
              value="hard"
              status={checked === 'hard' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('hard')}
            />
          </View>
        </View>
        <View>
          <Button title="START" style={{ margin: 10 }} disabled={(playerName && checked) === '' ? true : false} onPress={() => changePage()} />
        </View>
      </View>


    </>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#34495e',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontFamily: 'monospace',
    fontSize: 25,
    marginBottom: 30,
    marginTop: 30,
    color: '#ecf0f1'
  },
  title_button: {
    fontSize: 20,
    color: '#7f8c8d'
  },
  logo: {
    width: 100,
    height: 95
  },
  font: {
    color: '#ecf0f1',
    fontFamily: 'notoserif'
  }
})
