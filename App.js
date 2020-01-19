import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
// react-natvigation 라이브러리 에서 StackNavigator 추가하기
import { createAppContainer } from 'react-navigation';

import { createStackNavigator } from 'react-navigation-stack';
// MainScreen 추가
import MainScreen from './Components/MainScreen';

const AppStackNavigator = createStackNavigator({
  Main: { screen: MainScreen },
});

const AppContainer = createAppContainer(AppStackNavigator);
export default AppContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
