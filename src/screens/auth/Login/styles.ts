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

export const styles = StyleSheet.create({
  loginTitle: {
    marginVertical: moderateVerticalScale(16, VERTICAL_BASE_SCALE),
    fontSize: fontSize.header,
    fontWeight: fontWeight.bold,
  },
  loginButtom: {
    marginTop: moderateVerticalScale(36, 0.2),
  },
  loginGoogle: {
    marginBottom: verticalScale(8),
  },
  loginApple: { marginTop: verticalScale(10) },
  registrationText: {
    marginTop: 'auto',
    textAlign: 'center',
    color: AppColors.gray,
    marginBottom: verticalScale(isAndroid ? 16 : 8),
  },
  backHeaderContainer: {
    marginTop: moderateVerticalScale(isAndroid ? 16 : 0, VERTICAL_BASE_SCALE),
  },
  separator: {
    marginVertical: moderateVerticalScale(36, VERTICAL_BASE_SCALE),
  },
});
