import { View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import { TextInput } from 'react-native-gesture-handler';
import useStore from '../../hooks/useStore';
import { removeWhiteSpaces } from '../../utils/utils';
import TextInputCustom from '../../components/TextInputCustom';

const UrlGen = () => {
  const { updateData } = useStore();
  const [link, setLink] = useState('');

  //TODO: ADD A FUNCTION THAT DETECTS IF THE TEXT GIVEN HAS HTTPS OR NOT

  useEffect(() => {
    updateData(link);
  }, [link]);

  return (
    <View>
      <TextInputCustom
        placeholder="Link"
        multiline
        value={link}
        onChange={(e) => setLink(e.nativeEvent.text)}
      />
    </View>
  );
};

export default UrlGen;
