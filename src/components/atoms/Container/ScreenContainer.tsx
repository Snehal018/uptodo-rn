import {View, ViewStyle} from 'react-native';
import React, {FC, PropsWithChildren} from 'react';
import {globalStyles} from '../../../styles';
import AppLoader from '../Loader/AppLoader';
import CustomStatusBar from '../Statusbar/CustomStatusBar';

interface ComponentProps extends PropsWithChildren {
  isLoading?: boolean;
  containerStyle?: ViewStyle;
}

const ScreenContainer: FC<ComponentProps> = ({
  children,
  isLoading = false,
  containerStyle
}) => {
  return (
    <View style={[globalStyles.darkContainer, containerStyle]}>
      <CustomStatusBar />
      {isLoading && <AppLoader />}
      {children}
    </View>
  );
};

export default ScreenContainer;
