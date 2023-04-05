import { View, Text, Image, TouchableOpacity, Animated } from 'react-native';
import React, { Fragment, useEffect } from 'react';
import styles from './styles';
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS, SIZES } from '../../constants/GlobalStyles';
import { Shadow } from 'react-native-shadow-2';
import { typeOfObjectsToGenerate } from '../../constants/generate';
import getType from '../../utils/getType';
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
  PanGestureHandlerProps,
} from 'react-native-gesture-handler';

import CodeService from '../../services/code.service';
import { useNavigation, useNavigationBuilder } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { HomeStackParamList } from '../../features/navigation/StackNavigator';
import { ICode } from '../../types';

interface CodeCardProps {
  name: string;
  value: string;
  id: number;
  code: ICode;
  scale: any;
  opacity: any;
}

type HomeScreenProp = StackNavigationProp<HomeStackParamList>;

const CodeCard = (props: CodeCardProps) => {
  const { name, value, id, code, scale, opacity } = props;
  const type = getType(value);

  const navigation = useNavigation<HomeScreenProp>();

  const imageValue = typeOfObjectsToGenerate.find(
    (item) => item.type === type
  )?.image;

  return (
    <TouchableOpacity
      style={{
        height: 75,
        alignItems: 'center',
        marginVertical: 10,
        transform: [{ scale }],
      }}
      onPress={() => navigation.navigate('Details', { code })}
      // TODO: DELETE
      // onLongPress={() => alert('EI')}
    >
      <Animated.View style={{ opacity }}>
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
      </Animated.View>
    </TouchableOpacity>
  );
};

export default CodeCard;
