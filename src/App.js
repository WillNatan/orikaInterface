import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Journal from './Journal/Journal';

export default function App() {
  return (
    <>
    <View style={styles.container}>
      <Journal />
      <StatusBar backgroundColor = "#815FEB" barStyle = "light-content" hidden = {false} translucent = {true}/>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    
  },
});
