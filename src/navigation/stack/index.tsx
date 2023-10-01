import React, { useCallback } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GetStarted, Login, Onboarding, Registration } from '../../screens';
import RootStackParams from '../../utils/types/navigationType';
import BottomTabNavigator from '../bottomTab';
import { useAppSelector } from '../../hooks/reduxHooks';

const Stack = createNativeStackNavigator<RootStackParams>();

const StackNavigator = () => {
  const { authToken, isVisitedOnboarding } = useAppSelector(
    state => state.auth
  );

  const isUserAuthenticated = !!authToken;

  const getInitialRouteName: () => keyof RootStackParams = useCallback(() => {
    if (isUserAuthenticated) {
      return 'BottomTab';
    } else if (isVisitedOnboarding) {
      return 'GetStarted';
    } else {
      return 'Onboarding';
    }
  }, [isUserAuthenticated, isVisitedOnboarding]);

  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={getInitialRouteName()}>
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="GetStarted" component={GetStarted} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Registration" component={Registration} />
      <Stack.Screen name="BottomTab" component={BottomTabNavigator} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
