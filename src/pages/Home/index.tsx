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
import CodeCard from '../../components/CodeCard';

type HomeScreenProp = StackNavigationProp<HomeStackParamList>;

const Home = () => {
  const [codes, setCodes] = useState([]);
  const [filterText, setFilterText] = useState('');
  const [filteredCode, setFilteredCode] = useState([]);

  const isFocused = useIsFocused();
  const navigation = useNavigation<HomeScreenProp>();

  const getAllCodes = async () => {
    CodeService.findAll().then((response: any) => {
      setCodes(response._array);
    });
  };

  const filterCode = () => {
    const filteredData = codes.filter((value: ICode) =>
      value.name.toLowerCase().includes(filterText.toLowerCase())
    );

    setFilteredCode(filteredData);
  };

  useEffect(() => {
    filterCode();
  }, [filterText]);
  useEffect(() => {
    getAllCodes();
  }, [isFocused]);

  return (
    <View style={style.container}>
      <HeaderBar input={filterText} setInput={setFilterText} />
      <FlatList
        style={{
          width: '90%',
          marginTop: 10,
        }}
        showsHorizontalScrollIndicator={false}
        data={filterText.length === 0 ? codes : filteredCode}
        keyExtractor={(item: ICode) => item.id.toString()}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate('Details', { code: item })}
              style={{
                height: 75,
                marginVertical: 10,
                width: '100%',
                alignItems: 'center',
              }}
            >
              <CodeCard name={item.name} value={item.data} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default Home;
