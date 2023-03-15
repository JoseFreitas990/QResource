import { View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import { TextInput } from 'react-native-gesture-handler';
import useStore from '../../hooks/useStore';
import { removeWhiteSpaces } from '../../utils/utils';

const TextGen = () => {
  const { updateData } = useStore();
  const [text, setText] = useState('');

  useEffect(() => {
    updateData(text);
  }, [text]);

  return (
    <View>
      <View style={{ paddingVertical: 10, backgroundColor: 'coral' }}>
        <Text>Telephone</Text>
        <TextInput
          placeholder="Text"
          multiline
          value={text}
          onChange={(e) => setText(e.nativeEvent.text)}
        />
      </View>
    </View>
  );
};

export default TextGen;
