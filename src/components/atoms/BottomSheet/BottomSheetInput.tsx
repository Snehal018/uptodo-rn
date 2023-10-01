import {
  NativeSyntheticEvent,
  StyleSheet,
  TextInputFocusEventData,
  TextInputProps,
} from 'react-native';
import React, { FC, useState } from 'react';
import { BottomSheetTextInput } from '@gorhom/bottom-sheet';
import { BottomSheetTextInputProps } from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheetTextInput';
import { AppColors, fontSize } from '../../../themes';
import { scale, verticalScale } from 'react-native-size-matters';

const BottomSheetInput: FC<BottomSheetTextInputProps> = props => {
  const [isFocused, setIsFocused] = useState(false);

  const inputBorderWidth = !isFocused ? 0 : scale(0.8);

  const extraInputStyle: TextInputProps['style'] = {
    borderWidth: inputBorderWidth,
  };

  const onFocusHandler = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setIsFocused(true);
    props?.onFocus && props.onFocus(e);
  };

  const onBlurHandler = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setIsFocused(false);
    props?.onBlur && props.onBlur(e);
  };

  return (
    <BottomSheetTextInput
      placeholderTextColor={AppColors.lightGray}
      {...props}
      style={[styles.inputStyle, extraInputStyle, props.style]}
      onFocus={onFocusHandler}
      onBlur={onBlurHandler}
    />
  );
};

export default BottomSheetInput;

const styles = StyleSheet.create({
  inputStyle: {
    borderColor: AppColors.gray,
    borderRadius: scale(4),
    paddingVertical: 0,
    fontSize: fontSize.medium,
    height: verticalScale(40),
    backgroundColor: AppColors.tabBarDark,
    paddingHorizontal: '3%',
    color: AppColors.white,
  },
});
