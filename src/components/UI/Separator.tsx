import {StyleSheet, View, ViewStyle} from 'react-native';
import React from 'react';
import {AppColors} from '../../themes';
import BaseText from './Basetext';
import {scale, verticalScale} from 'react-native-size-matters';

interface ComponentProps {
  lineStyle?: ViewStyle;
  centerText?: string;
}

const Separator = ({centerText, lineStyle}: ComponentProps) => {
  return (
    <View>
      <View style={[styles.breakLine, lineStyle]} />
      {centerText ? (
        <View style={styles.centerTextContainer}>
          <BaseText style={styles.centerTextStyle}>{centerText}</BaseText>
        </View>
      ) : null}
    </View>
  );
};

export default Separator;

const styles = StyleSheet.create({
  breakLine: {
    height: verticalScale(1),
    backgroundColor: AppColors.gray,
    marginVertical: verticalScale(15)
  },
  centerTextStyle: {
    marginTop: 'auto',
    marginBottom: 'auto',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingHorizontal: scale(5),
    backgroundColor: AppColors.primaryDark
  },
  centerTextContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0
  }
});
