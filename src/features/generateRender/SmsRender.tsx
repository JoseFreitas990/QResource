import { View, Text, TextInput } from 'react-native';
import React, { useEffect, useState } from 'react';
import useStore from '../../hooks/useStore';

const SmsRender = () => {
  const { updateData } = useStore();

  const [to, setTo] = useState('');
  const [body, setBody] = useState('');

  useEffect(() => {
    updateData(`SMSTO:${to}:${body}`);
  }, [to, body]);
  return (
    <View>
      <View style={{ paddingVertical: 10, backgroundColor: 'coral' }}>
        <Text>To</Text>
        <TextInput
          placeholder="To"
          multiline
          keyboardType="phone-pad"
          value={to}
          onChange={(e) => setTo(e.nativeEvent.text)}
        />
      </View>
      <View style={{ paddingVertical: 10, backgroundColor: 'coral' }}>
        <Text>Subject</Text>
        <TextInput
          placeholder="Subject"
          multiline
          value={body}
          onChange={(e) => setBody(e.nativeEvent.text)}
        />
      </View>
    </View>
  );
};

export default SmsRender;
