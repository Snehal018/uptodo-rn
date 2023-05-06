import {FlatList, StyleSheet, View} from 'react-native';
import React, {
  Dispatch,
  FC,
  SetStateAction,
  useCallback,
  useState
} from 'react';
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
import {AppStrings} from '../../../constants';
import {RowButtons} from '../../molecules';

interface ComponentProps {
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
}

const priorityData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const PriorityModal: FC<ComponentProps> = ({
  visible = false,
  setVisible = () => {}
}) => {
  const [selectedPriority, setSelectedPriority] = useState<number | null>(null);

  const onSelectPriorityHandler = (selectedPriorityItem: number) => {
    setSelectedPriority(selectedPriorityItem);
  };

  const onConfirmPriorityHandler = () => {
    setVisible(false);
  };

  const onCancelPriorityHandler = () => {
    setVisible(false);
  };

  const RenderPriorityItem = useCallback(
    ({item}: {item: number}) => (
      <PriorityItem
        title={item.toString()}
        containerStyle={styles.priorityItemContainer}
        onPress={onSelectPriorityHandler.bind(this, item)}
        isSelected={selectedPriority === item}
      />
    ),
    []
  );

  return (
    <BaseModal isVisible={visible} setIsVisible={setVisible}>
      <View style={styles.container}>
        <BaseText style={styles.title}>{AppStrings.taskPriority}</BaseText>
        <Separator />
        <FlatList
          numColumns={4}
          data={priorityData}
          renderItem={({item}) => <RenderPriorityItem item={item} />}
          keyExtractor={(_, index) => index.toString()}
          bounces={false}
          contentContainerStyle={styles.priorityListContentContainer}
        />
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
    marginHorizontal: scale(8),
    marginTop: moderateVerticalScale(32, 0)
  }
});
