import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  GetStarted,
  Login,
  Onboarding,
  Registration,
  SplashSceen
} from '../screens';
import RootStackParams from '../utils/types/navigationType';
import BottomTab from './bottomTab';
import {useAppSelector} from '../../hooks/reduxHooks';

const Stack = createNativeStackNavigator<RootStackParams>();

const StackNavigator = () => {
  const {authToken} = useAppSelector(state => state.auth);

  const isUserAuthenticated = !!authToken;

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
      initialRouteName={isUserAuthenticated ? 'BottomTab' : 'GetStarted'}>
      <Stack.Screen name="Splash" component={SplashSceen} />
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="GetStarted" component={GetStarted} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Registration" component={Registration} />
      <Stack.Screen name="BottomTab" component={BottomTab} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
