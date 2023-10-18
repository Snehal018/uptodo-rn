import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './stack';
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
  }, [dispatch]);

  const hideSplashScreenHandler = () => {
    hide({ fade: true });
  };

  return (
    <NavigationContainer ref={navigationRef} onReady={hideSplashScreenHandler}>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default AppNavigation;
