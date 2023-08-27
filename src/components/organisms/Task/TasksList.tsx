import {
  FlatList,
  FlatListProps,
  StyleSheet,
  View,
  ViewStyle
} from 'react-native';
import React, { FC } from 'react';
import { TaskItem } from '../../molecules';
import { TaskItemType } from '../../../utils/types';
import { BaseText } from '../../atoms';
import { fontSize, fontWeight } from '../../../themes';
import { verticalScale } from 'react-native-size-matters';

interface ComponentProps {
  tasks: TaskItemType[];
  flatlistProps: FlatListProps<TaskItemType>;
  listTitle?: string;
  containerStyle: ViewStyle;
}

const dummyObject: TaskItemType = {
  _id: '64eb23c66bcf78228a927b2c',
  title: 'lunch with friends',
  description: '',
  time: '2023-08-27T14:00:10.000Z',
  priority: 2,
  category: {
    color: '#F75410',
    name: 'University'
  },
  isDone: false,
  subTasks: [],
  user: {
    _id: '644e38ba9a8270261a1ce774',
    username: 'Snehal',
    profileImage: null
  }
};

const TasksList: FC<ComponentProps> = ({
  tasks = [dummyObject],
  flatlistProps = {},
  listTitle,
  containerStyle = {}
}) => {
  return (
    <View style={containerStyle}>
      {!!listTitle && <BaseText style={styles.listTitle}>{listTitle}</BaseText>}
      <FlatList
        data={tasks}
        renderItem={({ item: _taskItem }) => <TaskItem data={_taskItem} />}
        keyExtractor={(_, i) => i.toString()}
        {...flatlistProps}
      />
    </View>
  );
};

export default TasksList;

const styles = StyleSheet.create({
  listTitle: {
    fontSize: fontSize.large,
    fontWeight: fontWeight.semi,
    marginBottom: verticalScale(16)
  }
});
