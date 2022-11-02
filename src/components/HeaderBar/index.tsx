import { View, Text, SafeAreaView, StyleSheet, TextInput, TouchableOpacity, Platform, StatusBar } from 'react-native'
import React, { useState } from 'react'
import { COLORS, SIZES } from '../../constants/GlobalStyles'


type Props = {
  input:string,
  setInput: (value:string) => void,
}

const HeaderBar = (props:Props) => {

  const {input,setInput} = props
  
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>QResource</Text>
      <View style={styles.inputContainer}> 
      <View style={styles.icon}/>
      <TextInput value={input} onChangeText={e => setInput(e)} style={styles.input} placeholder='Search'/>
      {input && <TouchableOpacity onPress={() => setInput("")}  style={styles.icon}/>}

      </View>
    </SafeAreaView>
  )
}

export default HeaderBar

const styles = StyleSheet.create({
  container:{
    width:"100%",
    backgroundColor:COLORS.primary,
    flexDirection:'column',
    borderBottomLeftRadius:35,
    borderBottomRightRadius:35,
    justifyContent:"flex-start",
    alignItems:'center',
    paddingTop:Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  header:{
    fontSize:SIZES.h1,
    fontWeight:"200",
    width:"80%",    paddingBottom:10
    
  },
  inputContainer:{
    width:"80%",
    borderRadius:SIZES.radius,
    height:35,
    flexDirection:'row',
    justifyContent:"space-between",
    alignItems:'center',
    backgroundColor:COLORS.lightGray3,
    paddingLeft:10,
    paddingRight:10,
    marginBottom:10,
  },
  input:{
    flex:1,
    marginHorizontal:SIZES.radius

  },
  icon:{
    width:SIZES.padding,
    height:SIZES.padding,
    backgroundColor:"lightcoral"
  }
})