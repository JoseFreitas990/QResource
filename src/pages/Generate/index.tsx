import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Button,
  ScrollView,
} from 'react-native';
import React, { useState } from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { typeOfObjectsToGenerate } from '../../constants/generate';
import { CODE_TYPES } from '../../types/enums';
import TelGen from '../../features/generateRender/TelGen';
import SmsGen from '../../features/generateRender/SmsGen';
import TextGen from '../../features/generateRender/TextGen';
import CodeService from '../../services/code.service';
import { ICode } from '../../types';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { HomeStackParamList } from '../../features/navigation/StackNavigator';
import useStore from '../../hooks/useStore';
import EmailGen from '../../features/generateRender/EmailGen';
import UrlGen from '../../features/generateRender/UrlGen';
import WifiGen from '../../features/generateRender/WiFiGen';
import GeoGen from '../../features/generateRender/GeoGen';
import { HeaderBar } from '../../components';
import styles from './styles';
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS } from '../../constants/GlobalStyles';
import TextInputCustom from '../../components/TextInputCustom';

type HomeScreenProp = StackNavigationProp<HomeStackParamList>;

const Generate = () => {
  const navigation = useNavigation<HomeScreenProp>();
  const { generatingData, clearData } = useStore();
  const [activeType, setActiveType] = useState(CODE_TYPES.TEL);

  const [title, setTitle] = useState<string>('');

  function renderThisType() {
    if (activeType === CODE_TYPES.TEL) {
      return <TelGen />;
    } else if (activeType === CODE_TYPES.SMS) {
      return <SmsGen />;
    } else if (activeType === CODE_TYPES.MATMSG) {
      return <EmailGen />;
    } else if (activeType === CODE_TYPES.URL) {
      return <UrlGen />;
    } else if (activeType === CODE_TYPES.WIFI) {
      return <WifiGen />;
    } else if (activeType === CODE_TYPES.GEO) {
      return <GeoGen />;
    } else return <TextGen />;
  }

  const generateCode = async () => {
    const req = CodeService.addData({
      name: title,
      data: generatingData,
      type: activeType,
    });

    req.then(() => {
      navigation.navigate('List');
      clearData();
    });
  };

  return (
    <View style={styles.container}>
      <HeaderBar input={''} setInput={() => ''} />
      <Text>Aqui {generatingData}</Text>
      <FlatList
        data={typeOfObjectsToGenerate}
        keyExtractor={(item) => item.title}
        horizontal
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              style={styles.itemTypeContainer}
              onPress={() => setActiveType(item.type)}
            >
              <LinearGradient
                style={styles.linearContainer}
                colors={[COLORS.red, COLORS.black]}
              >
                <View style={styles.icon}></View>
                <Text style={styles.typeText}>{item.title}</Text>
              </LinearGradient>
            </TouchableOpacity>
          );
        }}
      />
      <ScrollView>
        <TextInputCustom
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.nativeEvent.text)}
        />

        {renderThisType()}

        <Button title="Generate" onPress={generateCode} />
        <Button title="Generate" onPress={generateCode} />
        <Button title="Generate" onPress={generateCode} />
      </ScrollView>
    </View>
  );
};

export default Generate;
