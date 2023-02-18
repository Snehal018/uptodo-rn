import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  CalendarScreen,
  FocusScreen,
  ProfileScreen,
  TaskIndexScreen
} from '../../screens';
import {BottomTabComponent} from '../../components';

const BottomTabNavigation = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <BottomTabNavigation.Navigator
      tabBar={props => <BottomTabComponent {...props} />}
      screenOptions={{headerShown: false}}>
      <BottomTabNavigation.Screen name={'index'} component={TaskIndexScreen} />
      <BottomTabNavigation.Screen
        name={'calendar'}
        component={CalendarScreen}
      />
      <BottomTabNavigation.Screen name={'focus'} component={FocusScreen} />
      <BottomTabNavigation.Screen name={'profile'} component={ProfileScreen} />
    </BottomTabNavigation.Navigator>
  );
};

export default BottomTab;
