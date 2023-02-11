import {configureStore} from '@reduxjs/toolkit';
import authSlice from './features/auth/authSlice';
import logger from 'redux-logger';

const store = configureStore({
  reducer: {
    auth: authSlice
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware().concat(logger);
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
