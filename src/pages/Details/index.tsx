import { View, Text, SafeAreaView, Platform, Image } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
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
import { CODE_TYPES } from '../../types/enums';
import TelInputs from '../../features/inputsRender/TelInputs';
import SmsInputs from '../../features/inputsRender/SmsInputs';
import GeoInputs from '../../features/inputsRender/GeoInputs';
import UrlInputs from '../../features/inputsRender/UrlInputs';
const Details = () => {
  const route = useRoute<DetailsScreenRouterProp>();
  const { code } = route.params;

  const [type, setType] = useState(getType(code.data));
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
    if (type === CODE_TYPES.MAILTO) return <EmailInputs code={code.data} />;

    if (type === CODE_TYPES.TEL) return <TelInputs code={code.data} />;

    if (type === CODE_TYPES.SMS) return <SmsInputs code={code.data} />;

    if (type === CODE_TYPES.GEO) return <GeoInputs code={code.data} />;

    if (
      type === CODE_TYPES.URL ||
      type === CODE_TYPES.GEOM ||
      type === CODE_TYPES.GEOM2 ||
      type === CODE_TYPES.TEXT
    )
      return <UrlInputs code={code.data} />;
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
          <TouchableOpacity onPress={handleShare} style={styles.share}>
            <Image
              style={styles.shareIcon}
              source={require('../../../assets/share.png')}
            />
          </TouchableOpacity>
        </View>
        {renderInputs()}
      </View>
      <View style={styles.buttonsContainer}>
        <Button onPress={handleSave} secondary label="Save to Gallery" />
        <Button onPress={() => useCode(code.data)} label="Open Link" />
      </View>
    </View>
  );
};

export default Details;
