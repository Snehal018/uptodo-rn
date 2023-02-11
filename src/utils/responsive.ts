import {Dimensions} from 'react-native';
import {screenHeight, screenWidth} from '../themes';

const baseWidth = 375;
const baseHeight = 812;

const handleHeight = (height: number) => {
  return (screenHeight * height) / baseHeight;
};

const handleWidth = (width: number) => {
  return (screenWidth * width) / baseWidth;
};

const scaleHeight = (size: number) => {
  const w = Dimensions.get('window').width;
  const h = Dimensions.get('window').height;
  const widthReference = w / baseWidth;
  const screenRatio = w > h ? h / w : w / h;
  return screenRatio > 0.8 ? size : size * widthReference;
};

export {handleHeight, handleWidth, scaleHeight};
