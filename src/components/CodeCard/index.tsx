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

interface CodeCardProps
  extends Pick<PanGestureHandlerProps, 'simultaneousHandlers'> {
  name: string;
  value: string;
  id: number;
  code: ICode;
}

type HomeScreenProp = StackNavigationProp<HomeStackParamList>;

const TRANSLATE_X_THRESHOLD = -SIZES.width * 0.3;
const LIST_ITEM_HEIGHT = 75;

const CodeCard = (props: CodeCardProps) => {
  const { name, value, id, code, simultaneousHandlers } = props;
  const type = getType(value);

  const navigation = useNavigation<HomeScreenProp>();

  const imageValue = typeOfObjectsToGenerate.find(
    (item) => item.type === type
  )?.image;

  const translateX = useSharedValue(0);
  const itemHeight = useSharedValue(LIST_ITEM_HEIGHT);
  const marginVertical = useSharedValue(10);
  const opacity = useSharedValue(1);
  const iconOpacity = useSharedValue(1);
  const deleteCode = async () => {
    CodeService.deleteById(id);
  };

  const panGesture = useAnimatedGestureHandler<PanGestureHandlerGestureEvent>({
    onActive: (event) => {
      translateX.value = event.translationX;
      if (event.translationX > 0) {
        translateX.value = 0;
      }
    },
    onStart: (event) => {},
    onEnd: () => {
      const shouldBeDismissed = translateX.value < TRANSLATE_X_THRESHOLD;
      if (shouldBeDismissed) {
        translateX.value = withTiming(-SIZES.width, undefined, (isFinished) => {
          itemHeight.value = withTiming(0);
          marginVertical.value = withTiming(0);
          iconOpacity.value = withTiming(0);
          if (isFinished && shouldBeDismissed) {
            runOnJS(deleteCode)();
          }
        });
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

  const rIconContainerStyle = useAnimatedStyle(() => ({
    opacity: withTiming(translateX.value < TRANSLATE_X_THRESHOLD + 50 ? 1 : 0),
  }));

  const rIconStyle = useAnimatedStyle(() => ({
    tintColor: translateX.value < TRANSLATE_X_THRESHOLD ? 'red' : 'black',
    opacity: iconOpacity.value,
  }));

  const rCodeContainerStyle = useAnimatedStyle(() => {
    return {
      height: itemHeight.value,
      marginVertical: marginVertical.value,
      opacity: opacity.value,
    };
  });

  return (
    <TouchableOpacity onPress={() => navigation.navigate('Details', { code })}>
      <Animated.View
        style={[
          { height: 75, alignItems: 'center', marginVertical: 10 },
          rCodeContainerStyle,
        ]}
      >
        <PanGestureHandler
          simultaneousHandlers={simultaneousHandlers}
          onGestureEvent={panGesture}
          failOffsetY={[-5, 5]}
          activeOffsetX={[-5, 5]}
        >
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
                <Text
                  numberOfLines={1}
                  ellipsizeMode="tail"
                  style={styles.value}
                >
                  {value}
                </Text>
              </View>
            </LinearGradient>
          </Animated.View>
        </PanGestureHandler>
        <Animated.View
          style={[
            {
              width: 50,
              height: '100%',
              position: 'absolute',
              alignSelf: 'center',
              right: '15%',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: -1,
            },
            rIconContainerStyle,
          ]}
        >
          <Animated.Image
            style={[{ resizeMode: 'cover', width: 40, height: 40 }, rIconStyle]}
            source={require('../../../assets/trash.png')}
          />
        </Animated.View>
      </Animated.View>
    </TouchableOpacity>
  );
};

export default CodeCard;
