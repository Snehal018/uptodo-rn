import {StyleSheet, TextStyle, View} from 'react-native';
import React from 'react';
import BaseText from './Basetext';
import {handleHeight} from '../../utils/responsive';
import {globalStyles} from '../../styles';
import {AppColors, fontSize} from '../../themes';

interface ComponentProps {
  rightContent?: () => JSX.Element;
  centerContent?: () => JSX.Element;
  leftContent?: () => JSX.Element;
  title?: string;
  titleStyle?: TextStyle;
}

const Header = ({
  centerContent,
  leftContent,
  rightContent,
  title,
  titleStyle
}: ComponentProps) => {
  return (
    <View style={styles.container}>
      <View style={{width: '30%'}}>{leftContent && leftContent()}</View>
      <View style={{width: '30%', flex: 1}}>
        {title ? (
          <BaseText style={[styles.baseTitleStyle, titleStyle]}>
            {title}
          </BaseText>
        ) : centerContent ? (
          centerContent()
        ) : null}
      </View>
      <View style={{width: '30%'}}>{rightContent && rightContent()}</View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    ...globalStyles.rowContainer,
    paddingVertical: handleHeight(8),
    justifyContent: 'space-between'
  },
  baseTitleStyle: {
    fontSize: fontSize.large,
    textAlign: 'center',
    color: AppColors.white
  }
});
