import {StyleSheet} from 'react-native';
import {AppColors, fontSize, fontWeight} from '../../../themes';
import {isAndroid} from '../../../utils/helperfunctions';
import {handleHeight} from '../../../utils/responsive';

const styles = StyleSheet.create({
  registerTitle: {
    marginTop: handleHeight(isAndroid ? 25 : 2),
    marginBottom: handleHeight(isAndroid ? 8 : 5),
    fontSize: fontSize.header,
    fontWeight: isAndroid ? fontWeight.semi : fontWeight.bold
  },
  inputContainerStyle: {
    marginTop: handleHeight(isAndroid ? 18 : 14)
  },
  loginText: {
    marginTop: 'auto',
    textAlign: 'center',
    color: AppColors.gray,
    marginBottom: handleHeight(isAndroid ? 16 : 8)
  }
});

export default styles;
