import {Image, StyleSheet, View, ViewStyle} from 'react-native';
import React from 'react';
import FastImage, {FastImageProps} from 'react-native-fast-image';
import {handleHeight} from '../../utils/responsive';
import {globalStyles} from '../../styles';

interface ComponentProps extends FastImageProps {
  containerSize: number;
  containerStyle: ViewStyle;
}

const ImageView = ({
  containerSize = handleHeight(42),
  containerStyle = {},
  ...imageProps
}: ComponentProps) => {
  const baseImageContainerStyle: ViewStyle = {
    height: containerSize,
    width: containerSize,
    borderRadius: containerSize / 2,
    overflow: 'hidden'
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

const styles = StyleSheet.create({});
