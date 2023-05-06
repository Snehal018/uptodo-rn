import {StyleSheet, TextStyle, View} from 'react-native';
import React, {FC} from 'react';
import BaseText from '../Text/Basetext';
import {globalStyles} from '../../../styles';
import {AppColors, fontSize} from '../../../themes';
import {verticalScale} from 'react-native-size-matters';

interface ComponentProps {
  rightContent?: () => JSX.Element;
  centerContent?: () => JSX.Element;
  leftContent?: () => JSX.Element;
  title?: string;
  titleStyle?: TextStyle;
}

const Header: FC<ComponentProps> = ({
  centerContent,
  leftContent,
  rightContent,
  title,
  titleStyle
}) => {
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
    paddingVertical: verticalScale(8),
    justifyContent: 'space-between'
  },
  baseTitleStyle: {
    fontSize: fontSize.large,
    textAlign: 'center',
    color: AppColors.white
  }
});
