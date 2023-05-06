import React, {PropsWithChildren, createContext} from 'react';
import {useFormik} from 'formik';
import {
  loginValidationSchema,
  registrationValidationSchema
} from '../../utils/validators/validationSchemas';
import {
  AuthContextType,
  LoginFormType,
  RegisterFormType
} from '../../utils/types';
import {onLoginPressHandler, onRegisterPressHandler} from './authFunctions';

export const AuthContext = createContext({} as AuthContextType);

const AuthContextProvider = ({children}: PropsWithChildren) => {
  const loginFormik = useFormik<LoginFormType>({
    initialValues: {
      userName: '',
      password: ''
    },
    validationSchema: loginValidationSchema,
    onSubmit: values => onLoginPressHandler(values),
    validateOnMount: true
  });

  const registerFormik = useFormik<RegisterFormType>({
    initialValues: {
      userName: '',
      password: '',
      confirmPassword: ''
    },
    validationSchema: registrationValidationSchema,
    onSubmit: values => onRegisterPressHandler(values),
    validateOnMount: true
  });

  const contextValue: AuthContextType = {
    register: {
      formik: registerFormik
    },
    login: {
      formik: loginFormik
    }
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthContextProvider;
