import {StyleSheet} from 'react-native';
import {AppColors} from '../../themes';
import {globalStyles} from '../../styles';
import {screenWidth} from '../../themes';
import {scale, verticalScale} from 'react-native-size-matters';

const styles = StyleSheet.create({
  tabContainer: {
    ...globalStyles.rowSpaceBetweenCenter,
    height: verticalScale(80),
    backgroundColor: AppColors.tabBarDark,
    paddingVertical: verticalScale(12)
  },
  tabAddTaskButton: {
    ...globalStyles.centerContainer,
    position: 'absolute',
    height: scale(56),
    width: scale(56),
    borderRadius: scale(28),
    top: -verticalScale(28),
    left: (screenWidth - scale(56)) / 2,
    backgroundColor: AppColors.primary
  },
  taskAddIcon: {
    height: scale(24),
    width: scale(24)
  },
  tabItemsContainer: {
    flexDirection: 'row',
    width: '40%',
    justifyContent: 'space-around'
  }
});
export default styles;
