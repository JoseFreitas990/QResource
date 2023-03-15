import { View, Text, TextInput } from 'react-native';
import React, { useEffect, useState } from 'react';
import useStore from '../../hooks/useStore';

const GeoRender = () => {
  const { updateData } = useStore();

  const [lat, setLat] = useState('0');
  const [lon, setLon] = useState('0');

  useEffect(() => {
    updateData(`geo:${lat.replace(',', '.')},${lon.replace(',', '.')}`);
  }, [lat, lon]);
  return (
    <View>
      <View style={{ paddingVertical: 10, backgroundColor: 'coral' }}>
        <Text>Latitude</Text>
        <TextInput
          placeholder="Latitude"
          multiline
          keyboardType="decimal-pad"
          value={lat}
          onChange={(e) => setLat(e.nativeEvent.text)}
        />
      </View>
      <View style={{ paddingVertical: 10, backgroundColor: 'coral' }}>
        <Text>Longitude</Text>
        <TextInput
          placeholder="Longitude"
          multiline
          keyboardType="decimal-pad"
          value={lon}
          onChange={(e) => setLon(e.nativeEvent.text)}
        />
      </View>
    </View>
  );
};

export default GeoRender;
