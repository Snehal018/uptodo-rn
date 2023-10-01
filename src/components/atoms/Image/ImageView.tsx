import { Image, View, ViewStyle } from 'react-native';
import React, { FC } from 'react';
import FastImage, { FastImageProps } from 'react-native-fast-image';
import { globalStyles } from '../../../styles';
import { verticalScale } from 'react-native-size-matters';

interface ComponentProps extends FastImageProps {
  containerSize?: number;
  containerStyle?: ViewStyle;
}

const ImageView: FC<ComponentProps> = ({
  containerSize = verticalScale(42),
  containerStyle = {},
  ...imageProps
}) => {
  const baseImageContainerStyle: ViewStyle = {
    height: containerSize,
    width: containerSize,
    borderRadius: containerSize / 2,
    overflow: 'hidden',
  };

  return (
    <View style={[baseImageContainerStyle, containerStyle]}>
      {imageProps?.source ? (
        <FastImage {...imageProps} style={globalStyles.fillParent} />
      ) : (
        <Image {...imageProps} style={globalStyles.fillParent} />
      )}
    </View>
  );
};

export default ImageView;
