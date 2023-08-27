import {
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
  ViewStyle
} from 'react-native';
import React, { FC, useState } from 'react';
import { AppColors, fontSize } from '../../../themes';
import BaseText from '../Text/Basetext';
import {
  moderateVerticalScale,
  scale,
  verticalScale
} from 'react-native-size-matters';
import { globalStyles } from '../../../styles';
import VectorIcon from '../Icons/VectorIcon';

interface ComponentProps {
  title?: string;
  error?: string | boolean;
  inputContainerStyle?: ViewStyle;
}

const CustomInput: FC<TextInputProps & ComponentProps> = ({
  title = '',
  error = false,
  inputContainerStyle = {},
  ...inputProps
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const onEyeIconPressHandler = () => {
    setShowPassword(prevValue => !prevValue);
  };

  return (
    <View style={[styles.container, inputContainerStyle]}>
      <BaseText style={styles.inputTitle}>{title}</BaseText>
      <View style={[styles.inputContainer, error ? styles.errorBorder : {}]}>
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          placeholderTextColor={AppColors.placeholder}
          {...inputProps}
          style={[styles.inputStyle, inputProps.style]}
          secureTextEntry={!!(inputProps.secureTextEntry && !showPassword)}
        />
        {!!inputProps.secureTextEntry && (
          <VectorIcon
            iconType="Ionicons"
            name={showPassword ? 'eye-off-outline' : 'eye-outline'}
            color={AppColors.lightGray}
            size={scale(16)}
            onPress={onEyeIconPressHandler}
          />
        )}
      </View>
      <BaseText style={styles.errorText}>{error ? error : ' '}</BaseText>
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  container: {
    marginTop: verticalScale(16)
  },
  inputTitle: {
    opacity: 0.87,
    fontSize: fontSize.medium,
    marginBottom: moderateVerticalScale(10, 0.35)
  },
  inputContainer: {
    ...globalStyles.rowSpaceBetweenCenter,
    borderWidth: scale(0.8),
    borderColor: AppColors.gray,
    borderRadius: scale(4),
    height: moderateVerticalScale(42, 0.35),
    paddingHorizontal: '3%',
    backgroundColor: AppColors.lightDark
  },
  inputStyle: {
    ...globalStyles.fullSpace,
    paddingVertical: 0,
    fontSize: fontSize.medium,
    color: AppColors.white
  },
  errorText: {
    marginTop: verticalScale(8),
    marginLeft: scale(2),
    color: AppColors.red
  },
  errorBorder: {
    borderColor: AppColors.red,
    borderWidth: 1.5
  }
});
