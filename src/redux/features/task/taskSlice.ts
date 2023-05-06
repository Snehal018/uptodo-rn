import {PayloadAction, createSlice} from '@reduxjs/toolkit';

interface InitialStateType {
  isLoading: boolean;
  isAddTaskSheetOpen: boolean;
}

const initialState: InitialStateType = {
  isLoading: false,
  isAddTaskSheetOpen: false
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
    }
  },
  extraReducers: builder => {}
});

export default taskSlice.reducer;
export const {updateAddTaskSheetVisibleStatus} = taskSlice.actions;
