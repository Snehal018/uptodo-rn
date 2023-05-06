import {PressableProps, View, ViewStyle} from 'react-native';
import React, {FC} from 'react';
import {globalStyles} from '../../../styles';
import {AppButton} from '../../atoms';
import {AppColors} from '../../../themes';

interface ComponentProps {
  acceptButtonTitle: string;
  declineButtonTitle: string;
  onPressAcceptButton: PressableProps['onPress'];
  onPressDeclineButton: PressableProps['onPress'];
  containerStyle?: ViewStyle;
}

const RowButtons: FC<ComponentProps> = ({
  acceptButtonTitle,
  declineButtonTitle,
  onPressAcceptButton,
  onPressDeclineButton,
  containerStyle
}) => {
  return (
    <View style={[globalStyles.rowContainer, containerStyle]}>
      <AppButton
        title={declineButtonTitle}
        buttonType="none"
        titleStyle={{color: AppColors.primary}}
        style={globalStyles.fullSpace}
        onPress={onPressDeclineButton}
      />
      <View style={globalStyles.fullSpace}>
        <AppButton title={acceptButtonTitle} onPress={onPressAcceptButton} />
      </View>
    </View>
  );
};

export default RowButtons;
