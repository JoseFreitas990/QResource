import { View, Text, SafeAreaView, Platform } from 'react-native';
import React, { useEffect, useRef } from 'react';
import { DetailsScreenRouterProp } from '../../features/navigation/StackNavigator';
import { useRoute } from '@react-navigation/native';
import QRCode from 'react-native-qrcode-svg';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as Sharing from 'expo-sharing';
import * as FileSystem from 'expo-file-system';
import * as MediaLibrary from 'expo-media-library';
import useCode from '../../utils/useCode';
import styles from './styles';
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS, SIZES } from '../../constants/GlobalStyles';
import Button from '../../components/Button';
import EmailInputs from '../../features/inputsRender/EmailInputs';
import getType from '../../utils/getType';
const Details = () => {
  const route = useRoute<DetailsScreenRouterProp>();
  const { code } = route.params;
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

  function renderInputs() {
    return <EmailInputs code={code.data} />;
    // return <Text>{typeof code.data}</Text>;
  }

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[COLORS.orange, COLORS.yellow]}
        start={[0.3, 0]}
        style={styles.QRContainer}
      >
        <QRCode
          value={code.data}
          size={225}
          color="rgba(25,25,25,1)"
          backgroundColor="transparent"
          getRef={(c) => (svg = c)}
        />
      </LinearGradient>

      <View style={styles.informationContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{code.name}</Text>
          <TouchableOpacity>
            <Text>SH</Text>
          </TouchableOpacity>
        </View>
        {renderInputs()}
      </View>
      <View style={styles.buttonsContainer}>
        <Text>{getType(code.data)}</Text>
        <Button secondary label="Save to Gallery" />
        <Button label="Open Link" />
      </View>
    </View>
  );
};

export default Details;
