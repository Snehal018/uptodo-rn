import store from './store';
import {persistor, AppDispatch, RootState} from './store';
import appSlice from './features/app/appSlice';
import authSlice from './features/auth/authSlice';
import taskSlice from './features/task/taskSlice';
import {appSliceActions} from './features/app/appSlice';
import {authSliceActions} from './features/auth/authSlice';
import {taskSliceActions} from './features/task/taskSlice';
import {signupUser} from './features/auth/thunks';
import {login} from './features/auth/thunks';
import {addTask} from './features/task/thunks';

export type {AppDispatch, RootState};

export {
  // Stores
  store,
  persistor,

  // Slices
  appSlice,
  authSlice,
  taskSlice,

  // Actions
  appSliceActions,
  authSliceActions,
  taskSliceActions,

  // Thunks
  addTask,
  login,
  signupUser
};
