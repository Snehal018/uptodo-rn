import { StyleSheet, View } from 'react-native';
import React, {
  Dispatch,
  FC,
  SetStateAction,
  useCallback,
  useState,
} from 'react';
import { BaseModal, BaseText, Separator } from '../../atoms';
import { AppColors } from '../../../themes';
import {
  moderateVerticalScale,
  scale,
  verticalScale,
} from 'react-native-size-matters';
import { globalStyles } from '../../../styles';
import { AppStrings } from '../../../constants';
import { RowButtons, PriorityItem } from '../../molecules';

interface ComponentProps {
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
  onConfirmPriority: (priority: number | null) => void;
}

const priorityData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const PriorityModal: FC<ComponentProps> = ({
  visible = false,
  setVisible = () => {},
  onConfirmPriority = () => {},
}) => {
  const [selectedPriority, setSelectedPriority] = useState<number | null>(null);

  const onSelectPriorityHandler = (selectedPriorityItem: number) => {
    setSelectedPriority(selectedPriorityItem);
  };

  const onConfirmPriorityHandler = () => {
    setVisible(false);
    onConfirmPriority(selectedPriority);
  };

  const onCancelPriorityHandler = () => {
    setVisible(false);
  };

  const RenderPriorityItem = useCallback(
    ({ item }: { item: number }) => (
      <PriorityItem
        title={item.toString()}
        containerStyle={styles.priorityItemContainer}
        onPress={onSelectPriorityHandler.bind(this, item)}
        isSelected={selectedPriority === item}
      />
    ),
    [selectedPriority]
  );

  return (
    <BaseModal
      isVisible={visible}
      setIsVisible={setVisible}
      onModalHide={setSelectedPriority.bind(this, null)}>
      <View style={styles.container}>
        <BaseText style={styles.title}>{AppStrings.taskPriority}</BaseText>
        <Separator />
        <View style={styles.itemsContainer}>
          {priorityData.map((item, index) => (
            <RenderPriorityItem item={item} key={index} />
          ))}
        </View>
        <RowButtons
          acceptButtonTitle={AppStrings.save}
          declineButtonTitle={AppStrings.cancel}
          containerStyle={styles.footerButtonsContainer}
          onPressAcceptButton={onConfirmPriorityHandler}
          onPressDeclineButton={onCancelPriorityHandler}
        />
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
    paddingHorizontal: scale(8),
  },
  title: {
    ...globalStyles.mediumWhiteBoldText,
    textAlign: 'center',
  },
  priorityItemContainer: {
    marginTop: moderateVerticalScale(16, 0),
    marginHorizontal: scale(5),
  },
  footerButtonsContainer: {
    marginHorizontal: scale(8),
    marginTop: moderateVerticalScale(32, 0),
  },
  itemsContainer: { flexDirection: 'row', flexWrap: 'wrap' },
});
