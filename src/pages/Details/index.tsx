import {
  View,
  Text,
  SafeAreaView,
  Button,
  Platform,
  PermissionsAndroid,
  Share,
} from 'react-native';
import React, { useEffect, useRef } from 'react';
import { DetailsScreenRouterProp } from '../../features/StackNavigator';
import { useRoute } from '@react-navigation/native';
import QRCode from 'react-native-qrcode-svg';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as Sharing from 'expo-sharing';
import * as FileSystem from 'expo-file-system';
import * as Permissions from 'expo-file-system';
import * as MediaLibrary from 'expo-media-library';

const Details = () => {
  const route = useRoute<DetailsScreenRouterProp>();
  const { codeData } = route.params;
  let svg = useRef(null);
  let dataUrl = '';

  useEffect(() => {
    generateQR();
  }, []);

  const generateQR = () => {
    // @ts-ignore
    svg?.toDataURL(callback);
  };

  function callback(dataURL: any) {
    dataUrl = dataURL;
  }

  const handleShare = async () => {
    const filePath = FileSystem.documentDirectory + 'fileName.jpg';

    await FileSystem.writeAsStringAsync(filePath, dataUrl, {
      encoding: 'base64',
    });
    await Sharing.shareAsync(filePath, { mimeType: 'image/png' });
  };

  const handleSave = async () => {
    try {
      const filePath = FileSystem.documentDirectory + 'fileName.jpg';

      await FileSystem.writeAsStringAsync(filePath, dataUrl, {
        encoding: 'base64',
      });
      // Request device storage access permission
      const { status } = await MediaLibrary.requestPermissionsAsync();
      if (status === 'granted') {
        // Save image to media library
        await MediaLibrary.saveToLibraryAsync(filePath);

        console.log('Image successfully saved');
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <SafeAreaView>
      <Text>{codeData.name}</Text>
      <Text>{codeData.data}</Text>
      <Button title="SAVE THE CODE" />
      <TouchableOpacity
        style={{ height: 30, marginVertical: 20, backgroundColor: 'yellow' }}
      >
        <Text>SHARE THE CODE</Text>
      </TouchableOpacity>

      <View style={{ backgroundColor: 'red' }}>
        <QRCode
          value={codeData.data}
          backgroundColor="transparent"
          getRef={(c) => (svg = c)}
        />
      </View>

      <Button onPress={() => generateQR()} title="GENERATE" />
      <Button onPress={handleSave} title="SAVE" />
      <Button onPress={handleShare} title="share" />
    </SafeAreaView>
  );
};

export default Details;
