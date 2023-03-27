import { View, Text, Image } from 'react-native';
import React from 'react';
import styles from './styles';
import { COLORS } from '../../constants/GlobalStyles';

interface InputValueProps {
  header: string;
  value?: string;
}

const InputValue = (props: InputValueProps) => {
  const { header, value } = props;
  return (
    <View style={styles.container}>
      <View style={styles.bodyContainer}>
        <Text style={styles.header}>{header}</Text>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{value}</Text>
        </View>
      </View>

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
    </View>
  );
};

export default InputValue;
