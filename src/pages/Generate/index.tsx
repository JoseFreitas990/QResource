import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Image,
} from 'react-native';
import React, { useState } from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { typeOfObjectsToGenerate } from '../../constants/generate';
import { CODE_TYPES } from '../../types/enums';
import TelGen from '../../features/generateRender/TelGen';
import SmsGen from '../../features/generateRender/SmsGen';
import TextGen from '../../features/generateRender/TextGen';
import CodeService from '../../services/code.service';
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
import { COLORS, SIZES } from '../../constants/GlobalStyles';
import TextInputCustom from '../../components/TextInputCustom';
import Button from '../../components/Button';
import { Shadow } from 'react-native-shadow-2';

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
      <View>
        <FlatList
          data={typeOfObjectsToGenerate}
          keyExtractor={(item) => item.title}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => {
            const active = activeType === item.type;
            return (
              <TouchableOpacity
                style={styles.itemTypeContainer}
                onPress={() => setActiveType(item.type)}
              >
                <Shadow distance={4} offset={[2, 3]}>
                  <LinearGradient
                    style={styles.linearContainer}
                    colors={
                      active
                        ? [COLORS.yellow, COLORS.red]
                        : [COLORS.white, COLORS.silver]
                    }
                  >
                    <Image
                      source={item.image}
                      style={[
                        styles.icon,
                        {
                          tintColor: active ? COLORS.white : COLORS.black,
                        },
                      ]}
                    />
                    <Text
                      style={{
                        color: active ? COLORS.white : COLORS.black,
                      }}
                    >
                      {item.title}
                    </Text>
                  </LinearGradient>
                </Shadow>
              </TouchableOpacity>
            );
          }}
        />
      </View>
      <ScrollView style={{ flex: 0.6 }}>
        <TextInputCustom
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.nativeEvent.text)}
        />
        {renderThisType()}

        <Button
          label="Generate"
          onPress={() => console.log('hello')}
          style={{
            width: '80%',
            alignSelf: 'center',
            marginVertical: SIZES.padding,
          }}
        />
      </ScrollView>
    </View>
  );
};

export default Generate;
