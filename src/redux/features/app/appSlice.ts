import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface InitialStateType {
  isNetworkConnected: boolean;
}

const initialState: InitialStateType = {
  isNetworkConnected: false,
};

const appSlice = createSlice({
  name: 'app',
  initialState: initialState,
  reducers: {
    updateNetworkStatus: (state, action: PayloadAction<boolean>) => {
      state.isNetworkConnected = action.payload;
    },
  },
});

export const appSliceActions = appSlice.actions;

export default appSlice.reducer;
