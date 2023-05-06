import {FlatList, StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import React, {FC} from 'react';
import {AppColors} from '../../../themes';
import {scale, verticalScale} from 'react-native-size-matters';

interface ComponentProps {
  numberOfItems?: number;
  activeIndex: number;
  style?: StyleProp<ViewStyle>;
}

const renderIndicatorItem = (
  activeIndex: number,
  indicatorItem: {item: number; index: number}
) => {
  return (
    <View
      style={[
        styles.baseIndicator,
        indicatorItem.index === activeIndex && styles.activeIndicator
      ]}
    />
  );
};

const ActiveIndicator: FC<ComponentProps> = ({
  activeIndex = 0,
  numberOfItems = 3,
  style
}) => {
  return (
    <FlatList
      horizontal={true}
      data={new Array(numberOfItems)}
      renderItem={renderIndicatorItem.bind(this, activeIndex)}
      keyExtractor={(_, index) => index.toString()}
      scrollEnabled={false}
      style={[styles.baseFlatlist, style]}
    />
  );
};

export default ActiveIndicator;

const styles = StyleSheet.create({
  baseIndicator: {
    height: verticalScale(4),
    width: scale(26),
    backgroundColor: AppColors.lightGray,
    borderRadius: scale(20),
    marginHorizontal: scale(4)
  },
  activeIndicator: {
    backgroundColor: AppColors.white
  },
  baseFlatlist: {
    flexGrow: 0
  }
});
