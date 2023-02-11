import {Image, StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';
import {BaseText, CustomStatusBar} from '../../components';
import {globalStyles} from '../../styles';
import {handleHeight, handleWidth} from '../../utils/responsive';
import {AppColors, fontSize, fontWeight} from '../../themes';
import {AppImages} from '../../assets/images';
import {AppStrings} from '../../constants';
import {useCustomNavigation} from '../../hooks';

const SplashSceen = () => {
  const {navigation} = useCustomNavigation('Splash');

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Onboarding');
    }, 500);
  }, [navigation]);

  return (
    <View style={[globalStyles.darkContainer, globalStyles.horizontalCenter]}>
      <CustomStatusBar barType="dark" />
      <Image
        source={AppImages.logo}
        style={styles.image}
        resizeMode="contain"
      />
      <BaseText style={styles.text}>{AppStrings.appName}</BaseText>
    </View>
  );
};

export default SplashSceen;

const styles = StyleSheet.create({
  image: {
    height: handleHeight(80),
    width: handleWidth(95),
    tintColor: AppColors.primary,
    marginTop: handleHeight(330)
  },
  text: {
    fontSize: fontSize.title,
    fontWeight: fontWeight.bold,
    marginTop: handleHeight(38)
  }
});
