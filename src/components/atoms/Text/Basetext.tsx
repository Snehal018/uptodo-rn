import { StyleSheet, Text, TextProps } from 'react-native';
import React, { FC } from 'react';
import { AppColors, fontSize, fontTypes } from '../../../themes';

const BaseText: FC<TextProps> = props => {
  return (
    <Text {...props} style={[styles.baseText, props.style]}>
      {props.children}
    </Text>
  );
};

export default BaseText;

const styles = StyleSheet.create({
  baseText: {
    fontFamily: fontTypes.regular,
    color: AppColors.white,
    fontSize: fontSize.regular
  }
});
