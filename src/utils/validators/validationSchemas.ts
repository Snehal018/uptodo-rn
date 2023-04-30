import * as Yup from 'yup';
import {AppStrings} from '../../constants';

const loginValidationSchema = Yup.object().shape({
  userName: Yup.string().required(AppStrings.pleaseEnterPassword).trim(),
  password: Yup.string()
    .required(AppStrings.pleaseEnterPassword)
    .min(6, AppStrings.passwordLongError)
    .trim()
});

const registrationValidationSchema = Yup.object().shape({
  userName: Yup.string().required(AppStrings.pleaseEnterUsername).trim(),
  password: Yup.string()
    .required(AppStrings.pleaseEnterPassword)
    .min(6, AppStrings.passwordLongError)
    .trim(),
  confirmPassword: Yup.string()
    .required(AppStrings.pleaseEnterPassword)
    .oneOf([Yup.ref('password')], 'Your passwords do not match.')
    .min(6, AppStrings.passwordLongError)
    .trim()
});

export {loginValidationSchema, registrationValidationSchema};
