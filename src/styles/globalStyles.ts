import {StyleSheet} from 'react-native';
import {AppColors, fontSize, fontWeight} from '../themes';
import AppPadding from './spacing';
import {scale} from 'react-native-size-matters';

const globalStyles = StyleSheet.create({
  fullSpace: {
    flex: 1
  },
  container: {
    flex: 1,
    backgroundColor: AppColors.white
  },
  horizontalPaddding: {paddingHorizontal: scale(AppPadding.baseHorizontal)},
  containerPadding: {
    flex: 1,
    backgroundColor: AppColors.white,
    paddingHorizontal: AppPadding.baseHorizontal
  },
  darkContainer: {
    flex: 1,
    backgroundColor: AppColors.primaryDark
  },
  darkContainerPadding: {
    flex: 1,
    backgroundColor: AppColors.primaryDark,
    paddingHorizontal: AppPadding.baseHorizontal
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  rowSpaceBetweenCenter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  centerContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  horizontalCenter: {
    alignItems: 'center'
  },
  fillParent: {
    height: '100%',
    width: '100%'
  },
  pressed: {
    opacity: 0.7
  },
  mediumWhiteBoldText: {
    fontSize: fontSize.medium,
    color: AppColors.white,
    fontWeight: fontWeight.bold
  }
});

export default globalStyles;
