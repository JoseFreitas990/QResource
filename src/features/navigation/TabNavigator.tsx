import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Generate, Home, Scan } from '../../pages';
import { ScannerNavigator } from '../StackNavigator';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Home"
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Scan" component={ScannerNavigator} />
      <Tab.Screen name="Generate" component={Generate} />
    </Tab.Navigator>
  );
}
