// ? This File is Created to Provide the Project With Necessary Details Regarding Device Dimensions

import { Dimensions } from 'react-native';

const STANDARD_HEIGHT = 812;
const STANDARD_WIDTH = 375;

const { height, width } = Dimensions.get('window');

const SCREEN_WIDTH = width;
const SCREEN_HEIGHT = height;

// This is standard scale value to be used in combination of moderateVerticalScale method for styling
const VERTICAL_BASE_SCALE = 0.35;

export {
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
  STANDARD_HEIGHT,
  STANDARD_WIDTH,
  VERTICAL_BASE_SCALE,
};
