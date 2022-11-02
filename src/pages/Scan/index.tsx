import { View, Text, Button, TouchableOpacity, SafeAreaView, Platform, StatusBar } from "react-native";
import React from "react";
import { Camera } from "expo-camera";

const Scan = () => {

  const [permission,requestPermission] = Camera.useCameraPermissions();

  return (
    <View style={{flex:1,justifyContent:'center',  }}>
      <Camera style={{flex:1,paddingTop:50}}>
      <View>
      <View style={{backgroundColor:'lightcoral',width:30,height:30,marginLeft:15}}/>
      </View>
      <View style={{flex:1,justifyContent:'center',alignItems:'flex-end'}}>
      <View style={{backgroundColor:'lightcoral',width:30,height:30,margin:20}}/>
      <View style={{backgroundColor:'lightcoral',width:30,height:30,margin:20}}/>
     
      </View>
       
      </Camera>
    </View>
  );

};

export default Scan;
