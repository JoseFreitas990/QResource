import { View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import { TextInput } from 'react-native-gesture-handler';
import useStore from '../../hooks/useStore';
import { removeWhiteSpaces } from '../../utils/utils';

const UrlGen = () => {
  const { updateData } = useStore();
  const [link, setLink] = useState('');

  //TODO: ADD A FUNCTION THAT DETECTS IF THE TEXT GIVEN HAS HTTPS OR NOT

  useEffect(() => {
    updateData(link);
  }, [link]);

  return (
    <View>
      <View style={{ paddingVertical: 10, backgroundColor: 'coral' }}>
        <Text>URL</Text>
        <TextInput
          placeholder="Link"
          multiline
          value={link}
          onChange={(e) => setLink(e.nativeEvent.text)}
        />
      </View>
    </View>
  );
};

export default UrlGen;
