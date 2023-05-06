import {StatusBar} from 'react-native';
import React, {FC} from 'react';
import {AppColors} from '../../../themes';

interface ComponentProps {
  barType: 'dark' | 'light';
}

const CustomStatusBar: FC<ComponentProps> = ({barType}) => {
  if (barType === 'dark') {
    return (
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={AppColors.primaryDark}
      />
    );
  } else {
    return (
      <StatusBar barStyle={'dark-content'} backgroundColor={AppColors.white} />
    );
  }
};

export default CustomStatusBar;
