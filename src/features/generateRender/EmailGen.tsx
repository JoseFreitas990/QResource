import { View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import { TextInput } from 'react-native-gesture-handler';
import useStore from '../../hooks/useStore';
import { removeWhiteSpaces } from '../../utils/utils';
import TextInputCustom from '../../components/TextInputCustom';

const EmailGen = () => {
  const { updateData } = useStore();
  const [to, setTo] = useState<string>('');
  const [subject, setSubject] = useState<string>('');
  const [body, setBody] = useState<string>('');

  useEffect(() => {
    updateData(
      `mailto:${removeWhiteSpaces(to)}?subject=${subject}&body=${body}`
    );
  }, [to, subject, body]);

  return (
    <View>
      <TextInputCustom
        onChange={(e) => setTo(e.nativeEvent.text)}
        placeholder="To"
        value={to}
      />
      <TextInputCustom
        onChange={(e) => setSubject(e.nativeEvent.text)}
        placeholder="Subject"
        value={subject}
      />
      <TextInputCustom
        multiline
        onChange={(e) => setBody(e.nativeEvent.text)}
        placeholder="Body"
        value={body}
      />
    </View>
  );
};

export default EmailGen;
