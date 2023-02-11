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

const Stack = createNativeStackNavigator<RootStackParams>();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}>
      <Stack.Screen name="Splash" component={SplashSceen} />
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="GetStarted" component={GetStarted} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Registration" component={Registration} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
