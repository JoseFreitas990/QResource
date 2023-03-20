import { View, Text } from 'react-native';
import React from 'react';
import styles from './styles';

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
      <View
        style={{
          width: 40,
          height: 40,
          backgroundColor: 'red',
          marginRight: 10,
        }}
      ></View>
    </View>
  );
};

export default InputValue;
