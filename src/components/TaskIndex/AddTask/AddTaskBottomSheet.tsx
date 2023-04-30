import {StyleSheet, View} from 'react-native';
import React from 'react';
import {useAppDispatch, useAppSelector} from '../../../hooks/reduxHooks';
import {closeAddTaskSheet} from '../../../redux/features/task/taskSlice';
import AppBottomsheet from '../../Bottomsheet/AppBottomsheet';
import AddTaskForm from './AddTaskForm';

const AddTaskBottomSheet = () => {
  const {isAddTaskSheetOpen} = useAppSelector(state => state.task);
  const dispatch = useAppDispatch();

  const onBackdropPressHandler = () => {
    dispatch(closeAddTaskSheet());
  };

  return (
    <AppBottomsheet
      isVisible={isAddTaskSheetOpen}
      onBackDropPress={onBackdropPressHandler}>
      <AddTaskForm />
    </AppBottomsheet>
  );
};

export default AddTaskBottomSheet;

const styles = StyleSheet.create({});
