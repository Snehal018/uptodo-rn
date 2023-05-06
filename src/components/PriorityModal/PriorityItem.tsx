import {StyleSheet, TouchableOpacity, ViewStyle} from 'react-native';
import React, {FC} from 'react';
import VectorIcon from '../UI/VectorIcon';
import {AppColors, fontSize} from '../../themes';
import {moderateVerticalScale, scale} from 'react-native-size-matters';
import BaseText from '../UI/Basetext';

interface ComponentProps {
  title: string;
  containerStyle?: ViewStyle;
  isSelected?: boolean;
}

const PriorityItem: FC<ComponentProps> = ({
  title = '',
  containerStyle = {},
  isSelected = false
}) => {
  return (
    <TouchableOpacity
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
  selectedItem: {backgroundColor: AppColors.primary}
});
