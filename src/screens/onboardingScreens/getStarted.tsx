import {StyleSheet, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {globalStyles} from '../../styles';
import {
  AppButton,
  BackHeader,
  BaseText,
  CustomStatusBar
} from '../../components';
import {AppStrings} from '../../constants';
import {fontSize, fontWeight} from '../../themes';
import {handleHeight} from '../../utils/responsive';
import {useCustomNavigation} from '../../hooks';

const GetStarted = () => {
  const {navigation} = useCustomNavigation('Login');

  const onLoginPressHandler = () => {
    navigation.navigate('Login');
  };

  const onCreateAccountPressHandler = () => {
    navigation.navigate('Registration');
  };

  return (
    <SafeAreaView style={globalStyles.darkContainerPadding}>
      <BackHeader />
      <CustomStatusBar barType="dark" />
      <View style={[globalStyles.fullSpace, globalStyles.horizontalCenter]}>
        <BaseText style={styles.welcomeHeader}>
          {AppStrings.welcomeToUptodo}
        </BaseText>
        <BaseText style={styles.welcomeSubText}>
          {AppStrings.welcomeSubText}
        </BaseText>
      </View>
      <View>
        <AppButton
          style={styles.loginButton}
          title={AppStrings.login}
          onPress={onLoginPressHandler}
        />
        <AppButton
          buttonType="outline"
          style={styles.signupButton}
          title={AppStrings.createAccount}
          onPress={onCreateAccountPressHandler}
        />
      </View>
    </SafeAreaView>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  welcomeHeader: {
    fontSize: fontSize.header,
    fontWeight: fontWeight.bold,
    marginTop: handleHeight(42)
  },
  welcomeSubText: {
    fontSize: fontSize.medium,
    textAlign: 'center',
    opacity: 0.67,
    marginTop: handleHeight(30)
  },
  loginButton: {marginBottom: handleHeight(20)},
  signupButton: {
    marginBottom: handleHeight(35)
  }
});
