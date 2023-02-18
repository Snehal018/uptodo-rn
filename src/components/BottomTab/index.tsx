import {View} from 'react-native';
import React from 'react';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import styles from './styles';
import {AppImages} from '../../assets/images';
import TabItem, {TabItemProps} from './TabItem';
import {AppStrings} from '../../constants';
import VectorIcon from '../UI/VectorIcon';
import {handleWidth} from '../../utils/responsive';
import {AppColors} from '../../themes';

const BottomTabComponent = (props: BottomTabBarProps) => {
  const {navigation, state} = props;

  const getTabItemProps = (tabIndex: number): TabItemProps => {
    let icon = -1;
    let title = '';

    switch (tabIndex) {
      case 0:
        icon = AppImages.imgTabHome;
        title = AppStrings.index;
        break;
      case 1:
        icon = AppImages.imgTabCalendar;
        title = AppStrings.calendar;
        break;
      case 2:
        icon = AppImages.imgTabFocus;
        title = AppStrings.focus;
        break;
      case 3:
        icon = AppImages.imgTabProfile;
        title = AppStrings.profile;
        break;

      default:
        break;
    }

    const isFocused = state.index === tabIndex;

    const onPress = () => {
      const route = state.routes[tabIndex];

      navigation.emit({
        type: 'tabPress',
        target: route.key,
        canPreventDefault: true
      });

      navigation.navigate(route.name);
    };

    return {
      icon,
      title,
      onPressTab: onPress,
      isFocused
    };
  };

  return (
    <View style={styles.tabContainer}>
      <View style={styles.tabItemsContainer}>
        <TabItem {...getTabItemProps(0)} />
        <TabItem {...getTabItemProps(1)} />
      </View>
      <View style={styles.tabItemsContainer}>
        <TabItem {...getTabItemProps(2)} />
        <TabItem {...getTabItemProps(3)} />
      </View>
      <View style={styles.tabAddTaskButton}>
        <VectorIcon
          iconType="AntDesign"
          name="plus"
          size={handleWidth(28)}
          color={AppColors.white}
        />
      </View>
    </View>
  );
};

export default BottomTabComponent;
