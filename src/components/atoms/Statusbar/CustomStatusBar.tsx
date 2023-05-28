import {StatusBar, StatusBarProps} from 'react-native';
import React, {FC} from 'react';

interface ComponentProps extends StatusBarProps {
  barType?: 'dark' | 'light';
}

const CustomStatusBar: FC<ComponentProps> = ({
  barType = 'dark',
  ...statusbarProps
}) => {
  let statusBarStyle: StatusBarProps['barStyle'] = 'dark-content';
  if (barType === 'dark') {
    statusBarStyle = 'light-content';
  }
  return (
    <StatusBar
      backgroundColor={'transparent'}
      translucent
      barStyle={statusBarStyle}
      {...statusbarProps}
    />
  );
};

export default CustomStatusBar;
