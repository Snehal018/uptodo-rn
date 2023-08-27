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
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: '#00000080',
    zIndex: 999999
  }
});
