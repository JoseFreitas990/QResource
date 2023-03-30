import { View, Text, Switch, TextInput } from 'react-native';
import React, { useEffect, useState } from 'react';
import useStore from '../../hooks/useStore';
import { removeWhiteSpaces } from '../../utils/utils';
import TextInputCustom from '../../components/TextInputCustom';

const WifiGen = () => {
  const { updateData } = useStore();
  const [name, setName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [type, setType] = useState<'WEP' | 'WPA' | ''>('WPA');
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
      <TextInputCustom
        onChange={(e) => setName(e.nativeEvent.text)}
        placeholder="WiFi Name"
        value={name}
      />
      <TextInputCustom
        onChange={(e) => setPassword(e.nativeEvent.text)}
        placeholder="Password"
        value={name}
      />
      {/* // TODO  */}
      <TextInputCustom
        onChange={(e) => setType('WEP')}
        placeholder="Network Type"
        value={name}
      />

      {/* // TODO: NETWORK TYPE */}
      <Text>Visibility</Text>
      <Text>{visible ? 'Visible' : 'Hidden'}</Text>

      <Switch value={visible} onChange={() => setVisible(!visible)} />
    </View>
  );
};

export default WifiGen;
