import React, { Component } from 'react'
import {
  View,
  Text,
  Button,
  StyleSheet,
  Platform
} from 'react-native'

import { Icon } from 'native-base'
import { createTabNavigator } from 'react-navigation-tabs'

import { createStackNavigator } from 'react-navigation-stack';

import HomeTab from './AppTabNavigator/HomeTab'
import SearchTab from './AppTabNavigator/SearchTab'
import AddMediaTab from './AppTabNavigator/AddMediaTab'
import LikesTab from './AppTabNavigator/LikesTab'
import ProfileTab from './AppTabNavigator/ProfileTab'

const AppTabNavigatorStack = createStackNavigator({
  Home: {
    screen: HomeTab
  },
  Search: {
    screen: SearchTab
  },
  AddMedia: {
    screen: AddMediaTab
  },
  Likes: {
    screen: LikesTab
  },
  Profile: {
    screen: ProfileTab
  }
}, {
    animationEnabled: true,
    swipeEnabled: true,
    headerMode: 'none',
    tabBarOptions: {
      style: {
        ...Platform.select({
          android: {
            backgroundColor: 'white'
          }
        })
      },
      activeTintColor: '#000',
      inactiveTintColor: '#d1cece',
      showLabel: false,
      showIcon: true,
    }
  }
)
export default AppTabNavigatorStack

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})