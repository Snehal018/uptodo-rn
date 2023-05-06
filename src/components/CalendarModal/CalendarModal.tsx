import {StyleSheet, View} from 'react-native';
import React, {Dispatch, SetStateAction} from 'react';
import {AppColors} from '../../themes';
import {Calendar, CalendarProps} from 'react-native-calendars';
import {scale, verticalScale} from 'react-native-size-matters';
import {globalStyles} from '../../styles';
import AppButton from '../UI/Appbutton';
import {DateTimePickerAndroid} from '@react-native-community/datetimepicker';
import {AppStrings} from '../../constants';
import BaseModal from '../UI/BaseModal';

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

const CalendarModal = ({
  visible = false,
  setVisible = () => {}
}: ComponentProps) => {
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
        <View style={styles.bottomRow}>
          <AppButton
            title={AppStrings.cancel}
            buttonType="none"
            titleStyle={{color: AppColors.primary}}
            style={globalStyles.fullSpace}
            onPress={setVisible.bind(this, false)}
          />
          <View style={globalStyles.fullSpace}>
            <AppButton
              title={AppStrings.chooseTime}
              style={{alignSelf: 'center'}}
              onPress={onPressChooseTimeHandler}
            />
          </View>
        </View>
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
  bottomRow: {
    ...globalStyles.rowContainer,
    marginVertical: verticalScale(16),
    marginHorizontal: scale(8)
  }
});
