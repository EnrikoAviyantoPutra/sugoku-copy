import React from 'react'
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native'


export default function Finish({ route, navigation }) {

  // console.log(props)

  return (
    <>
      <View style={styles.container}>
      <Text style={{fontSize: 25, fontFamily: 'Roboto', fontWeight: '500' }} >CONGRATULATION YOU WON</Text>
      {/* <Text style={{fontSize: 20, fontFamily: 'monospace' }} >{route.params}</Text> */}

        <View>
          <Image style={styles.logo} source={{ uri: 'https://koshercowboy.com/wp-content/uploads/2020/12/winner.gif' }} />
        </View>

        <Button title='Play Again ?' onPress={() => navigation.navigate('Home')} />

      </View>
    </>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 200,
    height: 180
  },
})