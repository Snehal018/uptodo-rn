import {StyleSheet, View} from 'react-native';
import React, {FC} from 'react';
import {SearchInput} from '../../atoms';
import {globalStyles} from '../../../styles';
import {AppStrings} from '../../../constants';

const TasksDashboard: FC = () => {
  return (
    <View style={globalStyles.darkContainer}>
      <SearchInput placeholder={AppStrings.searchTask} />
    </View>
  );
};

export default TasksDashboard;

const styles = StyleSheet.create({});
