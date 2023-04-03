import { View, Text, Image } from 'react-native';
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
} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

interface CodeCardProps {
  name: string;
  value: string;
}

const TRANSLATE_X_THRESHOLD = -SIZES.width * 0.3;

const CodeCard = (props: CodeCardProps) => {
  const { name, value } = props;
  const type = getType(value);

  const imageValue = typeOfObjectsToGenerate.find(
    (item) => item.type === type
  )?.image;

  const translateX = useSharedValue(0);

  const panGesture = useAnimatedGestureHandler<PanGestureHandlerGestureEvent>({
    onActive: (event) => {
      translateX.value = event.translationX;
      console.log(translateX.value < TRANSLATE_X_THRESHOLD ? 0 : 1);
    },
    onEnd: () => {
      const shouldBeDismissed = translateX.value < TRANSLATE_X_THRESHOLD;
      if (shouldBeDismissed) {
        translateX.value = withTiming(-SIZES.width);
      } else {
        translateX.value = withTiming(0);
      }
    },
  });
  const rStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: translateX.value,
      },
    ],
  }));

  const rIconContainerStyle = useAnimatedStyle(() => {
    const opacity = withTiming(
      translateX.value < TRANSLATE_X_THRESHOLD ? 0 : 1
    );
    return { opacity };
  });

  return (
    <View>
      <PanGestureHandler onGestureEvent={panGesture}>
        <Animated.View style={[rStyle, { width: '80%' }]}>
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
      </PanGestureHandler>
      <View
        style={[
          {
            backgroundColor: 'red',
            width: 50,
            height: '100%',
            position: 'absolute',
            alignSelf: 'center',
            right: 25,
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: -1,
          },
          rIconContainerStyle,
        ]}
      >
        <Text>Icon</Text>
      </View>
    </View>
  );
};

export default CodeCard;
