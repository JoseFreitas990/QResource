import { createStackNavigator } from '@react-navigation/stack';
import { Create, Scan } from '../pages';

export type ScannerStackParamList = {
  Scanner: undefined;
  Create: { scannedData: string };
};
const ScanStack = createStackNavigator<ScannerStackParamList>();

export function ScannerNavigator() {
  return (
    <ScanStack.Navigator screenOptions={{ headerShown: false }}>
      <ScanStack.Screen name="Scanner" component={Scan} />
      <ScanStack.Screen name="Create" component={Create} />
    </ScanStack.Navigator>
  );
}
