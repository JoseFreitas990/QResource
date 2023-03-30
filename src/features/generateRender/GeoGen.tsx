import { View, Text, TextInput } from 'react-native';
import React, { useEffect, useState } from 'react';
import useStore from '../../hooks/useStore';
import TextInputCustom from '../../components/TextInputCustom';

const GeoGen = () => {
  const { updateData } = useStore();

  const [lat, setLat] = useState('0');
  const [lon, setLon] = useState('0');

  useEffect(() => {
    updateData(`geo:${lat.replace(',', '.')},${lon.replace(',', '.')}`);
  }, [lat, lon]);
  return (
    <View>
      <TextInputCustom
        onChange={(e) => setLat(e.nativeEvent.text)}
        placeholder="Latitude"
        keyboardType="decimal-pad"
        value={lat}
      />
      <TextInputCustom
        onChange={(e) => setLon(e.nativeEvent.text)}
        placeholder="Longitude"
        keyboardType="decimal-pad"
        value={lon}
      />
    </View>
  );
};

export default GeoGen;
