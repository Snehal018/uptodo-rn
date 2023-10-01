import { StyleSheet, View, ViewStyle } from 'react-native';
import React, { FC } from 'react';
import { TaskItemType } from '../../../utils/types';
import { BaseText } from '../../atoms';
import { globalStyles } from '../../../styles';
import { RadioButton } from 'react-native-paper';
import { AppColors, fontSize } from '../../../themes';
import { scale, verticalScale } from 'react-native-size-matters';
import PriorityViewItem from '../Priority/PriorityViewItem';
import CategoryViewItem from '../Category/CategoryViewItem';
import moment from 'moment';

interface ComponentProps {
  data: TaskItemType;
  containerStyle?: ViewStyle;
}

const TaskItem: FC<ComponentProps> = ({ data, containerStyle = {} }) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <RadioButton.Android value={'isDone'} />
      <View style={styles.body}>
        <BaseText style={styles.title} numberOfLines={2}>
          {data.title}
        </BaseText>
        <View
          style={[globalStyles.rowSpaceBetweenCenter, globalStyles.fullSpace]}>
          <BaseText style={styles.description} numberOfLines={2}>
            {moment(data.time).calendar()}
          </BaseText>
          <View style={styles.categoryPriorityContainer}>
            {!!data.category && (
              <CategoryViewItem
                {...data.category}
                containerStyle={styles.categoryContainer}
              />
            )}
            <PriorityViewItem priority={data.priority} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default TaskItem;

const styles = StyleSheet.create({
  container: {
    ...globalStyles.rowContainer,
    ...globalStyles.fullSpace,
    backgroundColor: AppColors.tabBarDark,
    borderRadius: scale(4),
    padding: scale(8),
    paddingLeft: scale(4),
    paddingTop: verticalScale(12),
  },
  body: {
    ...globalStyles.fullSpace,
    marginLeft: scale(4),
  },
  title: {
    fontSize: fontSize.medium,
    marginBottom: verticalScale(8),
    lineHeight: verticalScale(18),
  },
  description: {
    color: AppColors.lightGray,
    marginRight: scale(12),
  },
  categoryContainer: {
    marginRight: scale(8),
  },
  categoryPriorityContainer: {
    ...globalStyles.rowContainer,
  },
});
