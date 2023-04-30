import {StyleSheet, View} from 'react-native';
import React from 'react';
import BaseText from '../../UI/Basetext';
import {AppPadding, globalStyles} from '../../../styles';
import {AppStrings} from '../../../constants';
import {fontSize, fontTypes} from '../../../themes';
import {handleHeight, handleWidth} from '../../../utils/responsive';
import BottomSheetInput from '../../Bottomsheet/BottomSheetInput';

const AddTaskForm = () => {
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
    </View>
  );
};

export default AddTaskForm;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: handleWidth(AppPadding.baseHorizontal),
    paddingVertical: handleHeight(12)
  },
  addTaskHeader: {
    fontSize: fontSize.large,
    fontFamily: fontTypes.bold
  },
  inputStyle: {
    marginTop: handleHeight(8)
  }
});
