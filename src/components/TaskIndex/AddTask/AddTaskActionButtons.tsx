import {GestureResponderEvent, StyleSheet, View, ViewStyle} from 'react-native';
import React from 'react';
import {globalStyles} from '../../../styles';
import VectorIcon from '../../UI/VectorIcon';
import {AppColors} from '../../../themes';
import {scale} from 'react-native-size-matters';

interface ComponentProps {
  containerStyle?: ViewStyle;
  onPressClock: (event: GestureResponderEvent) => void;
  onPressCategory: (event: GestureResponderEvent) => void;
  onPressPriority: (event: GestureResponderEvent) => void;
  onPressAddTodo: (event: GestureResponderEvent) => void;
}

const AddTaskActionButtons = ({
  containerStyle = {},
  onPressAddTodo = () => {},
  onPressCategory = () => {},
  onPressClock = () => {},
  onPressPriority = () => {}
}: ComponentProps) => {
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
        name="md-create-outline"
        style={{marginLeft: 'auto'}}
        color={AppColors.primary}
        size={scale(20)}
        onPress={onPressAddTodo}
      />
    </View>
  );
};

export default AddTaskActionButtons;

const styles = StyleSheet.create({
  icon: {
    marginRight: scale(16)
  }
});
