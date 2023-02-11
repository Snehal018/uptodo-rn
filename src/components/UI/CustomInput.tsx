import {
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
  ViewStyle
} from 'react-native';
import React from 'react';
import {handleHeight, handleWidth, scaleHeight} from '../../utils/responsive';
import {AppColors, fontSize} from '../../themes';
import BaseText from './Basetext';

interface ComponentProps {
  title?: string;
  error?: string | boolean;
  inputContainerStyle?: ViewStyle;
}

const CustomInput = (props: TextInputProps & ComponentProps) => {
  const {title = '', error = ''} = props;

  return (
    <View style={[styles.inputContainer, props?.inputContainerStyle]}>
      <BaseText style={styles.inputTitle}>{title}</BaseText>
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        placeholderTextColor={AppColors.placeholder}
        {...props}
        style={[
          styles.inputStyle,
          props.style,
          error ? styles.errorBorder : {}
        ]}
      />
      <BaseText style={styles.errorText}>{error ? error : ' '}</BaseText>
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: handleHeight(24)
  },
  inputTitle: {
    opacity: 0.87,
    fontSize: fontSize.medium,
    marginBottom: handleHeight(10)
  },
  inputStyle: {
    borderWidth: handleWidth(0.8),
    borderColor: AppColors.gray,
    borderRadius: handleWidth(4),
    paddingVertical: 0,
    fontSize: fontSize.medium,
    height: scaleHeight(47),
    backgroundColor: AppColors.lightDark,
    paddingHorizontal: '3%',
    color: AppColors.white
  },
  errorText: {
    marginTop: handleHeight(5),
    marginLeft: handleWidth(2),
    color: AppColors.red
  },
  errorBorder: {
    borderColor: AppColors.red,
    borderWidth: 1.5
  }
});
