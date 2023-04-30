import {
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
  ViewStyle
} from 'react-native';
import React, {useState} from 'react';
import {AppColors, fontSize} from '../../themes';
import BaseText from './Basetext';
import {
  moderateVerticalScale,
  scale,
  verticalScale
} from 'react-native-size-matters';
import {globalStyles} from '../../styles';
import VectorIcon from './VectorIcon';

interface ComponentProps {
  title?: string;
  error?: string | boolean;
  inputContainerStyle?: ViewStyle;
}

const CustomInput = (props: TextInputProps & ComponentProps) => {
  const {title = '', error = ''} = props;
  const [showPassword, setShowPassword] = useState(false);

  const onEyeIconPressHandler = () => {
    setShowPassword(prevValue => !prevValue);
  };

  return (
    <View style={[styles.container, props?.inputContainerStyle]}>
      <BaseText style={styles.inputTitle}>{title}</BaseText>
      <View style={[styles.inputContainer, error ? styles.errorBorder : {}]}>
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          placeholderTextColor={AppColors.placeholder}
          {...props}
          style={[styles.inputStyle, props.style]}
          secureTextEntry={!!(props.secureTextEntry && !showPassword)}
        />
        {!!props.secureTextEntry && (
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
