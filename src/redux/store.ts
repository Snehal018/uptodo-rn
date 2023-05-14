import {configureStore} from '@reduxjs/toolkit';
import authSlice from './features/auth/authSlice';
import logger from 'redux-logger';
import {combineReducers} from 'redux';
import {persistReducer, persistStore} from 'redux-persist';
import taskSlice from './features/task/taskSlice';
import {reduxMmkvStorage} from '../utils/storage/reduxMmkvStorage';
import appSlice from './features/app/appSlice';

const persistConfig = {
  key: 'root',
  storage: reduxMmkvStorage,
  whitelist: ['auth']
};

const rootReducer = combineReducers({
  auth: authSlice,
  task: taskSlice,
  app: appSlice
});

const persistRootReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistRootReducer,
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE']
      }
    }).concat(logger);
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);

export default store;
