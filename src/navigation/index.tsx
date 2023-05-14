import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './stack';
import {AppContextProvider} from '../context';
import {navigationRef} from './helper/navigationService';
import NetInfo from '@react-native-community/netinfo';
import {useAppDispatch} from '../hooks';
import {appSliceActions} from '../redux';

const AppNavigation = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      dispatch(appSliceActions.updateNetworkStatus(!!state.isConnected));
    });
    return unsubscribe();
  }, []);

  return (
    <NavigationContainer ref={navigationRef}>
      <AppContextProvider>
        <StackNavigator />
      </AppContextProvider>
    </NavigationContainer>
  );
};

export default AppNavigation;
