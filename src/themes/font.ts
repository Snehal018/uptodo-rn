import { TextStyle } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { STANDARD_HEIGHT } from './metrics';

interface FontWeightType {
  full: TextStyle['fontWeight'];
  semi: TextStyle['fontWeight'];
  low: TextStyle['fontWeight'];
  bold: TextStyle['fontWeight'];
  normal: TextStyle['fontWeight'];
}

const fontTypes = {
  thin: 'Lato-Thin',
  light: 'Lato-Light',
  regular: 'Lato-Regular',
  bold: 'Lato-Bold',
  black: 'Lato-Black',
};

const fontSize = {
  tiny: RFValue(10, STANDARD_HEIGHT),
  small: RFValue(12, STANDARD_HEIGHT),
  regular: RFValue(14, STANDARD_HEIGHT),
  medium: RFValue(16, STANDARD_HEIGHT),
  medium_extra: RFValue(18, STANDARD_HEIGHT),
  large: RFValue(20, STANDARD_HEIGHT),
  large_extra: RFValue(22, STANDARD_HEIGHT),
  big: RFValue(24, STANDARD_HEIGHT),
  header: RFValue(32, STANDARD_HEIGHT),
  title: RFValue(40, STANDARD_HEIGHT),
};

const fontWeight: FontWeightType = {
  full: '900',
  semi: '600',
  low: '400',
  bold: 'bold',
  normal: 'normal',
};

export { fontTypes, fontSize, fontWeight };
