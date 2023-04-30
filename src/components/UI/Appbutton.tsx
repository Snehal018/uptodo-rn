import {
  Image,
  ImageProps,
  Pressable,
  StyleSheet,
  TextStyle,
  TouchableOpacityProps
} from 'react-native';
import React from 'react';
import BaseText from './Basetext';
import {AppColors, fontSize} from '../../themes';
import {verticalScale, scale} from 'react-native-size-matters';

interface ComponentProps {
  title: string;
  onPress?: () => void;
  buttonType?: 'solid' | 'outline' | 'none';
  style?: TouchableOpacityProps['style'];
  titleStyle?: TextStyle;
  disabled?: boolean;
  leadingIcon?: ImageProps['source'];
  leadingIconStyle?: ImageProps['style'];
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
  disabled,
  leadingIcon
}: ComponentProps) => {
  const buttonStyle = handleButtonStyle(buttonType);

  return (
    <Pressable
      disabled={disabled}
      onPress={onPress}
      style={({pressed}) => [
        styles.basePressable,
        buttonStyle,
        style,
        pressed && styles.pressed,
        disabled && styles.buttonDisabled
      ]}>
      {leadingIcon ? (
        <Image
          source={leadingIcon}
          resizeMode="contain"
          style={styles.leadingIcon}
        />
      ) : null}
      <BaseText style={[styles.baseTitle, titleStyle]}>{title}</BaseText>
    </Pressable>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  basePressable: {
    paddingVertical: verticalScale(12),
    paddingHorizontal: scale(24),
    borderRadius: scale(4),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  baseTitle: {
    fontSize: fontSize.medium,
    textAlign: 'center'
  },
  pressed: {
    opacity: 0.35
  },
  baseOutline: {
    borderWidth: 2,
    borderColor: AppColors.primary
  },
  baseSolid: {
    backgroundColor: AppColors.primary
  },
  baseNone: {
    paddingHorizontal: 0,
    borderRadius: 0
  },
  buttonDisabled: {
    backgroundColor: AppColors.primaryDisabled,
    opacity: 0.5
  },
  leadingIcon: {
    height: scale(24),
    width: scale(24),
    marginRight: scale(8)
  }
});
