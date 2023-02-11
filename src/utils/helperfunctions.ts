import {Platform} from 'react-native';
import {AppStrings} from '../constants';

const normalizeFormikError = (error?: string, isTouched?: boolean): string => {
  if (error && isTouched) {
    return error;
  } else {
    return '';
  }
};

const parseThunkError = (error: any, fallbackErrorString?: string) => {
  return (
    error?.response?.data ?? {
      error: fallbackErrorString ?? AppStrings.somethingWentWrong,
      status: 500
    }
  );
};

const isAndroid: boolean = Platform.OS === 'android';

export {normalizeFormikError, isAndroid, parseThunkError};
