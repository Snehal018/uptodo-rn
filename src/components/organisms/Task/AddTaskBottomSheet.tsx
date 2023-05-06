import {StyleSheet} from 'react-native';
import React, {FC, useContext} from 'react';
import {useAppDispatch, useAppSelector} from '../../../hooks/reduxHooks';
import {updateAddTaskSheetVisibleStatus} from '../../../redux/features/task/taskSlice';
import AppBottomsheet from '../../atoms/BottomSheet/AppBottomsheet';
import AddTaskForm from './AddTaskForm';
import CalendarModal from '../Calendar/CalendarModal';
import {AddTaskContext} from '../../../context/task/addTaskContext';
import PriorityModal from '../Priority/PriorityModal';

const AddTaskBottomSheet: FC = () => {
  const dispatch = useAppDispatch();
  const {isAddTaskSheetOpen} = useAppSelector(state => state.task);
  const {
    isCalendarModalVisible,
    setIsCalendarModalVisible,
    isPriorityModalVisible,
    setIsPriorityModalVisible
  } = useContext(AddTaskContext);

  const onBackdropPressHandler = () => {
    dispatch(updateAddTaskSheetVisibleStatus(false));
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
