import {Pressable, StyleSheet} from 'react-native';
import React, {FunctionComponent, useRef} from 'react';
import {BottomSheetMethods} from '@gorhom/bottom-sheet/lib/typescript/types';
import BottomSheet, {
  BottomSheetBackdropProps,
  BottomSheetProps
} from '@gorhom/bottom-sheet';
import {AppColors} from '../../themes';

interface ComponentProps extends Partial<BottomSheetProps> {
  isVisible?: boolean;
  onBackDropPress?: () => void;
}

const AppBottomsheet = ({
  isVisible = false,
  onBackDropPress = () => {},
  ...bottomSheetProps
}: ComponentProps) => {
  const bottomSheetRef = useRef<BottomSheetMethods | null>(null);

  const onBackdropPressHandler = () => {
    bottomSheetRef?.current?.close();
    onBackDropPress(); // From Props
  };

  const renderBackdrop: FunctionComponent<BottomSheetBackdropProps> = () => {
    return isVisible ? (
      <Pressable
        style={styles.backDropStyle}
        onPress={onBackdropPressHandler}
      />
    ) : null;
  };

  return (
    <BottomSheet
      index={isVisible ? 0 : -1}
      ref={bottomSheetRef}
      backgroundStyle={{backgroundColor: AppColors.tabBarDark}}
      backdropComponent={renderBackdrop}
      keyboardBlurBehavior="restore"
      {...bottomSheetProps}
      snapPoints={bottomSheetProps.snapPoints ?? ['25%']}>
      {bottomSheetProps.children}
    </BottomSheet>
  );
};

export default AppBottomsheet;

const styles = StyleSheet.create({
  backDropStyle: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  }
});
