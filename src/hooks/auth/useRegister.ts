import { useFormik } from 'formik';
import { RegisterFormType } from '../../utils/types';
import { registrationValidationSchema } from '../../utils/validators/validationSchemas';
import { signupUser } from '../../redux';
import { Alert } from 'react-native';
import { AppStrings } from '../../constants';
import { navigate } from '../../navigation/helper/navigationService';
import { useAppDispatch } from '../reduxHooks';
import { AxiosResponse } from 'axios';

const useRegister = () => {
  const dispatch = useAppDispatch();

  const onSuccessRegistration = (res: AxiosResponse) => {
    if (res?.status === 201) {
      Alert.alert(AppStrings.success, AppStrings.userCreateSuccess, [
        { onPress: () => navigate('Login') },
      ]);
    }
  };

  const onFailRegistration = (e: any) => {
    Alert.alert('Failed to register');
    console.log('Register Error =>', e);
  };

  const onRegisterPressHandler = ({
    userName,
    password,
    confirmPassword,
  }: RegisterFormType) => {
    dispatch(signupUser({ userName, password, confirmPassword }))
      .unwrap()
      .then(onSuccessRegistration)
      .catch(onFailRegistration);
  };

  const registerFormik = useFormik<RegisterFormType>({
    initialValues: { userName: '', password: '', confirmPassword: '' },
    validationSchema: registrationValidationSchema,
    onSubmit: values => onRegisterPressHandler(values),
    validateOnMount: true,
  });

  return registerFormik;
};

export default useRegister;
