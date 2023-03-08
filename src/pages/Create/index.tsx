import { View, Text, SafeAreaView, Button, TextInput } from 'react-native';
import React, { useEffect, useState } from 'react';
import styles from './styles';
import CodeService from '../../services/code.service';
import { useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import {
  CreateScreenRouteProp,
  HomeStackParamList,
} from '../../features/StackNavigator';
import getType from '../../utils/getType';

type HomeScreenProp = StackNavigationProp<HomeStackParamList>;

const Create = () => {
  const route = useRoute<CreateScreenRouteProp>();
  const navigation = useNavigation<HomeScreenProp>();
  const { scannedData } = route.params;
  const [name, setName] = useState<string>('');

  useEffect(() => {
    console.log(getType(scannedData));
  }, []);

  const createCode = async () => {
    if (!name || name.length > 20) return;

    CodeService.addData({
      name: name,
      data: scannedData,
      type: 'url',
    }).then(() => {
      navigation.navigate('Home');
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text>Create</Text>
      <Text>{scannedData}</Text>
      <TextInput
        onChange={(e) => setName(e.nativeEvent.text)}
        style={{
          backgroundColor: 'red',
          height: 20,
          width: '50%',
        }}
      />
      <Button onPress={() => console.log(scannedData)} title="LER DATA" />

      <Button onPress={createCode} title="Criar código" />
    </SafeAreaView>
  );
};

export default Create;
