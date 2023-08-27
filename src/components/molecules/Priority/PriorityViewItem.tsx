import { StyleSheet, View, ViewStyle } from 'react-native';
import React, { FC } from 'react';
import { BaseText, VectorIcon } from '../../atoms';
import { AppColors } from '../../../themes';
import { scale, verticalScale } from 'react-native-size-matters';
import { globalStyles } from '../../../styles';

interface ComponentProps {
  priority: number;
  containerStyle?: ViewStyle;
}

const PriorityViewItem: FC<ComponentProps> = ({
  priority = 4,
  containerStyle = {}
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <VectorIcon
        iconType="Feather"
        name="flag"
        color={AppColors.white}
        size={scale(12)}
      />
      <BaseText style={styles.priorityText}>{priority}</BaseText>
    </View>
  );
};

export default PriorityViewItem;

const styles = StyleSheet.create({
  container: {
    ...globalStyles.rowContainer,
    paddingHorizontal: scale(8),
    paddingVertical: verticalScale(4),
    borderRadius: scale(4),
    borderColor: AppColors.primaryDisabled,
    borderWidth: scale(1)
  },
  priorityText: {
    marginLeft: scale(6)
  }
});
