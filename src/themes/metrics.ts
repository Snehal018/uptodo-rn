// ? This File is Created to Provide the Project With Necessary Details Regarding Device Dimensions

import { Dimensions } from 'react-native';

export const STANDARD_HEIGHT = 812;
export const STANDARD_WIDTH = 375;

const { height, width } = Dimensions.get('window');

const screenWidth = width;
const screenHeight = height;

export { screenHeight, screenWidth };
