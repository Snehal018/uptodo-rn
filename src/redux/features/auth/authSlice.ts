import {createSlice} from '@reduxjs/toolkit';
import {UserProfile} from '../../../utils/types/user';
import {login, signupUser} from './thunks';

interface InitialStateType {
  isLoading: boolean;
  authToken: string | null;
  userprofile: UserProfile | null;
  isVisitedOnboarding: boolean;
}

const initialState: InitialStateType = {
  isLoading: false,
  authToken: null,
  userprofile: null,
  isVisitedOnboarding: false
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    visitedOnboarding: state => {
      state.isVisitedOnboarding = true;
    }
  },
  extraReducers: builder => {
    builder.addCase(signupUser.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(signupUser.fulfilled, state => {
      state.isLoading = false;
    });
    builder.addCase(signupUser.rejected, state => {
      state.isLoading = false;
    });
    builder.addCase(login.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.isLoading = false;
      state.authToken = action.payload?.data?.authToken;
      state.userprofile = action.payload?.data?.userProfile;
    });
    builder.addCase(login.rejected, state => {
      state.isLoading = false;
    });
  }
});

export const authSliceActions = authSlice.actions;
export default authSlice.reducer;
