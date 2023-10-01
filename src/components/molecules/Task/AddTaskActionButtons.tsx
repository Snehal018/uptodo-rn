import {
  GestureResponderEvent,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';
import React, { FC } from 'react';
import { globalStyles } from '../../../styles';
import VectorIcon from '../../atoms/Icons/VectorIcon';
import { AppColors } from '../../../themes';
import { scale } from 'react-native-size-matters';
import { useAppSelector } from '../../../hooks';

interface ComponentProps {
  containerStyle?: ViewStyle;
  onPressClock: (event: GestureResponderEvent) => void;
  onPressCategory: (event: GestureResponderEvent) => void;
  onPressPriority: (event: GestureResponderEvent) => void;
  onPressAddTodo: (event: GestureResponderEvent) => void;
}

const AddTaskActionButtons: FC<ComponentProps> = ({
  containerStyle = {},
  onPressAddTodo = () => {},
  onPressCategory = () => {},
  onPressClock = () => {},
  onPressPriority = () => {},
}) => {
  const { title } = useAppSelector(state => state.task.createTaskDetails);

  const isAddTaskAllowed = !!title;

  return (
    <View style={[globalStyles.rowSpaceBetweenCenter, containerStyle]}>
      <VectorIcon
        iconType="AntDesign"
        name="clockcircleo"
        color={AppColors.white}
        size={scale(14)}
        style={styles.icon}
        onPress={onPressClock}
      />
      <VectorIcon
        iconType="EvilIcons"
        name="tag"
        color={AppColors.white}
        size={scale(24)}
        style={styles.icon}
        onPress={onPressCategory}
      />
      <VectorIcon
        iconType="Feather"
        name="flag"
        color={AppColors.white}
        size={scale(14)}
        style={styles.icon}
        onPress={onPressPriority}
      />

      <VectorIcon
        iconType="Ionicons"
        name="create-outline"
        style={{ marginLeft: 'auto' }}
        color={isAddTaskAllowed ? AppColors.primary : AppColors.gray}
        disabled={!isAddTaskAllowed}
        size={scale(20)}
        onPress={onPressAddTodo}
      />
    </View>
  );
};

export default AddTaskActionButtons;

const styles = StyleSheet.create({
  icon: {
    marginRight: scale(16),
  },
});
