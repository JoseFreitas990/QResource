import { View, Text, Switch } from 'react-native';
import React, { useEffect, useState } from 'react';
import { TextInput } from 'react-native-gesture-handler';
import useStore from '../../hooks/useStore';
import { removeWhiteSpaces } from '../../utils/utils';

const WifiRender = () => {
  const { updateData } = useStore();
  const [name, setName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [type, setType] = useState<'WEP' | 'WPA' | ''>('');
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    updateData(
      `WIFI:S:${removeWhiteSpaces(
        name
      )};T:${type};P:${password};H:${!visible};;`
    );
  }, [name, password, type]);

  return (
    <View>
      <View style={{ paddingVertical: 10, backgroundColor: 'coral' }}>
        <Text>name</Text>
        <TextInput
          placeholder="To"
          multiline
          value={name}
          onChange={(e) => setName(e.nativeEvent.text)}
        />
      </View>
      <View style={{ paddingVertical: 10, backgroundColor: 'coral' }}>
        <Text>password</Text>
        <TextInput
          placeholder="Subject"
          multiline
          value={password}
          onChange={(e) => setPassword(e.nativeEvent.text)}
        />
      </View>
      <View style={{ paddingVertical: 10, backgroundColor: 'coral' }}>
        <Text>Network Type</Text>
        <TextInput placeholder="Body" multiline value={type} />
      </View>
      {/*  TODO: NETWORK TYPE */}
      <View style={{ paddingVertical: 10, backgroundColor: 'coral' }}>
        <Text>Visibility</Text>
        <Text>{visible ? 'Visible' : 'Hidden'}</Text>

        <Switch value={visible} onChange={() => setVisible(!visible)} />
      </View>
    </View>
  );
};

export default WifiRender;
