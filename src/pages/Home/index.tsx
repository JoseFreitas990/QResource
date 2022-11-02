import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { style } from './styles'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TextInput } from 'react-native-gesture-handler'
import { HeaderBar } from '../../components'

const Home = () => {

  const [filterInput,setFilterInput] = useState('')
  return (
    <View style={style.container}>
      <HeaderBar input={filterInput} setInput={setFilterInput} />
    </View>
  )
}

export default Home