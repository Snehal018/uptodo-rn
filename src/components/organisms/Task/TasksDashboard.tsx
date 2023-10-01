import { StyleSheet, View } from 'react-native';
import React, { FC } from 'react';
import { SearchInput } from '../../atoms';
import { globalStyles } from '../../../styles';
import { AppStrings } from '../../../constants';
import TasksList from './TasksList';
import { verticalScale } from 'react-native-size-matters';

const TasksDashboard: FC = () => {
  return (
    <View style={globalStyles.darkContainer}>
      <SearchInput placeholder={AppStrings.searchTask} />
      <TasksList containerStyle={styles.tasksListContainer} />
    </View>
  );
};

export default TasksDashboard;

const styles = StyleSheet.create({
  tasksListContainer: {
    marginTop: verticalScale(16),
  },
});
