import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Onboarding, SplashSceen} from '../screens';
import RootStackParams from '../utils/types/navigationType';
import GetStarted from '../screens/onboardingScreens/getStarted';

const Stack = createNativeStackNavigator<RootStackParams>();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Splash" component={SplashSceen} />
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="GetStarted" component={GetStarted} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
