import { View, Text, Image, TouchableOpacity } from 'react-native';
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
import Animated, {
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
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
}

type HomeScreenProp = StackNavigationProp<HomeStackParamList>;

const CodeCard = (props: CodeCardProps) => {
  const { name, value, id, code } = props;
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
      }}
      onPress={() => navigation.navigate('Details', { code })}
    >
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
    </TouchableOpacity>
  );
};

export default CodeCard;
