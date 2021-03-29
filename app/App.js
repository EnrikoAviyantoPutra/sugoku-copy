
import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native'
import { Provider } from 'react-redux'
import store from './store/index'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Home from './views/Home'
import Game from './views/Game'
import Finish from './views/Finish'

const Stack = createStackNavigator();

export default function App() {
  return ( 
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Game" component={Game} />
          <Stack.Screen name="Finish" component={Finish} />
        </Stack.Navigator>

      </NavigationContainer>

    </Provider>
  )
}





const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#40407a',
    alignItems: 'center',
    justifyContent: 'center',
  }
})
