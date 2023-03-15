import { View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import { TextInput } from 'react-native-gesture-handler';
import useStore from '../../hooks/useStore';
import { removeWhiteSpaces } from '../../utils/utils';

const EmailRender = () => {
  const { updateData } = useStore();
  const [to, setTo] = useState<string>('');
  const [subject, setSubject] = useState<string>('');
  const [body, setBody] = useState<string>('');

  useEffect(() => {
    updateData(
      `MATMSG:TO:${removeWhiteSpaces(to)};SUB:${subject};BODY:${body};;`
    );
  }, [to, subject, body]);

  return (
    <View>
      <View style={{ paddingVertical: 10, backgroundColor: 'coral' }}>
        <Text>To</Text>
        <TextInput
          placeholder="To"
          multiline
          value={to}
          onChange={(e) => setTo(e.nativeEvent.text)}
        />
      </View>
      <View style={{ paddingVertical: 10, backgroundColor: 'coral' }}>
        <Text>Subject</Text>
        <TextInput
          placeholder="Subject"
          multiline
          value={subject}
          onChange={(e) => setSubject(e.nativeEvent.text)}
        />
      </View>
      <View style={{ paddingVertical: 10, backgroundColor: 'coral' }}>
        <Text>Body</Text>
        <TextInput
          placeholder="Body"
          multiline
          value={body}
          onChange={(e) => setBody(e.nativeEvent.text)}
        />
      </View>
    </View>
  );
};

export default EmailRender;
