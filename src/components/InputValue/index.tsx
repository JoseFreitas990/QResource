import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from './styles';
import { COLORS } from '../../constants/GlobalStyles';
import * as Clipboard from 'expo-clipboard';

interface InputValueProps {
  header: string;
  value?: string;
}

const InputValue = (props: InputValueProps) => {
  const { header, value } = props;

  const copyToClipboard = async () => {
    if (value) await Clipboard.setStringAsync(value);
  };

  return (
    <View style={styles.container}>
      <View style={styles.bodyContainer}>
        <Text style={styles.header}>{header}</Text>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{value}</Text>
        </View>
      </View>

      <TouchableOpacity onPress={copyToClipboard}>
        <Image
          style={{
            resizeMode: 'contain',
            width: 35,
            height: 35,
            marginRight: 10,
            tintColor: COLORS.black,
          }}
          source={require('../../../assets/copy.png')}
        />
      </TouchableOpacity>
    </View>
  );
};

export default InputValue;
