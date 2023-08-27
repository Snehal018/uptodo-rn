import { StyleSheet, TouchableOpacity, ViewStyle } from 'react-native';
import React, { FC } from 'react';
import VectorIcon from '../../atoms/Icons/VectorIcon';
import { AppColors, fontSize } from '../../../themes';
import { moderateVerticalScale, scale } from 'react-native-size-matters';
import BaseText from '../../atoms/Text/Basetext';
import { TouchableOpacityProps } from 'react-native';

interface ComponentProps {
  title: string;
  containerStyle?: ViewStyle;
  isSelected?: boolean;
  onPress: TouchableOpacityProps['onPress'];
}

const PriorityItem: FC<ComponentProps> = ({
  title = '',
  containerStyle = {},
  isSelected = false,
  onPress = () => { }
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        containerStyle,
        isSelected && styles.selectedItem
      ]}>
      <VectorIcon
        iconType="Feather"
        name="flag"
        color={AppColors.white}
        size={scale(14)}
      />
      <BaseText style={styles.title}>{title}</BaseText>
    </TouchableOpacity>
  );
};

export default PriorityItem;

const styles = StyleSheet.create({
  container: {
    height: scale(64),
    width: scale(64),
    backgroundColor: AppColors.primaryDark,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: scale(4)
  },
  title: {
    fontSize: fontSize.medium,
    marginTop: moderateVerticalScale(10, 0)
  },
  selectedItem: { backgroundColor: AppColors.primary }
});
