import React, {FC, useContext, useEffect, useState} from 'react';
import {globalStyles} from '../../../styles';
import {
  AppButton,
  AppKeyboardScrollWrapper,
  BackHeader,
  BaseText,
  CustomInput,
  ScreenContainer,
  Separator
} from '../../../components';
import {SafeAreaView} from 'react-native-safe-area-context';
import {AppStrings} from '../../../constants';
import styles from './styles';
import {AppImages} from '../../../assets/images';
import {AuthContext} from '../../../context/auth/authContext';
import {normalizeFormikError} from '../../../utils/helperfunctions';
import {useCustomNavigation} from '../../../hooks';
import {useAppSelector} from '../../../hooks/reduxHooks';
import {verticalScale} from 'react-native-size-matters';

const Registration: FC = () => {
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
        setConfirmPasswordError(AppStrings.passwordsDoNotMatch);
      } else {
        setConfirmPasswordError('');
      }
    }
  }, [confirmPassword]);

  const onPressLoginHandler = () => {
    navigation.navigate('GetStarted');
  };

  return (
    <ScreenContainer isLoading={isLoading}>
      <SafeAreaView style={globalStyles.darkContainerPadding}>
        <BackHeader headerContainerStyle={{marginTop: verticalScale(16)}} />
        <AppKeyboardScrollWrapper>
          <BaseText style={styles.registerTitle}>
            {AppStrings.register}
          </BaseText>
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
            placeholder={AppStrings.reEnterPassword}
          />
          <AppButton
            title={AppStrings.register}
            style={{marginTop: verticalScale(16)}}
            onPress={handleSubmit}
          />

          <Separator
            centerText={AppStrings.or}
            lineStyle={{marginVertical: verticalScale(32)}}
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
            style={{marginTop: verticalScale(16)}}
          />
          <BaseText style={styles.loginText}>
            {AppStrings.alreadyHaveAccount}{' '}
            <BaseText onPress={onPressLoginHandler}>
              {' '}
              {AppStrings.loginSmall}
            </BaseText>
          </BaseText>
        </AppKeyboardScrollWrapper>
      </SafeAreaView>
    </ScreenContainer>
  );
};

export default Registration;
