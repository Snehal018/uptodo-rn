import React from 'react';
import {
  KeyboardAwareScrollView,
  KeyboardAwareScrollViewProps
} from 'react-native-keyboard-aware-scroll-view';
import {verticalScale} from 'react-native-size-matters';

const AppKeyboardScrollWrapper = (props: KeyboardAwareScrollViewProps) => {
  return (
    <KeyboardAwareScrollView
      showsVerticalScrollIndicator={false}
      extraHeight={verticalScale(200)}
      enableOnAndroid
      bounces={false}
      {...props}>
      {props.children}
    </KeyboardAwareScrollView>
  );
};

export default AppKeyboardScrollWrapper;
