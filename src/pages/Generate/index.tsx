import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Button,
} from 'react-native';
import React, { useState } from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { typeOfObjectsToGenerate } from '../../constants/generate';
import { CODE_TYPES } from '../../types/enums';
import TelRender from '../../features/generateRender/TelRender';
import SmsRender from '../../features/generateRender/SmsRender';
import TextRender from '../../features/generateRender/TextRender';
import CodeService from '../../services/code.service';
import { ICode } from '../../types';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { HomeStackParamList } from '../../features/navigation/StackNavigator';
import useStore from '../../hooks/useStore';
import EmailRender from '../../features/generateRender/EmailRender';
import UrlRender from '../../features/generateRender/UrlRender';
import WifiRender from '../../features/generateRender/WiFiRender';

type HomeScreenProp = StackNavigationProp<HomeStackParamList>;

const Generate = () => {
  const navigation = useNavigation<HomeScreenProp>();
  const { generatingData, clearData } = useStore();
  const [activeType, setActiveType] = useState(CODE_TYPES.TEL);

  const [name, setName] = useState<string>('abba');

  function renderThisType() {
    if (activeType === CODE_TYPES.TEL) {
      return <TelRender />;
    } else if (activeType === CODE_TYPES.SMS) {
      return <SmsRender />;
    } else if (activeType === CODE_TYPES.MATMSG) {
      return <EmailRender />;
    } else if (activeType === CODE_TYPES.URL) {
      return <UrlRender />;
    } else if (activeType === CODE_TYPES.WIFI) {
      return <WifiRender />;
    } else return <TextRender />;
  }

  const generateCode = async () => {
    const req = CodeService.addData({
      name,
      data: generatingData,
      type: activeType,
    });

    req.then(() => {
      navigation.navigate('Home');
      clearData();
    });
  };

  return (
    <SafeAreaView>
      <Text>Aqui {generatingData}</Text>
      <FlatList
        data={typeOfObjectsToGenerate}
        keyExtractor={(item) => item.title}
        horizontal
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              style={{
                marginTop: 50,
                marginHorizontal: 15,
                height: 50,
                width: 50,
                backgroundColor: 'orange',
              }}
              onPress={() => setActiveType(item.type)}
            >
              <Text>{item.title}</Text>
            </TouchableOpacity>
          );
        }}
      />
      {renderThisType()}
      <Button title="Generate" onPress={generateCode} />
    </SafeAreaView>
  );
};

export default Generate;
