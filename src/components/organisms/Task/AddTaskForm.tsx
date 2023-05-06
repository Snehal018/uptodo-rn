import {Alert, StyleSheet, View} from 'react-native';
import React, {FC, useContext} from 'react';
import BaseText from '../../atoms/Text/Basetext';
import {AppPadding} from '../../../styles';
import {AppStrings} from '../../../constants';
import {fontSize, fontTypes} from '../../../themes';
import BottomSheetInput from '../../atoms/BottomSheet/BottomSheetInput';
import {
  moderateVerticalScale,
  scale,
  verticalScale
} from 'react-native-size-matters';
import AddTaskActionButtons from '../../molecules/Task/AddTaskActionButtons';
import {AddTaskContext} from '../../../context/task/addTaskContext';
import {useAppDispatch, useAppSelector} from '../../../hooks';
import {
  resetCreateTaskDetails,
  updateAddTaskSheetVisibleStatus,
  updateCreateTaskDetails
} from '../../../redux/features/task/taskSlice';
import {addTask} from '../../../redux/features/task/thunks';

const AddTaskForm: FC = () => {
  const {setIsCalendarModalVisible, setIsPriorityModalVisible} =
    useContext(AddTaskContext);
  const dispatch = useAppDispatch();
  const {title, description, category, date, priority} = useAppSelector(
    state => state.task.createTaskDetails
  );

  const onPressSelectTimeHandler = () => {
    setIsCalendarModalVisible(true);
  };

  const onPressCategoryHandler = () => {};

  const onPressPriorityHandler = () => {
    setIsPriorityModalVisible(true);
  };

  const onPressAddTodoHandler = () => {
    dispatch(
      addTask({
        params: {
          title,
          description,
          time: date,
          category: undefined,
          priority: priority ?? 1
        }
      })
    )
      .unwrap()
      .then(res => {
        if (res.status === 201) {
          Alert.alert(AppStrings.success, res.data?.message);
          dispatch(resetCreateTaskDetails());
          updateAddTaskSheetVisibleStatus(false);
        }
      });
  };

  const onChangeTitle = (titleValue: string) => {
    dispatch(updateCreateTaskDetails({title: titleValue}));
  };

  const onChangeDescription = (descriptionValue: string) => {
    dispatch(updateCreateTaskDetails({description: descriptionValue}));
  };

  return (
    <View style={styles.container}>
      <BaseText style={styles.addTaskHeader}>{AppStrings.addTask}</BaseText>
      <BottomSheetInput
        placeholder={AppStrings.title}
        style={styles.inputStyle}
        onChangeText={onChangeTitle}
        value={title}
      />
      <BottomSheetInput
        placeholder={AppStrings.description}
        style={styles.inputStyle}
        onChangeText={onChangeDescription}
        value={description}
      />
      <AddTaskActionButtons
        containerStyle={{marginTop: moderateVerticalScale(12, 0)}}
        onPressAddTodo={onPressAddTodoHandler}
        onPressCategory={onPressCategoryHandler}
        onPressClock={onPressSelectTimeHandler}
        onPressPriority={onPressPriorityHandler}
      />
    </View>
  );
};

export default AddTaskForm;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: scale(AppPadding.baseHorizontal),
    paddingVertical: verticalScale(12)
  },
  addTaskHeader: {
    fontSize: fontSize.large,
    fontFamily: fontTypes.bold
  },
  inputStyle: {
    marginTop: verticalScale(8)
  }
});
