import {ActivityIndicator, StyleSheet, View} from 'react-native';
import React from 'react';
import {AppColors} from '../../../themes';

const AppLoader = () => {
  return (
    <View style={styles.loaderStyle}>
      <ActivityIndicator color={AppColors.primary} size={'large'} />
    </View>
  );
};

export default AppLoader;

const styles = StyleSheet.create({
  loaderStyle: {
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000080',
    zIndex: 999999
  }
});
