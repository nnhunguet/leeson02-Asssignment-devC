import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { Feather } from '@expo/vector-icons'

import Account from './components/Account';
import Album from './components/Album';

export default function App() {

  const imgData = {
    
  }

  const inforAccount = {
    name: "Nguyen Nghia Hung",
    job: "Developer",
    avatar: require('./assets/avatar.jpg'),
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapperAll}>
        <View style={styles.header}>
          <Feather name="arrow-left" style={styles.iconHeader}></Feather>
          <Feather name="grid" style={styles.iconHeader}></Feather>
        </View>
        <View style={styles.Account}>
          <Account inforAccount={inforAccount}/>
        </View>
        <View style={styles.Album}>
          <Album imgData={imgData}/>
        </View>
      </View>
    </SafeAreaView>
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
    marginHorizontal: 15
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
