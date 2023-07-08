import {StyleSheet, View} from 'react-native';
import React, {FC} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {globalStyles} from '../../styles';
import {AppButton, BaseText, ScreenContainer} from '../../components';
import {AppStrings} from '../../constants';
import {fontSize, fontWeight} from '../../themes';
import {useCustomNavigation} from '../../hooks';
import {verticalScale} from 'react-native-size-matters';

const GetStarted: FC = () => {
  const {navigation} = useCustomNavigation('Login');

  const onLoginPressHandler = () => {
    navigation.navigate('Login');
  };

  const onCreateAccountPressHandler = () => {
    navigation.navigate('Registration');
  };

  return (
    <ScreenContainer>
      <SafeAreaView style={globalStyles.darkContainerPadding}>
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
    </ScreenContainer>
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
