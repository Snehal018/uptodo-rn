import { ActivityIndicator, StyleSheet } from 'react-native';
import React, { FC } from 'react';
import { AppColors } from '../../../themes';

const AppLoader: FC = () => {
  return (
    <ActivityIndicator
      color={AppColors.primary}
      size={'large'}
      style={styles.loaderStyle}
    />
  );
};

export default AppLoader;

const styles = StyleSheet.create({
  loaderStyle: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#00000080',
    zIndex: 999999,
  },
});
