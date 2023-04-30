import {Image, StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';
import {BaseText, CustomStatusBar} from '../../components';
import {globalStyles} from '../../styles';
import {AppColors, fontSize, fontWeight} from '../../themes';
import {AppImages} from '../../assets/images';
import {AppStrings} from '../../constants';
import {useCustomNavigation} from '../../hooks';
import {scale, verticalScale} from 'react-native-size-matters';

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
    height: verticalScale(80),
    width: scale(95),
    tintColor: AppColors.primary,
    marginTop: verticalScale(330)
  },
  text: {
    fontSize: fontSize.title,
    fontWeight: fontWeight.bold,
    marginTop: verticalScale(38)
  }
});
