import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './stack';

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default AppNavigation;
