import { ViewStyle } from 'react-native';
import React, { FC } from 'react';
import { globalStyles } from '../../styles';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {
  EmptyTaskIndex,
  ScreenContainer,
  TaskIndexHeader,
  TasksDashboard,
} from '../../components';
import { AppImages } from '../../assets/images';
import { AppStrings } from '../../constants';
import styles from './styles';
import { verticalScale } from 'react-native-size-matters';

const TaskIndexScreen: FC = () => {
  const { top } = useSafeAreaInsets();

  const rootContainerStyle: ViewStyle = {
    ...globalStyles.horizontalPaddding,
    paddingTop: top + verticalScale(16),
  };

  const hasTasks = true;

  return (
    <ScreenContainer containerStyle={rootContainerStyle}>
      <TaskIndexHeader />
      {hasTasks ? (
        <TasksDashboard />
      ) : (
        <EmptyTaskIndex
          image={AppImages.emptyTaskIndex}
          title={AppStrings.whatYouWantToDoToday}
          subTitle={AppStrings.tapToAddTasks}
          containerStyle={styles.emptyIndexContainerStyle}
        />
      )}
    </ScreenContainer>
  );
};

export default TaskIndexScreen;
