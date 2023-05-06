import {StyleSheet} from 'react-native';
import React, {useContext} from 'react';
import {useAppDispatch, useAppSelector} from '../../../hooks/reduxHooks';
import {closeAddTaskSheet} from '../../../redux/features/task/taskSlice';
import AppBottomsheet from '../../Bottomsheet/AppBottomsheet';
import AddTaskForm from './AddTaskForm';
import CalendarModal from '../../CalendarModal/CalendarModal';
import {AddTaskContext} from '../../../context/task/addTaskContext';
import PriorityModal from '../../PriorityModal/PriorityModal';

const AddTaskBottomSheet = () => {
  const dispatch = useAppDispatch();
  const {isAddTaskSheetOpen} = useAppSelector(state => state.task);
  const {
    isCalendarModalVisible,
    setIsCalendarModalVisible,
    isPriorityModalVisible,
    setIsPriorityModalVisible
  } = useContext(AddTaskContext);

  const onBackdropPressHandler = () => {
    dispatch(closeAddTaskSheet());
  };

  return (
    <AppBottomsheet
      isVisible={isAddTaskSheetOpen}
      onBackDropPress={onBackdropPressHandler}
      snapPoints={['35%']}>
      <AddTaskForm />
      <CalendarModal
        visible={isCalendarModalVisible}
        setVisible={setIsCalendarModalVisible}
      />
      <PriorityModal
        visible={isPriorityModalVisible}
        setVisible={setIsPriorityModalVisible}
      />
    </AppBottomsheet>
  );
};

export default AddTaskBottomSheet;

const styles = StyleSheet.create({});
