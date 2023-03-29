import { View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import { TextInput } from 'react-native-gesture-handler';
import useStore from '../../hooks/useStore';
import { removeWhiteSpaces } from '../../utils/utils';
import TextInputCustom from '../../components/TextInputCustom';

const TextGen = () => {
  const { updateData } = useStore();
  const [text, setText] = useState('');

  useEffect(() => {
    updateData(text);
  }, [text]);

  return (
    <View>
      <TextInputCustom
        onChange={(e) => setText(e.nativeEvent.text)}
        placeholder="Text"
        value={text}
      />
    </View>
  );
};

export default TextGen;
