import {FormikProps} from 'formik';

interface LoginFormType {
  userName: string;
  password: string;
}

interface RegisterFormType {
  userName: string;
  password: string;
  confirmPassword: string;
}

interface AuthContextType {
  login: {
    formik: FormikProps<LoginFormType>;
  };
  register: {
    formik: FormikProps<RegisterFormType>;
  };
}

export type {LoginFormType, RegisterFormType, AuthContextType};
