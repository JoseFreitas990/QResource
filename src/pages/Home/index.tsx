import { View, Text, Button, ScrollView, TouchableOpacity } from 'react-native';
import React, { useCallback, useEffect, useRef, useState } from 'react';
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
import {
  FlatList,
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';
import {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

const Home = () => {
  const [codes, setCodes] = useState([]);
  const [filterText, setFilterText] = useState('');
  const [filteredCode, setFilteredCode] = useState([]);
  const flatListRef = useRef(null);

  const isFocused = useIsFocused();

  const getAllCodes = async () => {
    CodeService.findAll().then((response: any) => {
      setCodes(response._array);
    });
  };

  const onDismiss = useCallback((codeID: number) => {
    CodeService.deleteById(codeID);
  }, []);

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
        ref={flatListRef}
        style={{
          width: '90%',
          marginTop: 10,
        }}
        showsHorizontalScrollIndicator={false}
        data={filterText.length === 0 ? codes : filteredCode}
        keyExtractor={(item: ICode) => item.id.toString()}
        renderItem={({ item }) => {
          return (
            <CodeCard
              simultaneousHandlers={flatListRef}
              code={item}
              name={item.name}
              value={item.data}
              id={item.id}
            />
          );
        }}
      />
    </View>
  );
};

export default Home;
