import {Platform} from 'react-native';
import {AppStrings} from '../constants';
import {store} from '../redux';

const normalizeFormikError = (error?: string, isTouched?: boolean): string => {
  if (error && isTouched) {
    return error;
  } else {
    return '';
  }
};

const parseThunkError = (error: any, fallbackErrorString?: string) => {
  if (error?.message === 'Network Error') {
    const {isNetworkConnected} = store.getState().app;
    const networkErrorMessage = isNetworkConnected
      ? AppStrings.serverNetworkError
      : AppStrings.clientNetworkError;
    return {
      error: networkErrorMessage,
      status: 408
    };
  }
  return (
    error?.response?.data ?? {
      error: fallbackErrorString ?? AppStrings.somethingWentWrong,
      status: 500
    }
  );
};

const isAndroid: boolean = Platform.OS === 'android';

export {normalizeFormikError, isAndroid, parseThunkError};
