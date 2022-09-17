import {screenHeight, screenWidth} from '../themes';

const baseWidth = 375;
const baseHeight = 812;

const handleHeight = (height: number) => {
  return (screenHeight * height) / baseHeight;
};

const handleWidth = (width: number) => {
  return (screenWidth * width) / baseWidth;
};

export {handleHeight, handleWidth};
