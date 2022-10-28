import { createStackNavigator } from '@react-navigation/stack';
import { Create, Scan } from '../pages';

const Stack = createStackNavigator();

export function ScannerNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Scanner" component={Scan} />
      <Stack.Screen name="Create" component={Create} />
    
    </Stack.Navigator>
  );
}