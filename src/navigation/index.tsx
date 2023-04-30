import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './stack';
import {AppContextProvider} from '../context';
import {navigationRef} from './helper/navigationService';

const AppNavigation = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <AppContextProvider>
        <StackNavigator />
      </AppContextProvider>
    </NavigationContainer>
  );
};

export default AppNavigation;
