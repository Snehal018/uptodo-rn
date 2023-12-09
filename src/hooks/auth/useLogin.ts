import { useFormik } from 'formik';
import { LoginFormType } from '../../utils/types';
import { loginValidationSchema } from '../../utils/validators/validationSchemas';
import { login } from '../../redux';
import { navigate } from '../../navigation/helper/navigationService';
import { useAppDispatch } from '../reduxHooks';
import { AxiosResponse } from 'axios';
import { Alert } from 'react-native';

const useLogin = () => {
  const dispatch = useAppDispatch();

  const onSuccessLogin = (res: AxiosResponse) => {
    if (res?.status === 200) {
      navigate('BottomTab');
    }
  };

  const onFailLogin = (e: any) => {
    Alert.alert('Failed to login');
    console.log('Login error =>', e);
  };

  const onLoginPressHandler = ({ userName, password }: LoginFormType) => {
    dispatch(login({ userName, password }))
      .unwrap()
      .then(onSuccessLogin)
      .catch(onFailLogin);
  };

  const loginFormik = useFormik<LoginFormType>({
    initialValues: { userName: '', password: '' },
    validationSchema: loginValidationSchema,
    onSubmit: values => onLoginPressHandler(values),
    validateOnMount: true,
  });
  return loginFormik;
};

export default useLogin;
