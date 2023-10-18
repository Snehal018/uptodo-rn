import { StyleSheet, TextStyle, View, ViewStyle } from 'react-native';
import React, { FC } from 'react';
import { scale, verticalScale } from 'react-native-size-matters/extend';
import { globalStyles } from '../../../styles';
import { BaseText } from '../../atoms';
import { AppColors } from '../../../themes';

interface ComponentProps {
  name: string;
  color: string;
  containerStyle?: ViewStyle;
  textStyle?: TextStyle;
}

const CategoryViewItem: FC<ComponentProps> = ({
  color = AppColors.primary,
  name = '',
  containerStyle = {},
  textStyle = {},
}) => {
  const extraContainerStyle: ViewStyle = {
    ...containerStyle,
    backgroundColor: color,
  };

  return (
    <View style={[styles.container, extraContainerStyle]}>
      <BaseText numberOfLines={1} style={textStyle}>
        {name}
      </BaseText>
    </View>
  );
};

export default CategoryViewItem;

const styles = StyleSheet.create({
  container: {
    ...globalStyles.rowContainer,
    paddingHorizontal: scale(8),
    paddingVertical: verticalScale(4),
    borderRadius: scale(4),
  },
});
