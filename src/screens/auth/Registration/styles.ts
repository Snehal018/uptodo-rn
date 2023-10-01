import { StyleSheet } from 'react-native';
import { AppColors, fontSize, fontWeight } from '../../../themes';
import { isAndroid } from '../../../utils/helperfunctions';
import {
  moderateVerticalScale,
  verticalScale,
} from 'react-native-size-matters';

const styles = StyleSheet.create({
  registerTitle: {
    marginTop: verticalScale(isAndroid ? 20 : 2),
    marginBottom: verticalScale(isAndroid ? 8 : 5),
    fontSize: fontSize.header,
    fontWeight: isAndroid ? fontWeight.semi : fontWeight.bold,
  },
  inputContainerStyle: {
    marginTop: moderateVerticalScale(isAndroid ? 12 : 12, 0.35),
  },
  loginText: {
    margin: verticalScale(24),
    textAlign: 'center',
    color: AppColors.gray,
    marginBottom: verticalScale(isAndroid ? 24 : 8),
  },
});

export default styles;
