import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { typeOfObjectsToGenerate } from '../../constants/generate';
import { CODE_TYPES } from '../../types/enums';
import GenerateTelRender from '../../features/generateRender/GenerateTelRender';
import GenerateSmsRender from '../../features/generateRender/GenerateSmsRender';
import GenerateTextRender from '../../features/generateRender/GenerateTextRender';

const Generate = () => {
  const [activeType, setActiveType] = useState(CODE_TYPES.TEL);

  const RenderThisType = () => {
    if (activeType === CODE_TYPES.TEL) {
      return <GenerateTelRender />;
    } else if (activeType === CODE_TYPES.SMS) {
      return <GenerateSmsRender />;
    } else return <GenerateTextRender />;
  };

  return (
    <SafeAreaView>
      <FlatList
        data={typeOfObjectsToGenerate}
        keyExtractor={(item) => item.title}
        horizontal
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              style={{
                marginTop: 50,
                marginHorizontal: 15,
                height: 50,
                width: 50,
                backgroundColor: 'orange',
              }}
              onPress={() => setActiveType(item.type)}
            >
              <Text>{item.title}</Text>
            </TouchableOpacity>
          );
        }}
      />
      <RenderThisType />
    </SafeAreaView>
  );
};

export default Generate;
