import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosClient from '../../../api';
import { ApiConstants } from '../../../api/apiConstants';
import { parseThunkError } from '../../../utils/helperfunctions';
import { LoginFormType, RegisterFormType } from '../../../utils/types';

const signupUser = createAsyncThunk(
  'auth/signup',
  async (
    { userName, password, confirmPassword }: RegisterFormType,
    { rejectWithValue }
  ) => {
    try {
      const response = await axiosClient.post(ApiConstants.signup, {
        username: userName,
        password,
        confirmPassword,
      });
      return response;
    } catch (error) {
      return rejectWithValue(parseThunkError(error));
    }
  }
);

const login = createAsyncThunk(
  'auth/login',
  async ({ userName, password }: LoginFormType, { rejectWithValue }) => {
    try {
      const response = await axiosClient.post(ApiConstants.login, {
        username: userName,
        password,
      });
      return response;
    } catch (error: any) {
      return rejectWithValue(parseThunkError(error));
    }
  }
);

export { signupUser, login };
