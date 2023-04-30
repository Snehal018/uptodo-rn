import {
  NativeSyntheticEvent,
  StyleSheet,
  TextInputFocusEventData,
  TextInputProps
} from 'react-native';
import React, {useState} from 'react';
import {BottomSheetTextInput} from '@gorhom/bottom-sheet';
import {BottomSheetTextInputProps} from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheetTextInput';
import {AppColors, fontSize} from '../../themes';
import {handleWidth, scaleHeight} from '../../utils/responsive';

const BottomSheetInput = (props: BottomSheetTextInputProps) => {
  const [isFocused, setIsFocused] = useState(false);

  const inputBorderWidth = !isFocused ? 0 : handleWidth(0.8);

  const extraInputStyle: TextInputProps['style'] = {
    borderWidth: inputBorderWidth
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
    borderRadius: handleWidth(4),
    paddingVertical: 0,
    fontSize: fontSize.medium,
    height: scaleHeight(40),
    backgroundColor: AppColors.tabBarDark,
    paddingHorizontal: '3%',
    color: AppColors.white
  }
});
