import React, {useContext} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {globalStyles} from '../../../styles';
import {
  AppButton,
  AppLoader,
  BackHeader,
  BaseText,
  CustomInput
} from '../../../components';
import {AppStrings} from '../../../constants';
import {handleHeight} from '../../../utils/responsive';
import Separator from '../../../components/UI/Separator';
import {AppImages} from '../../../assets/images';
import {normalizeFormikError} from '../../../utils/helperfunctions';
import {styles} from './styles';
import {AuthContext} from '../../../context/auth/authContext';
import {useCustomNavigation} from '../../../hooks';
import {useAppSelector} from '../../../../hooks/reduxHooks';

const Login = () => {
  let {formik: loginFormik} = useContext(AuthContext).login;
  const {navigation} = useCustomNavigation('Login');
  const {userName, password} = loginFormik.values;
  const {errors, handleChange, handleBlur, handleSubmit, touched} = loginFormik;
  const {isLoading} = useAppSelector(state => state.auth);
  const onPressRegisterHandler = () => {
    navigation.navigate('Registration');
  };

  return (
    <SafeAreaView style={globalStyles.darkContainerPadding}>
      {isLoading && <AppLoader />}
      <BackHeader />
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
        style={{
          letterSpacing: password ? 5 : undefined
        }}
        error={normalizeFormikError(errors.password, touched.password)}
      />
      <AppButton
        title={AppStrings.loginSmall}
        style={styles.loginButtom}
        onPress={handleSubmit}
      />
      <Separator
        centerText={AppStrings.or}
        lineStyle={{
          marginVertical: handleHeight(40)
        }}
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
        onPress={() => {}}
      />

      <BaseText style={styles.registrationText}>
        {AppStrings.dontHaveAccount}
        <BaseText onPress={onPressRegisterHandler}>
          {AppStrings.register}
        </BaseText>
      </BaseText>
    </SafeAreaView>
  );
};

export default Login;
