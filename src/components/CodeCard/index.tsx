import { View, Text } from 'react-native';
import React from 'react';
import styles from './styles';
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS } from '../../constants/GlobalStyles';

const CodeCard = () => {
  return (
    <LinearGradient
      start={{ x: 0, y: 1 }}
      locations={[0, 0.3]}
      colors={[COLORS.red, COLORS.lightPrimary]}
      style={styles.card}
    >
      <View style={styles.iconContainer}>
        <Text>a</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.name}>My Geo</Text>
        <Text style={styles.value}>51551.15,74223.14</Text>
      </View>
    </LinearGradient>
  );
};

export default CodeCard;
