import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import TabNavigator from './src/features/navigation/TabNavigator';
import * as SQLite from 'expo-sqlite'


function openDatabase() {
  if(Platform.OS === "web"){
    return{
      transaction: () => {
        return {
          executeSql: () => {}
        }
      }
    }
  }

  const db = SQLite.openDatabase("db.db");
  return db
}

// const db = openDatabase()

export default function App() {

  // useEffect(() => {
  //   db.transaction((tx) => {
  //     tx.executeSql(
  //       `create table if not exists codes (id integer primary key not null, title text, description text, value text,)`
  //     )
  //   })
  // })

  return (
      <NavigationContainer>
          <TabNavigator/>
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
