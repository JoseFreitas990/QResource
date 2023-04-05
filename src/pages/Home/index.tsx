import { View, Animated } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { style } from './styles';
import { HeaderBar } from '../../components';
import CodeService from '../../services/code.service';
import { ICode } from '../../types';
import { useIsFocused } from '@react-navigation/native';

import CodeCard from '../../components/CodeCard';

const Home = () => {
  const [codes, setCodes] = useState([]);
  const [filterText, setFilterText] = useState('');
  const [filteredCode, setFilteredCode] = useState([]);
  const scrollY = useRef(new Animated.Value(0)).current;

  const isFocused = useIsFocused();

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

      <Animated.FlatList
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
        showsVerticalScrollIndicator={false}
        data={filterText.length === 0 ? codes : filteredCode}
        keyExtractor={(item: ICode) => item.id.toString()}
        renderItem={({ item, index }) => {
          const opacityInputRange = [-1, 0, 100 * index, 100 * (index + 1)];
          const inputRange = [-1, 0, 125 * index, 125 * (index + 2)];
          const scale = scrollY.interpolate({
            inputRange,
            outputRange: [1, 1, 1, 0],
          });

          const opacity = scrollY.interpolate({
            inputRange: opacityInputRange,
            outputRange: [1, 1, 1, 0],
          });
          return (
            <CodeCard
              code={item}
              name={item.name}
              value={item.data}
              id={item.id}
              scale={scale}
              opacity={opacity}
            />
          );
        }}
      />
    </View>
  );
};

export default Home;
