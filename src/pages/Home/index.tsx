import { View, Text } from 'react-native'
import React from 'react'
import { style } from './styles'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TextInput } from 'react-native-gesture-handler'
import { HeaderBar } from '../../components'

const Home = () => {
  return (
    <View style={style.container}>
      <HeaderBar/>
    </View>
  )
}

export default Home