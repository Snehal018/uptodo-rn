import {FlatList, StyleSheet, View} from 'react-native';
import React, {Dispatch, FC, SetStateAction} from 'react';
import BaseModal from '../../atoms/Modal/BaseModal';
import {AppColors} from '../../../themes';
import {
  moderateVerticalScale,
  scale,
  verticalScale
} from 'react-native-size-matters';
import BaseText from '../../atoms/Text/Basetext';
import {globalStyles} from '../../../styles';
import Separator from '../../atoms/UI/Separator';
import PriorityItem from '../../molecules/Priority/PriorityItem';
import AppButton from '../../atoms/Button/Appbutton';
import {AppStrings} from '../../../constants';

interface ComponentProps {
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
}

const PriorityModal: FC<ComponentProps> = ({
  visible = false,
  setVisible = () => {}
}) => {
  return (
    <BaseModal isVisible={visible} setIsVisible={setVisible}>
      <View style={styles.container}>
        <BaseText style={styles.title}>Task Priority</BaseText>
        <Separator />
        <FlatList
          numColumns={4}
          data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
          renderItem={({item}) => (
            <PriorityItem
              title={item.toString()}
              containerStyle={styles.priorityItemContainer}
            />
          )}
          keyExtractor={(_, index) => index.toString()}
          bounces={false}
          contentContainerStyle={styles.priorityListContentContainer}
        />
        <View style={styles.footerButtonsContainer}>
          <View style={globalStyles.fullSpace}>
            <AppButton
              title={AppStrings.cancel}
              buttonType="none"
              titleStyle={{color: AppColors.primary}}
            />
          </View>
          <View style={globalStyles.fullSpace}>
            <AppButton title={AppStrings.save} />
          </View>
        </View>
      </View>
    </BaseModal>
  );
};

export default PriorityModal;

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.tabBarDark,
    borderRadius: scale(8),
    paddingVertical: verticalScale(12),
    paddingHorizontal: scale(8)
  },
  title: {
    ...globalStyles.mediumWhiteBoldText,
    textAlign: 'center'
  },
  priorityItemContainer: {
    marginTop: moderateVerticalScale(16, 0),
    marginHorizontal: scale(5)
  },
  priorityListContentContainer: {alignItems: 'center'},
  footerButtonsContainer: {
    ...globalStyles.rowSpaceBetweenCenter,
    marginHorizontal: scale(8),
    marginTop: moderateVerticalScale(32, 0)
  }
});
