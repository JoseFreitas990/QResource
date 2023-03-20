import { View, Text } from 'react-native';
import React from 'react';
import styles from './styles';
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS } from '../../constants/GlobalStyles';
import { Shadow } from 'react-native-shadow-2';

interface CodeCardProps {
  name: string;
  value: string;
}

const CodeCard = (props: CodeCardProps) => {
  const { name, value } = props;
  return (
    <Shadow style={{ width: '100%' }}>
      <LinearGradient
        colors={[COLORS.red, COLORS.lightPrimary]}
        start={[0.0, 0.0]}
        end={[0.2, 0.2]}
        style={styles.card}
      >
        <View style={styles.iconContainer}>
          <Text>a</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.name}>{name}</Text>
          <Text numberOfLines={1} ellipsizeMode="tail" style={styles.value}>
            {value}
          </Text>
        </View>
      </LinearGradient>
    </Shadow>
  );
};

export default CodeCard;
