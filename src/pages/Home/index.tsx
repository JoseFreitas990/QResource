import {
  View,
  Text,
  Button,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { style } from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TextInput } from 'react-native-gesture-handler';
import { HeaderBar } from '../../components';
import CodeService from '../../services/code.service';
import { ICode } from '../../types';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import {
  DetailsScreenRouterProp,
  HomeStackParamList,
} from '../../features/navigation/StackNavigator';
import { StackNavigationProp } from '@react-navigation/stack';

type HomeScreenProp = StackNavigationProp<HomeStackParamList>;

const Home = () => {
  const [codes, setCodes] = useState([]);
  const isFocused = useIsFocused();
  const navigation = useNavigation<HomeScreenProp>();
  const getAllCodes = async () => {
    CodeService.findAll().then((response: any) => {
      setCodes(response._array);
    });
  };
  useEffect(() => {
    getAllCodes();
  }, [isFocused]);

  const [filterInput, setFilterInput] = useState('');
  return (
    <View style={style.container}>
      <HeaderBar input={filterInput} setInput={setFilterInput} />
      <FlatList
        data={codes}
        keyExtractor={(item: ICode) => item.id.toString()}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate('Details', { code: item })}
              style={{ backgroundColor: 'red', marginVertical: 10, height: 50 }}
            >
              <Text>{item.data}</Text>
            </TouchableOpacity>
          );
        }}
      />
      <Button onPress={() => console.log(codes)} title="console log" />
    </View>
  );
};

export default Home;
