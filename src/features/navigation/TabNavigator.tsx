import {
  createBottomTabNavigator,
  useBottomTabBarHeight,
} from '@react-navigation/bottom-tabs';
import { Generate, Home, Scan } from '../../pages';
import { HomeNavigator, ScannerNavigator } from './StackNavigator';
import { COLORS, SIZES } from '../../constants/GlobalStyles';
import { Image, Platform, Text, TouchableOpacity, View } from 'react-native';

interface CustomButtonProps {
  onPress: any;
  focused: any;
}
const CustomTabBarButton = ({ onPress, focused }: CustomButtonProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={{
        justifyContent: 'center',
        alignItems: 'center',
      }}
      onPress={onPress}
    >
      <View
        style={{
          width: 70,
          height: 70,
          borderRadius: 35,
          backgroundColor: COLORS.primary,
          //marginBottom: 50,
          marginBottom: 40,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Image
          source={require('../../../assets/camera.png')}
          style={{
            width: 35,
            height: 35,
            resizeMode: 'contain',
            tintColor: 'white',
          }}
        />
      </View>
    </TouchableOpacity>
  );
};

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        headerShown: false,

        tabBarStyle: {
          borderTopWidth: 0,
          elevation: 0,
          backgroundColor: COLORS.secondary,
          borderTopLeftRadius: SIZES.h2,
          borderTopRightRadius: SIZES.h2,
          justifyContent: 'center',
          flex: 1,
          display: 'flex',
          minHeight: 55,
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          paddingTop: Platform.OS === 'ios' ? 10 : 0,
        },
      }}
      initialRouteName="Home"
    >
      <Tab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('../../../assets/home.png')}
              style={{
                width: 30,
                height: 30,
                resizeMode: 'contain',
                tintColor: focused ? COLORS.primary : 'white',
              }}
            />
          ),
          tabBarLabelStyle: {
            color: COLORS.white,
            marginBottom: Platform.OS === 'ios' ? -10 : 0,
          },
        }}
      />
      <Tab.Screen
        name="Scan"
        component={ScannerNavigator}
        options={{
          tabBarButton: ({ onPress, onFocus }) => (
            <CustomTabBarButton focused={onFocus} onPress={onPress} />
          ),
        }}
      />
      <Tab.Screen
        name="Generate"
        component={Generate}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('../../../assets/plus.png')}
              style={{
                width: 30,
                height: 30,
                resizeMode: 'contain',
                tintColor: focused ? COLORS.primary : 'white',
              }}
            />
          ),
          tabBarLabelStyle: {
            color: COLORS.white,
            marginBottom: Platform.OS === 'ios' ? -10 : 0,
          },
        }}
      />
    </Tab.Navigator>
  );
}
