import { View, TextInput, KeyboardType, Text } from 'react-native';
import style from './styles';
import React from 'react';

interface TextInputProps {
  placeholder: string;
  setInput?: (value: string | number) => void;
  multiline?: boolean;
  value?: string;
  onChange?: (value: string | number) => void;
  keyboardType?: KeyboardType;
}

const TextInputCustom = (props: TextInputProps) => {
  const { placeholder } = props;
  return (
    <View style={style.container}>
      <Text style={style.title}>{placeholder}</Text>
      <View style={style.inputContainer}>
        <TextInput style={style.input} placeholder={placeholder} />
      </View>
    </View>
  );
};

export default TextInputCustom;
