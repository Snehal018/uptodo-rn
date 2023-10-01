import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { addTask } from './thunks';
import { Alert } from 'react-native';
import { AppStrings } from '../../../constants';

interface TaskType {
  title: string;
  description: string;
  date: string;
  priority: number | null;
  category: string | null;
}

interface InitialStateType {
  isLoading: boolean;
  isAddTaskSheetOpen: boolean;
  createTaskDetails: TaskType;
}

const initialState: InitialStateType = {
  isLoading: false,
  isAddTaskSheetOpen: false,
  createTaskDetails: {
    title: '',
    description: '',
    category: null,
    priority: null,
    date: new Date().toString(),
  },
};

const taskSlice = createSlice({
  name: 'task',
  initialState: initialState,
  reducers: {
    updateAddTaskSheetVisibleStatus: (
      state,
      action: PayloadAction<boolean>
    ) => {
      state.isAddTaskSheetOpen = action.payload;
    },
    updateCreateTaskDetails: (
      state,
      action: PayloadAction<Partial<TaskType>>
    ) => {
      state.createTaskDetails = {
        ...state.createTaskDetails,
        ...action.payload,
      };
    },
    resetCreateTaskDetails: state => {
      state.createTaskDetails = {
        title: '',
        description: '',
        category: null,
        priority: null,
        date: new Date().toString(),
      };
    },
  },
  extraReducers: builder => {
    builder.addCase(addTask.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(addTask.fulfilled, state => {
      state.isLoading = false;
    });
    builder.addCase(addTask.rejected, (state, action: PayloadAction<any>) => {
      state.isLoading = false;
      Alert.alert(AppStrings.error, action.payload.error);
    });
  },
});

export default taskSlice.reducer;
export const taskSliceActions = taskSlice.actions;
