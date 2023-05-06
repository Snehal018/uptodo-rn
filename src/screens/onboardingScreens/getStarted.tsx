import {StyleSheet, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {globalStyles} from '../../styles';
import {AppButton, BaseText, CustomStatusBar} from '../../components';
import {AppStrings} from '../../constants';
import {fontSize, fontWeight} from '../../themes';
import {useCustomNavigation} from '../../hooks';
import {verticalScale} from 'react-native-size-matters';

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
    marginTop: verticalScale(80)
  },
  welcomeSubText: {
    fontSize: fontSize.medium,
    textAlign: 'center',
    opacity: 0.67,
    marginTop: verticalScale(30)
  },
  loginButton: {marginBottom: verticalScale(20)},
  signupButton: {
    marginBottom: verticalScale(35)
  }
});
