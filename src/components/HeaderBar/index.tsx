import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Platform,
  StatusBar,
} from 'react-native';
import React, { useState } from 'react';
import { COLORS, SIZES } from '../../constants/GlobalStyles';
import styles from './styles';

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
        <View style={styles.icon} />
        <TextInput
          value={input}
          onChangeText={(e) => setInput(e)}
          style={styles.input}
          placeholder="Search"
        />
        {input && (
          <TouchableOpacity onPress={() => setInput('')} style={styles.icon} />
        )}
      </View>
    </SafeAreaView>
  );
};

export default HeaderBar;
