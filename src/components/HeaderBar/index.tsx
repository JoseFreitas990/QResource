import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Platform,
  StatusBar,
  Image,
} from 'react-native';
import React, { useState } from 'react';
import { COLORS, SIZES } from '../../constants/GlobalStyles';
import styles from './styles';
import { LinearGradient } from 'expo-linear-gradient';

type Props = {
  input: string;
  setInput: (value: string) => void;
};

const HeaderBar = (props: Props) => {
  const { input, setInput } = props;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>QResource</Text>
      <View style={styles.inputContainer}>
        <Image
          style={styles.icon}
          source={require('../../../assets/loupe.png')}
        />
        <TextInput
          value={input}
          onChangeText={(e) => setInput(e)}
          style={styles.input}
          placeholder="Search"
          hitSlop={{ top: 20, bottom: 20, left: 35, right: 35 }}
        />
        {input && (
          <TouchableOpacity onPress={() => setInput('')} style={styles.icon} />
        )}
      </View>
    </SafeAreaView>
  );
};

export default HeaderBar;
