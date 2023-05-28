import {Image, StyleSheet, View} from 'react-native';
import React, {useMemo, useState} from 'react';
import {globalStyles} from '../../styles';
import {
  ActiveIndicator,
  AppButton,
  BaseText,
  CustomStatusBar
} from '../../components';
import {SafeAreaView} from 'react-native-safe-area-context';
import {AppStrings} from '../../constants';
import {AppImages} from '../../assets/images';
import {fontSize, fontWeight} from '../../themes';
import {useCustomNavigation} from '../../hooks';
import {scale, verticalScale} from 'react-native-size-matters';
import {useAppDispatch} from '../../hooks/reduxHooks';
import {authSliceActions} from '../../redux';

const onboardingContentHandler = (currentIndex: number) => {
  let image, title, subTitle;
  switch (currentIndex) {
    case 0:
      image = AppImages.imgManageTask;
      title = AppStrings.manageTasks;
      subTitle = AppStrings.manageTasksSubText;
      break;
    case 1:
      image = AppImages.imgDailyRoutine;
      title = AppStrings.dailyRoutine;
      subTitle = AppStrings.dailyRoutineSubText;
      break;
    case 2:
      image = AppImages.imgOrganizeTask;
      title = AppStrings.organizeTask;
      subTitle = AppStrings.organizeTaskSubText;
      break;

    default:
      break;
  }
  return {image, title, subTitle};
};

const Onboarding = () => {
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const {image, subTitle, title} = onboardingContentHandler(currentPageIndex);
  const {navigation} = useCustomNavigation('Onboarding');
  const dispatch = useAppDispatch();

  const onBackPressHandler = () => {
    if (currentPageIndex === 1) {
      setCurrentPageIndex(0);
    } else {
      setCurrentPageIndex(1);
    }
  };

  const onSkipPressHandler = () => {
    dispatch(authSliceActions.visitedOnboarding());
    navigation.reset({index: 0, routes: [{name: 'GetStarted'}]});
  };

  const onNextPressHandler = () => {
    switch (currentPageIndex) {
      case 0:
        setCurrentPageIndex(1);
        break;
      case 1:
        setCurrentPageIndex(2);
        break;
      case 2:
        onSkipPressHandler();
        break;
      default:
        break;
    }
  };

  const nextButtonTitle = useMemo(
    () => (currentPageIndex === 2 ? AppStrings.getStarted : AppStrings.next),
    [currentPageIndex]
  );

  return (
    <SafeAreaView
      style={[
        globalStyles.darkContainerPadding,
        globalStyles.horizontalCenter
      ]}>
      <CustomStatusBar />
      <AppButton
        onPress={onSkipPressHandler}
        title={AppStrings.skip}
        buttonType="none"
        style={styles.skipButtonStyle}
      />
      <View style={styles.mainContentContainer}>
        <View style={{height: verticalScale(325)}}>
          <Image
            source={image}
            style={styles.imageStyle}
            resizeMode="contain"
          />
        </View>
        <ActiveIndicator activeIndex={currentPageIndex} />
        <View style={styles.textContainer}>
          <BaseText style={styles.manageTaskText}>{title}</BaseText>
          <BaseText style={styles.manageTaskSubText}>{subTitle}</BaseText>
        </View>
      </View>
      {currentPageIndex === 0 ? (
        <AppButton
          onPress={onNextPressHandler}
          title={AppStrings.next}
          style={styles.nextButtonStyle}
        />
      ) : (
        <View style={styles.footerButtonContainer}>
          <AppButton
            onPress={onBackPressHandler}
            title={AppStrings.back}
            buttonType="none"
            titleStyle={styles.backButtonTitle}
          />
          <AppButton onPress={onNextPressHandler} title={nextButtonTitle} />
        </View>
      )}
    </SafeAreaView>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  skipButtonStyle: {
    opacity: 0.44,
    alignSelf: 'flex-start',
    marginTop: verticalScale(8)
  },
  imageStyle: {
    height: verticalScale(277),
    width: scale(211)
  },
  manageTaskText: {
    fontSize: fontSize.header,
    marginTop: verticalScale(32),
    marginBottom: verticalScale(24),
    fontWeight: fontWeight.semi
  },
  manageTaskSubText: {
    fontSize: fontSize.medium,
    textAlign: 'center',
    opacity: 0.87
  },
  textContainer: {alignItems: 'center', maxWidth: '95%'},
  footerButtonContainer: {
    flexDirection: 'row',
    marginTop: 'auto',
    marginBottom: verticalScale(28),
    justifyContent: 'space-between',
    width: '100%'
  },
  backButtonTitle: {opacity: 0.44},
  nextButtonStyle: {
    marginTop: 'auto',
    marginBottom: verticalScale(28),
    alignSelf: 'flex-end'
  },
  mainContentContainer: {
    alignItems: 'center',
    marginTop: 'auto'
  }
});
