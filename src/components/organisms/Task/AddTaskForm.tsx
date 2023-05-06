import {StyleSheet, View} from 'react-native';
import React, {useContext} from 'react';
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

const AddTaskForm = () => {
  const {setIsCalendarModalVisible, setIsPriorityModalVisible} =
    useContext(AddTaskContext);

  const onPressSelectTimeHandler = () => {
    setIsCalendarModalVisible(true);
  };

  const onPressCategoryHandler = () => {};

  const onPressPriorityHandler = () => {
    setIsPriorityModalVisible(true);
  };

  const onPressAddTodoHandler = () => {};

  return (
    <View style={styles.container}>
      <BaseText style={styles.addTaskHeader}>{AppStrings.addTask}</BaseText>
      <BottomSheetInput
        placeholder={AppStrings.title}
        style={styles.inputStyle}
      />
      <BottomSheetInput
        placeholder={AppStrings.description}
        style={styles.inputStyle}
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
