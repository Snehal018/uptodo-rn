import {FormikProps} from 'formik';
import {Dispatch, SetStateAction} from 'react';

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

interface AddTaskContextType {
  isCalendarModalVisible: boolean;
  setIsCalendarModalVisible: Dispatch<SetStateAction<boolean>>;
  isPriorityModalVisible: boolean;
  setIsPriorityModalVisible: Dispatch<SetStateAction<boolean>>;
}

export type {
  LoginFormType,
  RegisterFormType,
  AuthContextType,
  AddTaskContextType
};
