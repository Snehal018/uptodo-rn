import {
  Pressable,
  StyleSheet,
  TextStyle,
  TouchableOpacityProps,
} from 'react-native';
import React from 'react';
import BaseText from './basetext';
import {handleHeight, handleWidth} from '../../utils/responsive';
import {AppColors, fontSize} from '../../themes';

interface ComponentProps {
  title: string;
  onPress?: () => void;
  buttonType?: 'solid' | 'outline' | 'none';
  style?: TouchableOpacityProps['style'];
  titleStyle?: TextStyle;
}

const handleButtonStyle = (type: string) => {
  let _buttonStyle: TouchableOpacityProps['style'] = styles.basePressable;
  switch (type) {
    case 'solid':
      _buttonStyle = styles.baseSolid;
      break;
    case 'outline':
      _buttonStyle = styles.baseOutline;
      break;
    default:
      _buttonStyle = styles.baseNone;
      break;
  }
  return _buttonStyle;
};

const AppButton = ({
  title,
  onPress = () => {},
  buttonType = 'solid',
  style,
  titleStyle,
}: ComponentProps) => {
  const buttonStyle = handleButtonStyle(buttonType);

  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => [
        styles.basePressable,
        buttonStyle,
        style,
        pressed && styles.pressed,
      ]}>
      <BaseText style={[styles.baseTitle, titleStyle]}>{title}</BaseText>
    </Pressable>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  basePressable: {
    paddingVertical: handleHeight(12),
    paddingHorizontal: handleWidth(24),
    borderRadius: handleWidth(4),
  },
  baseTitle: {
    fontSize: fontSize.medium,
    textAlign: 'center',
  },
  pressed: {
    opacity: 0.35,
  },
  baseOutline: {
    borderWidth: 2,
    borderColor: AppColors.primary,
  },
  baseSolid: {
    backgroundColor: AppColors.primary,
  },
  baseNone: {
    paddingHorizontal: 0,
    borderRadius: 0,
  },
});
