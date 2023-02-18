import {StyleSheet} from 'react-native';
import {AppColors} from '../../themes';
import {handleHeight, handleWidth} from '../../utils/responsive';
import {AppPadding, globalStyles} from '../../styles';
import {screenWidth} from '../../themes';

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: handleHeight(100),
    backgroundColor: AppColors.tabBarDark,
    paddingVertical: handleHeight(12),
    paddingHorizontal: handleWidth(AppPadding.baseHorizontal)
  },
  tabAddTaskButton: {
    ...globalStyles.centerContainer,
    position: 'absolute',
    height: handleWidth(64),
    width: handleWidth(64),
    borderRadius: handleWidth(32),
    top: -handleHeight(32),
    left: (screenWidth - handleWidth(64)) / 2,
    backgroundColor: AppColors.primary
  },
  taskAddIcon: {
    height: handleWidth(28),
    width: handleWidth(28)
  },
  tabItemsContainer: {
    flexDirection: 'row',
    width: '40%',
    justifyContent: 'space-around'
  }
});
export default styles;
