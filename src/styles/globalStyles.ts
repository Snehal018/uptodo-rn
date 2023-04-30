import {StyleSheet} from 'react-native';
import {AppColors} from '../themes';
import AppPadding from './spacing';

const globalStyles = StyleSheet.create({
  fullSpace: {
    flex: 1
  },
  container: {
    flex: 1,
    backgroundColor: AppColors.white
  },
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
  }
});

export default globalStyles;
