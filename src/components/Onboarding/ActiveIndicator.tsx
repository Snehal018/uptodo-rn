import { FlatList, StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import React from "react";
import { handleHeight, handleWidth } from "../../utils/responsive";
import { AppColors } from "../../themes";

interface ComponentProps {
  numberOfItems?: number;
  activeIndex: number;
  style?: StyleProp<ViewStyle>;
}

const renderIndicatorItem = (
  activeIndex: number,
  indicatorItem: { item: number; index: number }
) => {
  return (
    <View
      style={[
        styles.baseIndicator,
        indicatorItem.index === activeIndex && styles.activeIndicator,
      ]}
    />
  );
};

const ActiveIndicator = ({
  activeIndex = 0,
  numberOfItems = 3,
  style,
}: ComponentProps) => {
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
    height: handleHeight(4),
    width: handleWidth(26),
    backgroundColor: AppColors.lightGray,
    borderRadius: handleWidth(20),
    marginHorizontal: handleWidth(4),
  },
  activeIndicator: {
    backgroundColor: AppColors.white,
  },
  baseFlatlist: {
    flexGrow: 0,
  },
});
