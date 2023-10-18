import { useFormik } from 'formik';
import { LoginFormType } from '../../utils/types';
import { loginValidationSchema } from '../../utils/validators/validationSchemas';
import { login } from '../../redux';
import { navigate } from '../../navigation/helper/navigationService';
import { useAppDispatch } from '../reduxHooks';

const useLogin = () => {
  const dispatch = useAppDispatch();

  const onLoginPressHandler = ({ userName, password }: LoginFormType) => {
    dispatch(login({ userName, password }))
      .unwrap()
      .then(res => {
        if (res?.status === 200) {
          navigate('BottomTab');
        }
      });
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
