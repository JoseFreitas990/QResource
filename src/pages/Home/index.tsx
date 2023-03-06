import { View, Text, Button, ScrollView, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import { style } from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TextInput } from 'react-native-gesture-handler';
import { HeaderBar } from '../../components';
import CodeService from '../../services/code.service';
import { ICode } from '../../types';
import { useIsFocused } from '@react-navigation/native';

const Home = () => {
  const [codes, setCodes] = useState([]);
  const isFocused = useIsFocused();

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
            <>
              <Text>{item.data}</Text>
            </>
          );
        }}
      />
      <Button onPress={() => console.log(codes)} title="console log" />
    </View>
  );
};

export default Home;
