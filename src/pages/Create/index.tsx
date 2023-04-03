import { Text, SafeAreaView, TextInput, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import styles from './styles';
import CodeService from '../../services/code.service';
import { useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import {
  CreateScreenRouteProp,
  HomeStackParamList,
} from '../../features/navigation/StackNavigator';
import getType from '../../utils/getType';
import Button from '../../components/Button';
import TextInputCustom from '../../components/TextInputCustom';
import { CODE_TYPES } from '../../types/enums';
import EmailInputs from '../../features/inputsRender/EmailInputs';
import TelInputs from '../../features/inputsRender/TelInputs';
import SmsInputs from '../../features/inputsRender/SmsInputs';
import GeoInputs from '../../features/inputsRender/GeoInputs';
import UrlInputs from '../../features/inputsRender/UrlInputs';
import useCode from '../../utils/useCode';

type HomeScreenProp = StackNavigationProp<HomeStackParamList>;

const Create = () => {
  const route = useRoute<CreateScreenRouteProp>();
  const navigation = useNavigation<HomeScreenProp>();
  const { scannedData } = route.params;
  const [name, setName] = useState<string>('');
  const [type, setType] = useState(getType(scannedData));

  const createCode = async () => {
    const req = CodeService.addData({
      name: name,
      data: scannedData,
      type: type,
    });

    req.then(() => {
      navigation.navigate('List');
      setName('');
    });
  };

  function renderInputs() {
    if (type === CODE_TYPES.MAILTO)
      return <EmailInputs type="MAILTO" code={scannedData} />;
    if (type === CODE_TYPES.MATMSG)
      return <EmailInputs type="MATMSG" code={scannedData} />;

    if (type === CODE_TYPES.TEL) return <TelInputs code={scannedData} />;

    if (type === CODE_TYPES.SMS) return <SmsInputs code={scannedData} />;

    if (type === CODE_TYPES.GEO) return <GeoInputs code={scannedData} />;

    if (
      type === CODE_TYPES.URL ||
      type === CODE_TYPES.GEOM ||
      type === CODE_TYPES.GEOM2 ||
      type === CODE_TYPES.TEXT
    )
      return <UrlInputs code={scannedData} />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.informationContainer}>
        <Text>Back Arrow</Text>
        <Text style={styles.title}>Nice Scan!</Text>
        <Text style={styles.codeType}>Code Type</Text>
        <TextInputCustom
          placeholder="Title"
          onChange={(e) => setName(e.nativeEvent.text)}
        />
        {renderInputs()}
      </View>

      <View style={styles.buttonsContainer}>
        <Button
          onPress={() => useCode(scannedData)}
          secondary
          label="Use Code"
        />
        <Button onPress={createCode} label="Save Code" />
      </View>
    </SafeAreaView>
  );
};

export default Create;
