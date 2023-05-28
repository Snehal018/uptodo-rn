import React, {useContext} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {globalStyles} from '../../../styles';
import {
  AppButton,
  BackHeader,
  BaseText,
  CustomInput,
  ScreenContainer,
  Separator
} from '../../../components';
import {AppStrings} from '../../../constants';
import {AppImages} from '../../../assets/images';
import {isAndroid, normalizeFormikError} from '../../../utils/helperfunctions';
import {styles} from './styles';
import {AuthContext} from '../../../context/auth/authContext';
import {useCustomNavigation} from '../../../hooks';
import {useAppSelector} from '../../../hooks/reduxHooks';
import {moderateVerticalScale} from 'react-native-size-matters';

const Login = () => {
  const {formik: loginFormik} = useContext(AuthContext).login;
  const {navigation} = useCustomNavigation('Login');
  const {userName, password} = loginFormik.values;
  const {errors, handleChange, handleBlur, handleSubmit, touched} = loginFormik;
  const {isLoading} = useAppSelector(state => state.auth);
  const onPressRegisterHandler = () => {
    navigation.navigate('Registration');
  };

  return (
    <ScreenContainer isLoading={isLoading}>
      <SafeAreaView style={globalStyles.darkContainerPadding}>
        <BackHeader
          headerContainerStyle={{
            marginTop: moderateVerticalScale(isAndroid ? 16 : 0, 0.35)
          }}
        />
        <BaseText style={styles.loginTitle}>{AppStrings.loginSmall}</BaseText>
        <CustomInput
          placeholder={AppStrings.enterUsername}
          title={AppStrings.username}
          value={userName}
          onChangeText={handleChange('userName')}
          onBlur={handleBlur('userName')}
          error={normalizeFormikError(errors.userName, touched.userName)}
        />
        <CustomInput
          title={AppStrings.password}
          placeholder={AppStrings.enterPassword}
          value={password}
          onChangeText={handleChange('password')}
          onBlur={handleBlur('password')}
          secureTextEntry={true}
          error={normalizeFormikError(errors.password, touched.password)}
        />
        <AppButton
          title={AppStrings.loginSmall}
          style={styles.loginButtom}
          onPress={handleSubmit}
        />
        <Separator
          centerText={AppStrings.or}
          lineStyle={{marginVertical: moderateVerticalScale(36, 0.35)}}
        />

        <AppButton
          style={styles.loginGoogle}
          title={AppStrings.loginWithGoogle}
          buttonType="outline"
          leadingIcon={AppImages.imgGoogle}
        />
        <AppButton
          style={styles.loginApple}
          title={AppStrings.loginWithApple}
          buttonType="outline"
          leadingIcon={AppImages.imgApple}
        />

        <BaseText style={styles.registrationText}>
          {AppStrings.dontHaveAccount}
          <BaseText onPress={onPressRegisterHandler}>
            {AppStrings.register}
          </BaseText>
        </BaseText>
      </SafeAreaView>
    </ScreenContainer>
  );
};

export default Login;
