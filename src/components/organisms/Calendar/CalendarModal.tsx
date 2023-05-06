import {StyleSheet, View} from 'react-native';
import React, {Dispatch, FC, SetStateAction} from 'react';
import {AppColors} from '../../../themes';
import {Calendar, CalendarProps} from 'react-native-calendars';
import {scale, verticalScale} from 'react-native-size-matters';
import {DateTimePickerAndroid} from '@react-native-community/datetimepicker';
import {AppStrings} from '../../../constants';
import BaseModal from '../../atoms/Modal/BaseModal';
import {RowButtons} from '../../molecules';

const calendarTheme: CalendarProps['theme'] = {
  backgroundColor: AppColors.tabBarDark,
  calendarBackground: AppColors.tabBarDark,
  dayTextColor: AppColors.white,
  monthTextColor: AppColors.white,
  selectedDayTextColor: AppColors.primary,
  arrowColor: AppColors.primary,
  selectedDayBackgroundColor: AppColors.primary,
  todayTextColor: AppColors.primary
};

interface ComponentProps {
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
}

const CalendarModal: FC<ComponentProps> = ({
  visible = false,
  setVisible = () => {}
}) => {
  const onPressChooseTimeHandler = () => {
    DateTimePickerAndroid.open({value: new Date(), mode: 'time'});
  };

  return (
    <BaseModal isVisible={visible} setIsVisible={setVisible}>
      <View style={styles.container}>
        <Calendar
          theme={calendarTheme}
          onDayPress={day => {}}
          style={styles.calendar}
        />
        <RowButtons
          acceptButtonTitle={AppStrings.chooseTime}
          declineButtonTitle={AppStrings.cancel}
          onPressAcceptButton={onPressChooseTimeHandler}
          onPressDeclineButton={setVisible.bind(this, false)}
          containerStyle={styles.rowButtonsContainer}
        />
      </View>
    </BaseModal>
  );
};

export default CalendarModal;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: AppColors.tabBarDark,
    borderRadius: scale(8),
    overflow: 'hidden',
    margin: scale(8)
  },
  calendar: {
    width: '95%',
    alignSelf: 'center',
    borderRadius: scale(8),
    backgroundColor: AppColors.tabBarDark
  },
  rowButtonsContainer: {
    marginVertical: verticalScale(16),
    marginHorizontal: scale(8)
  }
});
