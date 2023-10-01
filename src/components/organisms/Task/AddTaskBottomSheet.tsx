import React, { FC, useContext } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks';
import { taskSliceActions } from '../../../redux';
import AppBottomsheet from '../../atoms/BottomSheet/AppBottomsheet';
import AddTaskForm from './AddTaskForm';
import CalendarModal from '../Calendar/CalendarModal';
import { AddTaskContext } from '../../../context/task/addTaskContext';
import PriorityModal from '../Priority/PriorityModal';
import { DateData } from 'react-native-calendars';
import moment from 'moment';
import { DateTimePickerEvent } from '@react-native-community/datetimepicker';

const AddTaskBottomSheet: FC = () => {
  const dispatch = useAppDispatch();
  const {
    isAddTaskSheetOpen,
    createTaskDetails: { date },
  } = useAppSelector(state => state.task);
  const {
    isCalendarModalVisible,
    setIsCalendarModalVisible,
    isPriorityModalVisible,
    setIsPriorityModalVisible,
  } = useContext(AddTaskContext);

  const onBackdropPressHandler = () => {
    dispatch(taskSliceActions.resetCreateTaskDetails());
    dispatch(taskSliceActions.updateAddTaskSheetVisibleStatus(false));
  };

  const onTaskSelectDateHandler = (date: DateData) => {
    dispatch(
      taskSliceActions.updateCreateTaskDetails({
        date: new Date(date.dateString).toString(),
      })
    );
  };

  const onTaskTimeSelectHandler = (
    e: DateTimePickerEvent,
    selectedDateTime?: Date
  ) => {
    dispatch(
      taskSliceActions.updateCreateTaskDetails({
        date: moment(date)
          .set('hours', moment(selectedDateTime).hours())
          .set('minutes', moment(selectedDateTime).minutes())
          .toString(),
      })
    );
  };

  const onPrioritySelectHandler = (priority: number | null) => {
    dispatch(taskSliceActions.updateCreateTaskDetails({ priority }));
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
        onSelectDate={onTaskSelectDateHandler}
        selectedDate={moment(new Date(date)).format('YYYY-MM-DD')}
        onSelectTime={onTaskTimeSelectHandler}
      />
      <PriorityModal
        visible={isPriorityModalVisible}
        setVisible={setIsPriorityModalVisible}
        onConfirmPriority={onPrioritySelectHandler}
      />
    </AppBottomsheet>
  );
};

export default AddTaskBottomSheet;
