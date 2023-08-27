import {
  Image,
  ImageSourcePropType,
  ImageStyle,
  StyleSheet,
  TextStyle,
  View,
  ViewStyle
} from 'react-native';
import React, { FC } from 'react';
import BaseText from '../../atoms/Text/Basetext';
import { AppColors, fontSize } from '../../../themes';
import { scale, verticalScale } from 'react-native-size-matters';

interface ComponentProps {
  image: ImageSourcePropType;
  title: string;
  subTitle?: string;
  containerStyle?: ViewStyle;
  imageStyle?: ImageStyle;
  titleStyle?: TextStyle;
  subTitleStyle?: TextStyle;
}

const EmptyTaskIndex: FC<ComponentProps> = ({
  image,
  title,
  subTitle,
  containerStyle,
  imageStyle,
  titleStyle,
  subTitleStyle
}) => {
  return (
    <View style={containerStyle}>
      <Image source={image} style={[styles.baseImage, imageStyle]} />
      <BaseText style={[styles.baseText, styles.baseTitle, titleStyle]}>
        {title}
      </BaseText>
      <BaseText style={[styles.baseText, styles.baseSubTitle, subTitleStyle]}>
        {subTitle}
      </BaseText>
    </View>
  );
};

export default EmptyTaskIndex;

const styles = StyleSheet.create({
  baseImage: {
    height: scale(227),
    width: scale(227),
    alignSelf: 'center'
  },
  baseText: {
    color: AppColors.white,
    textAlign: 'center',
    marginTop: verticalScale(16)
  },
  baseTitle: {
    fontSize: fontSize.large
  },
  baseSubTitle: {
    fontSize: fontSize.medium
  }
});
