import {
  View,
  Text,
  Button,
  TouchableOpacity,
  SafeAreaView,
  Platform,
  StatusBar,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { Camera, CameraType } from 'expo-camera';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { ScannerStackParamList } from '../../features/StackNavigator';

type ScannerScreenProp = StackNavigationProp<ScannerStackParamList>;

const Scan = () => {
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [scanned, setScanned] = useState<boolean>(false);

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
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Camera
        onBarCodeScanned={scanned ? undefined : onBarCodeScanned}
        style={{ flex: 1, paddingTop: 50 }}
      >
        <View>
          <View
            style={{
              backgroundColor: 'lightcoral',
              width: 30,
              height: 30,
              marginLeft: 15,
            }}
          />
        </View>
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end' }}
        >
          <TouchableOpacity
            onPress={() => setScanned(false)}
            style={{
              backgroundColor: 'lightgreen',
              width: 30,
              height: 30,
              margin: 20,
            }}
          />
          <TouchableOpacity
            onPress={skipScan}
            style={{
              backgroundColor: 'lightcoral',
              width: 30,
              height: 30,
              margin: 20,
            }}
          />
        </View>
      </Camera>
    </View>
  );
};

export default Scan;
