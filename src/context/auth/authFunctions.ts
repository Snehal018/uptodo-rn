import {Alert} from 'react-native';
import {AppStrings} from '../../constants';
import {login, signupUser, store} from '../../redux';
import {navigate} from '../../navigation/helper/navigationService';
import {LoginFormType, RegisterFormType} from '../../utils/types';

const onLoginPressHandler = ({userName, password}: LoginFormType) => {
  store
    .dispatch(login({userName, password}))
    .unwrap()
    .then(res => {
      if (res?.status === 200) {
        navigate('BottomTab');
      }
    });
};

const onRegisterPressHandler = ({
  userName,
  password,
  confirmPassword
}: RegisterFormType) => {
  store
    .dispatch(signupUser({userName, password, confirmPassword}))
    .unwrap()
    .then(res => {
      if (res?.status === 201) {
        Alert.alert(AppStrings.success, AppStrings.userCreateSuccess, [
          {onPress: () => navigate('Login')}
        ]);
      }
    });
};

export {onLoginPressHandler, onRegisterPressHandler};
