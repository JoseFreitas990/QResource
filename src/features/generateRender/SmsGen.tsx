import { View, Text, TextInput } from 'react-native';
import React, { useEffect, useState } from 'react';
import useStore from '../../hooks/useStore';
import TextInputCustom from '../../components/TextInputCustom';

const SmsGen = () => {
  const { updateData } = useStore();

  const [to, setTo] = useState('');
  const [body, setBody] = useState('');

  useEffect(() => {
    updateData(`SMSTO:${to}:${body}`);
  }, [to, body]);
  return (
    <View>
      <TextInputCustom
        onChange={(e) => setTo(e.nativeEvent.text)}
        keyboardType="phone-pad"
        placeholder="To"
        value={to}
      />
      <TextInputCustom
        onChange={(e) => setBody(e.nativeEvent.text)}
        multiline
        placeholder="Subject"
        value={body}
      />
    </View>
  );
};

export default SmsGen;
