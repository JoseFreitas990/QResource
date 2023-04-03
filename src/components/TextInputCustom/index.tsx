import {
  View,
  TextInput,
  KeyboardType,
  Text,
  TextInputChangeEventData,
  NativeSyntheticEvent,
} from 'react-native';
import style from './styles';
import React from 'react';
import { Shadow } from 'react-native-shadow-2';

interface TextInputProps {
  placeholder: string;
  setInput?: (value: string | number) => void;
  multiline?: boolean;
  value?: string;

  onChange?(e: NativeSyntheticEvent<TextInputChangeEventData>): void;
  keyboardType?: KeyboardType;
}

const TextInputCustom = (props: TextInputProps) => {
  const { placeholder, onChange, keyboardType, multiline } = props;
  return (
    <View style={style.container}>
      <Text style={style.title}>{placeholder}</Text>
      <Shadow style={style.inputContainer}>
        <TextInput
          hitSlop={{ top: 25, bottom: 25, left: 40, right: 40 }}
          multiline={multiline}
          onChange={onChange}
          style={style.input}
          placeholder={placeholder}
          keyboardType={keyboardType}
        />
      </Shadow>
    </View>
  );
};

export default TextInputCustom;
