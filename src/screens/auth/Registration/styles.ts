import { StyleSheet } from 'react-native';
import {
  AppColors,
  VERTICAL_BASE_SCALE,
  fontSize,
  fontWeight,
} from '../../../themes';
import { isAndroid } from '../../../utils/helperfunctions';
import {
  moderateVerticalScale,
  verticalScale,
} from 'react-native-size-matters/extend';

const styles = StyleSheet.create({
  registerTitle: {
    marginTop: verticalScale(isAndroid ? 20 : 2),
    marginBottom: verticalScale(isAndroid ? 8 : 5),
    fontSize: fontSize.header,
    fontWeight: isAndroid ? fontWeight.semi : fontWeight.bold,
  },
  inputContainerStyle: {
    marginTop: moderateVerticalScale(12, VERTICAL_BASE_SCALE),
  },
  loginText: {
    margin: verticalScale(24),
    textAlign: 'center',
    color: AppColors.gray,
    marginBottom: verticalScale(isAndroid ? 24 : 8),
  },
  backHeader: { marginTop: verticalScale(16) },
  registerButton: { marginTop: verticalScale(16) },
  separator: { marginVertical: verticalScale(32) },
  loginWithApple: { marginTop: verticalScale(16) },
});

export default styles;
