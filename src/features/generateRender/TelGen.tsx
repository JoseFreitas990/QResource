import { View, Text, TextInput, Button } from 'react-native';
import React, { useEffect, useState } from 'react';
import useStore from '../../hooks/useStore';
import { removeWhiteSpaces } from '../../utils/utils';

const TelGen = () => {
  const { updateData } = useStore();
  const [tel, setTele] = useState('');

  useEffect(() => {
    updateData(`tel:${removeWhiteSpaces(tel)}`);
  }, [tel]);

  return (
    <View style={{ paddingTop: 20 }}>
      <View style={{ paddingVertical: 10, backgroundColor: 'coral' }}>
        <Text>Telephone</Text>
        <TextInput
          placeholder="Tel"
          value={tel}
          keyboardType="phone-pad"
          onChange={(e) => setTele(e.nativeEvent.text)}
        />
      </View>
    </View>
  );
};

export default TelGen;
