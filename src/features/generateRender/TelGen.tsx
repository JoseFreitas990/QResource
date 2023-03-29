import { View, Text, TextInput, Button } from 'react-native';
import React, { useEffect, useState } from 'react';
import useStore from '../../hooks/useStore';
import { removeWhiteSpaces } from '../../utils/utils';
import TextInputCustom from '../../components/TextInputCustom';

const TelGen = () => {
  const { updateData } = useStore();
  const [tele, setTele] = useState('');

  useEffect(() => {
    updateData(`tel:${removeWhiteSpaces(tele)}`);
  }, [tele]);

  return (
    <View>
      <TextInputCustom
        onChange={(e) => setTele(e.nativeEvent.text)}
        placeholder="Telephone"
        value={tele}
        keyboardType={'phone-pad'}
      />
    </View>
  );
};

export default TelGen;
