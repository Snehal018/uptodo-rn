import { TextStyle } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

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
  tiny: RFValue(8),
  small: RFValue(10),
  regular: RFValue(12),
  medium: RFValue(14),
  medium_extra: RFValue(16),
  large: RFValue(18),
  large_extra: RFValue(20),
  big: RFValue(22),
  header: RFValue(30),
  title: RFValue(38),
};

const fontWeight: FontWeightType = {
  full: '900',
  semi: '600',
  low: '400',
  bold: 'bold',
  normal: 'normal',
};

export { fontTypes, fontSize, fontWeight };
