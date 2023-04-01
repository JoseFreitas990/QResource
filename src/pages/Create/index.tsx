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
      navigation.navigate('List');
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text>Back Arrow</Text>
      <Text>Title</Text>
      <Text>Code Type</Text>
      <TextInputCustom placeholder="Title" />
      {
        // TODO: inputsRender
      }
      <View style={styles.buttonsContainer}>
        <Button onPress={() => console.log()} secondary label="Use Code" />
        <Button onPress={() => function () {}} label="Save Code" />
      </View>
    </SafeAreaView>
  );
};

export default Create;
