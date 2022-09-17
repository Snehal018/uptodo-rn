import {StyleSheet, Text, TextProps} from 'react-native';
import React from 'react';
import {AppColors, fontTypes} from '../../themes';

const BaseText = (props: TextProps) => {
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
  },
});
