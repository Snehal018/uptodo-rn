import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './stack';
import { AppContextProvider } from '../context';
import { navigationRef } from './helper/navigationService';
import NetInfo from '@react-native-community/netinfo';
import { useAppDispatch } from '../hooks';
import { appSliceActions } from '../redux';
import { hide } from 'react-native-bootsplash';

const AppNavigation = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      dispatch(appSliceActions.updateNetworkStatus(!!state.isConnected));
    });
    return unsubscribe();
  }, []);

  const hideSplashScreenHandler = () => {
    hide({ fade: true });
  };

  return (
    <NavigationContainer ref={navigationRef} onReady={hideSplashScreenHandler}>
      <AppContextProvider>
        <StackNavigator />
      </AppContextProvider>
    </NavigationContainer>
  );
};

export default AppNavigation;
