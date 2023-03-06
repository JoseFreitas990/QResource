import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import TabNavigator from './src/features/navigation/TabNavigator';
import * as SQLite from 'expo-sqlite';
import DatabaseInit from './src/database/init';

export default function App() {
  useEffect(() => {
    new DatabaseInit();
  }, []);

  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
