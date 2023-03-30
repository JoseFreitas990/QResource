import { View, Text, Image } from 'react-native';
import React from 'react';
import styles from './styles';
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS } from '../../constants/GlobalStyles';
import { Shadow } from 'react-native-shadow-2';
import { typeOfObjectsToGenerate } from '../../constants/generate';
import getType from '../../utils/getType';

interface CodeCardProps {
  name: string;
  value: string;
}

const CodeCard = (props: CodeCardProps) => {
  const { name, value } = props;
  const type = getType(value);
  const imageValue = typeOfObjectsToGenerate.find(
    (item) => item.type === type
  )?.image;
  return (
    <Shadow style={{ width: '100%' }}>
      <LinearGradient
        colors={[COLORS.red, COLORS.lightPrimary]}
        start={[0.0, 0.0]}
        end={[0.2, 0.2]}
        style={styles.card}
      >
        <View style={styles.iconContainer}>
          <Image source={imageValue} style={styles.icon} />
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
