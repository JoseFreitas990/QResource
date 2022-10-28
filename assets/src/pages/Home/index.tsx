import { View, Text } from 'react-native'
import React from 'react'
import { style } from './styles'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TextInput } from 'react-native-gesture-handler'

const Home = () => {
  return (
    <SafeAreaView style={style.container}>
      <View style={style.header}>
        <Text>QResource</Text>
        <View>
          <TextInput placeholder='Search code...'/>
        </View>
      </View>
      <Text>Home</Text>
    </SafeAreaView>
  )
}

export default Home