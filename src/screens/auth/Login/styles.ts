import {StyleSheet} from 'react-native';
import {AppColors, fontSize, fontWeight} from '../../../themes';
import {isAndroid} from '../../../utils/helperfunctions';
import {moderateVerticalScale, verticalScale} from 'react-native-size-matters';

export const styles = StyleSheet.create({
  loginTitle: {
    marginVertical: moderateVerticalScale(16, 0.35),
    fontSize: fontSize.header,
    fontWeight: fontWeight.bold
  },
  loginButtom: {
    marginTop: moderateVerticalScale(36, 0.2)
  },
  loginGoogle: {
    marginBottom: verticalScale(8)
  },
  loginApple: {marginTop: verticalScale(10)},
  registrationText: {
    marginTop: 'auto',
    textAlign: 'center',
    color: AppColors.gray,
    marginBottom: verticalScale(isAndroid ? 16 : 8)
  }
});
