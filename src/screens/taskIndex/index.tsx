import {View, ViewStyle} from 'react-native';
import React from 'react';
import {globalStyles} from '../../styles';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {EmptyTaskIndex, TaskIndexHeader} from '../../components';
import {AppImages} from '../../assets/images';
import {AppStrings} from '../../constants';
import styles from './styles';
import {verticalScale} from 'react-native-size-matters';

const TaskIndexScreen = () => {
  const {top} = useSafeAreaInsets();

  const rootContainerStyle: ViewStyle = {
    ...globalStyles.darkContainerPadding,
    paddingTop: top + verticalScale(16)
  };

  return (
    <View style={rootContainerStyle}>
      <TaskIndexHeader />
      <EmptyTaskIndex
        image={AppImages.emptyTaskIndex}
        title={AppStrings.whatYouWantToDoToday}
        subTitle={AppStrings.tapToAddTasks}
        containerStyle={styles.emptyIndexContainerStyle}
      />
    </View>
  );
};

export default TaskIndexScreen;
