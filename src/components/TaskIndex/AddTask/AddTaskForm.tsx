import {StyleSheet, View} from 'react-native';
import React from 'react';
import BaseText from '../../UI/Basetext';
import {AppPadding} from '../../../styles';
import {AppStrings} from '../../../constants';
import {fontSize, fontTypes} from '../../../themes';
import BottomSheetInput from '../../Bottomsheet/BottomSheetInput';
import {scale, verticalScale} from 'react-native-size-matters';

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
