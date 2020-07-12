import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import { Feather } from '@expo/vector-icons'

import Account from './components/Account';

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const inforAccount = {
  name: "Nguyen Nghia Hung",
  job: "Developer",
  avatar: require('./assets/avatar.jpg'),
}

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <View style={styles.wrapperAll}>
          <View style={styles.header}>
            <Feather name="arrow-left" style={styles.iconHeader}></Feather>
            <Feather name="grid" style={styles.iconHeader}></Feather>
          </View>
          <View style={styles.Account}>
            <Account inforAccount={inforAccount}/>
          </View>
        </View>
      </SafeAreaView>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6E9F3',
  },
  wrapperAll: {
    flex: 1,
    backgroundColor: '#E6E9F3',
    marginHorizontal: 15,
    marginTop: 12,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 30,
    alignItems: "center",
  },
  iconHeader: {
    fontSize: 26,
    color: "black",
  },
  Account: {
    marginVertical: 22,
  }
});
