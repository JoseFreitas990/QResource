
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Generate, Home, Scan } from '../../pages';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator screenOptions={{headerShown:false}}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Scan" component={Scan} />
      <Tab.Screen name="Generate" component={Generate} />
    </Tab.Navigator>
  );
}