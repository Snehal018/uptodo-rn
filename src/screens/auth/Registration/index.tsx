import React, {useContext, useEffect, useState} from 'react';
import {globalStyles} from '../../../styles';
import {
  AppButton,
  AppLoader,
  BackHeader,
  BaseText,
  CustomInput
} from '../../../components';
import {SafeAreaView} from 'react-native-safe-area-context';
import {AppStrings} from '../../../constants';
import styles from './styles';
import Separator from '../../../components/UI/Separator';
import {AppImages} from '../../../assets/images';
import {scaleHeight} from '../../../utils/responsive';
import {AuthContext} from '../../../context/auth/authContext';
import {normalizeFormikError} from '../../../utils/helperfunctions';
import {useCustomNavigation} from '../../../hooks';
import {useAppSelector} from '../../../hooks/reduxHooks';

const Registration = () => {
  const {formik: registerFormik} = useContext(AuthContext).register;
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const {navigation} = useCustomNavigation('Registration');

  const {isLoading} = useAppSelector(state => state.auth);

  const {userName, password, confirmPassword} = registerFormik.values;
  const {errors, handleBlur, handleChange, handleSubmit, touched} =
    registerFormik;

  useEffect(() => {
    if (confirmPassword.length >= 6) {
      if (confirmPassword !== password) {
        setConfirmPasswordError('Passwords do not match');
      } else {
        setConfirmPasswordError('');
      }
    }
  }, [confirmPassword]);

  const onPressLoginHandler = () => {
    navigation.navigate('GetStarted');
  };

  return (
    <SafeAreaView style={globalStyles.darkContainerPadding}>
      {isLoading && <AppLoader />}
      <BackHeader />
      <BaseText style={styles.registerTitle}>{AppStrings.register}</BaseText>
      <CustomInput
        title={AppStrings.username}
        inputContainerStyle={styles.inputContainerStyle}
        value={userName}
        onChangeText={handleChange('userName')}
        onBlur={handleBlur('userName')}
        error={normalizeFormikError(errors.userName, touched.userName)}
        placeholder={AppStrings.enterUsername}
      />
      <CustomInput
        title={AppStrings.password}
        inputContainerStyle={styles.inputContainerStyle}
        value={password}
        onChangeText={handleChange('password')}
        onBlur={handleBlur('password')}
        error={normalizeFormikError(errors.password, touched.password)}
        secureTextEntry={true}
        style={{letterSpacing: password ? 5 : undefined}}
        placeholder={AppStrings.enterPassword}
      />
      <CustomInput
        title={AppStrings.confirmPassword}
        inputContainerStyle={styles.inputContainerStyle}
        value={confirmPassword}
        onChangeText={handleChange('confirmPassword')}
        onBlur={handleBlur('confirmPassword')}
        error={
          normalizeFormikError(
            errors.confirmPassword,
            touched.confirmPassword
          ) || confirmPasswordError
        }
        secureTextEntry={true}
        style={{letterSpacing: confirmPassword ? 5 : undefined}}
        placeholder={AppStrings.reEnterPassword}
      />
      <AppButton
        title={AppStrings.register}
        style={{marginTop: scaleHeight(16)}}
        onPress={handleSubmit}
      />

      <Separator
        centerText={AppStrings.or}
        lineStyle={{marginVertical: scaleHeight(32)}}
      />
      <AppButton
        buttonType="outline"
        title={AppStrings.loginWithGoogle}
        leadingIcon={AppImages.imgGoogle}
      />
      <AppButton
        buttonType="outline"
        title={AppStrings.loginWithApple}
        leadingIcon={AppImages.imgApple}
        style={{marginTop: scaleHeight(16)}}
      />
      <BaseText style={styles.loginText}>
        {AppStrings.alreadyHaveAccount}{' '}
        <BaseText onPress={onPressLoginHandler}>
          {' '}
          {AppStrings.loginSmall}
        </BaseText>
      </BaseText>
    </SafeAreaView>
  );
};

export default Registration;
