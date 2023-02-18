import {Image, Pressable, StyleSheet} from 'react-native';
import React from 'react';
import BaseText from '../UI/Basetext';
import {handleHeight, handleWidth} from '../../utils/responsive';
import {AppColors, fontSize} from '../../themes';
import {globalStyles} from '../../styles';

export interface TabItemProps {
  icon: number;
  title: string;
  onPressTab: () => void;
  isFocused: boolean;
}

const TabItem = ({icon, title, onPressTab, isFocused}: TabItemProps) => {
  return (
    <Pressable style={styles.container} onPress={onPressTab}>
      <Image
        style={[styles.tabIcon, isFocused && {tintColor: AppColors.primary}]}
        source={icon}
      />
      <BaseText style={styles.tabTitle}>{title}</BaseText>
    </Pressable>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {
    ...globalStyles.horizontalCenter,
    paddingTop: handleHeight(4),
    width: '45%'
  },
  tabIcon: {
    height: handleWidth(24),
    width: handleWidth(24)
  },
  tabTitle: {
    fontSize: fontSize.small,
    color: AppColors.white,
    marginTop: handleHeight(8)
  }
});
