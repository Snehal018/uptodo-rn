import {createSlice} from '@reduxjs/toolkit';

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
    openAddTaskSheet: state => {
      state.isAddTaskSheetOpen = true;
    },
    closeAddTaskSheet: state => {
      state.isAddTaskSheetOpen = false;
    }
  },
  extraReducers: builder => {}
});

export default taskSlice.reducer;
export const {closeAddTaskSheet, openAddTaskSheet} = taskSlice.actions;
