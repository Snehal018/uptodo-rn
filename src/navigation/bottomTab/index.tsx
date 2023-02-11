import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const BottomTabNavigation = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <BottomTabNavigation.Navigator>
      <BottomTabNavigation.Screen name={'index'} component={} />
      <BottomTabNavigation.Screen name={'calendar'} />
      <BottomTabNavigation.Screen name={'focus'} />
      <BottomTabNavigation.Screen name={'profile'} />
    </BottomTabNavigation.Navigator>
  );
};

export default BottomTab;

const styles = StyleSheet.create({});
