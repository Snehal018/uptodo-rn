import {Pressable, View} from 'react-native';
import React, {FC} from 'react';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import styles from './styles';
import {AppImages} from '../../../assets/images';
import TabItem, {TabItemProps} from '../../molecules/Tab/TabItem';
import {AppStrings} from '../../../constants';
import VectorIcon from '../../atoms/Icons/VectorIcon';
import {AppColors} from '../../../themes';
import {globalStyles} from '../../../styles';
import {useAppDispatch} from '../../../hooks/reduxHooks';
import {updateAddTaskSheetVisibleStatus} from '../../../redux/features/task/taskSlice';
import {scale} from 'react-native-size-matters';

const BottomTab: FC<BottomTabBarProps> = props => {
  const {navigation, state} = props;
  const dispatch = useAppDispatch();

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

  const onAddTaskHandler = () => {
    dispatch(updateAddTaskSheetVisibleStatus(true));
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
      <Pressable
        onPress={onAddTaskHandler}
        style={({pressed}) => [
          styles.tabAddTaskButton,
          pressed && globalStyles.pressed
        ]}>
        <VectorIcon
          iconType="AntDesign"
          name="plus"
          size={scale(28)}
          color={AppColors.white}
        />
      </Pressable>
    </View>
  );
};

export default BottomTab;
