import {
  View,
  Text,
  Button,
  TouchableOpacity,
  SafeAreaView,
  Platform,
  StatusBar,
  Dimensions,
  Image,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { Camera, CameraType, FlashMode } from 'expo-camera';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { ScannerStackParamList } from '../../features/navigation/StackNavigator';

type ScannerScreenProp = StackNavigationProp<ScannerStackParamList>;

const Scan = () => {
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [scanned, setScanned] = useState<boolean>(false);
  const [flash, setFlash] = useState(FlashMode.on);
  const windowHeight = Dimensions.get('screen').height;

  const isFocused = useIsFocused();

  useEffect(() => {
    setScanned(false);
  }, [isFocused]);

  const navigator = useNavigation<ScannerScreenProp>();

  const onBarCodeScanned = ({ type, data }: any) => {
    setScanned(true);
    navigator.navigate('Create', { scannedData: data });
  };

  const skipScan = ({ type, data }: any) => {
    setScanned(true);
    navigator.navigate('Create', {
      scannedData: 'BAOB AOBMA QWEM QWºE QW WQOEQWEWQº',
    });
  };

  if (!permission) {
    // Camera permissions are still loading
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Text style={{ textAlign: 'center' }}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }
  return (
    <View style={{ flex: 1, justifyContent: 'center', height: windowHeight }}>
      <Camera
        onBarCodeScanned={scanned ? undefined : onBarCodeScanned}
        flashMode={flash}
        style={{ flex: 1, paddingTop: 50 }}
      >
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end' }}
        >
          <TouchableOpacity
            onPress={() =>
              flash == FlashMode.off
                ? setFlash(FlashMode.torch)
                : setFlash(FlashMode.off)
            }
            style={{
              alignItems: 'center',
              width: 60,
              margin: 20,
            }}
          >
            <Image
              style={{
                tintColor: 'white',
                width: 50,
                height: 50,
                resizeMode: 'contain',
              }}
              source={
                flash === FlashMode.torch
                  ? require('../../../assets/no-flash.png')
                  : require('../../../assets/flash.png')
              }
            />
            <Text
              style={{ color: 'white', textAlign: 'center', paddingTop: 5 }}
            >
              {flash === FlashMode.torch ? 'Flash off' : 'Flash on'}
            </Text>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
};

export default Scan;
