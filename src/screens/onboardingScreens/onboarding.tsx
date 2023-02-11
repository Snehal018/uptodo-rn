import {Image, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {globalStyles} from '../../styles';
import {
  ActiveIndicator,
  AppButton,
  BaseText,
  CustomStatusBar
} from '../../components';
import {SafeAreaView} from 'react-native-safe-area-context';
import {handleHeight, handleWidth} from '../../utils/responsive';
import {AppStrings} from '../../constants';
import {AppImages} from '../../assets/images';
import {fontSize, fontWeight} from '../../themes';
import {useCustomNavigation} from '../../hooks';

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

  const onBackPressHandler = () => {
    if (currentPageIndex === 1) {
      setCurrentPageIndex(0);
    } else {
      setCurrentPageIndex(1);
    }
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
        navigation.navigate('GetStarted');
        break;

      default:
        break;
    }
  };

  return (
    <SafeAreaView
      style={[
        globalStyles.darkContainerPadding,
        globalStyles.horizontalCenter
      ]}>
      <CustomStatusBar barType="dark" />
      <AppButton
        onPress={() => navigation.navigate('GetStarted')}
        title={AppStrings.skip}
        buttonType="none"
        style={styles.skipButtonStyle}
      />
      <View
        style={{
          alignItems: 'center',
          marginTop: 'auto'
        }}>
        <View style={{height: handleHeight(325)}}>
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
          <AppButton
            onPress={onNextPressHandler}
            title={
              currentPageIndex === 2 ? AppStrings.getStarted : AppStrings.next
            }
          />
        </View>
      )}
    </SafeAreaView>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  skipButtonStyle: {
    opacity: 0.44,
    alignSelf: 'flex-start'
  },
  imageStyle: {
    height: handleHeight(277),
    width: handleWidth(211)
  },
  manageTaskText: {
    fontSize: fontSize.header,
    marginTop: handleHeight(50),
    marginBottom: handleHeight(40),
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
    marginBottom: handleHeight(28),
    justifyContent: 'space-between',
    width: '100%'
  },
  backButtonTitle: {opacity: 0.44},
  nextButtonStyle: {
    marginTop: 'auto',
    marginBottom: handleHeight(28),
    alignSelf: 'flex-end'
  }
});
