import {StyleSheet, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {globalStyles} from '../../styles';
import {AppButton, BackHeader, BaseText} from '../../components';
import {AppStrings} from '../../constants';
import {fontSize, fontWeight} from '../../themes';
import {handleHeight} from '../../utils/responsive';

const GetStarted = () => {
  return (
    <SafeAreaView style={[globalStyles.darkContainerPadding]}>
      <BackHeader
        headerContainerStyle={{
          paddingVertical: handleHeight(20),
        }}
      />
      <View style={[globalStyles.fullSpace, globalStyles.horizontalCenter]}>
        <BaseText style={styles.welcomeHeader}>
          {AppStrings.welcomeToUptodo}
        </BaseText>
        <BaseText style={styles.welcomeSubText}>
          {AppStrings.welcomeSubText}
        </BaseText>
      </View>
      <View>
        <AppButton style={styles.loginButton} title={AppStrings.login} />
        <AppButton
          buttonType="outline"
          style={styles.signupButton}
          title={AppStrings.createAccount}
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
    marginTop: handleHeight(30),
  },
  welcomeSubText: {
    fontSize: fontSize.medium,
    textAlign: 'center',
    opacity: 0.67,
    marginTop: handleHeight(10),
  },
  loginButton: {marginBottom: handleHeight(15)},
  signupButton: {
    marginBottom: handleHeight(25),
  },
});
