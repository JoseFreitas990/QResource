import { createStackNavigator } from '@react-navigation/stack';
import { Create, Details, Home, Scan } from '../../pages';
import { RouteProp } from '@react-navigation/native';
import { ICode } from '../../types';
import { LogBox } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS } from '../../constants/GlobalStyles';

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

export type ScannerStackParamList = {
  Scanner: undefined;
  Create: { scannedData: string };
};

export type HomeStackParamList = {
  Home: undefined;
  Details: { code: ICode };
};

export type CreateScreenRouteProp = RouteProp<ScannerStackParamList, 'Create'>;

export type DetailsScreenRouterProp = RouteProp<HomeStackParamList, 'Details'>;

const ScanStack = createStackNavigator<ScannerStackParamList>();
const HomeStack = createStackNavigator<HomeStackParamList>();

const CustomComponent = () => {
  return <Details />;
};

export function ScannerNavigator() {
  return (
    <ScanStack.Navigator screenOptions={{ headerShown: false }}>
      <ScanStack.Screen name="Scanner" component={Scan} />
      <ScanStack.Screen name="Create" component={Create} />
    </ScanStack.Navigator>
  );
}

export function HomeNavigator() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="Details" component={CustomComponent} />
    </HomeStack.Navigator>
  );
}
