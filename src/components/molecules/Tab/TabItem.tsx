import {Image, Pressable, StyleSheet} from 'react-native';
import React, {FC} from 'react';
import BaseText from '../../atoms/Text/Basetext';
import {AppColors, fontSize} from '../../../themes';
import {globalStyles} from '../../../styles';
import {scale, verticalScale} from 'react-native-size-matters';

export interface TabItemProps {
  icon: number;
  title: string;
  onPressTab: () => void;
  isFocused: boolean;
}

const TabItem: FC<TabItemProps> = ({icon, title, onPressTab, isFocused}) => {
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
    paddingTop: verticalScale(4),
    width: '45%'
  },
  tabIcon: {
    height: scale(24),
    width: scale(24)
  },
  tabTitle: {
    fontSize: fontSize.small,
    color: AppColors.white,
    marginTop: verticalScale(8)
  }
});
