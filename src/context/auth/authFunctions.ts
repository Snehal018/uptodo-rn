import {Alert} from 'react-native';
import {AppStrings} from '../../constants';
import {login, signupUser} from '../../redux/features/auth/thunks';
import store from '../../redux/store';
import {navigate} from '../../utils/navigationService';
import {LoginFormType, RegisterFormType} from '../../utils/types';

const onLoginPressHandler = ({userName, password}: LoginFormType) => {
  store
    .dispatch(login({userName, password}))
    .unwrap()
    .then(res => {
      if (res?.status === 200) {
        navigate('Home');
      }
    })
    .catch(err => {
      if (err?.status === 400) {
        Alert.alert(AppStrings.error, AppStrings.incorrectUsernameOrPassword);
      } else if (err.status === 404) {
        Alert.alert(AppStrings.error, AppStrings.noUserFound);
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
          {
            onPress: () => {
              navigate('Login');
            }
          }
        ]);
      }
    })
    .catch(err => {
      if (err?.status === 400) {
        Alert.alert(AppStrings.error, AppStrings.usernameAlreadyExists);
      } else {
        Alert.alert(AppStrings.error, AppStrings.failedToCreateUser);
      }
    });
};

export {onLoginPressHandler, onRegisterPressHandler};
