import {StyleSheet, TextInput, TextInputProps, View} from 'react-native';
import React, {FC} from 'react';
import {
  moderateVerticalScale,
  scale,
  verticalScale
} from 'react-native-size-matters';
import {AppColors, fontSize} from '../../../themes';
import {globalStyles} from '../../../styles';
import VectorIcon from '../Icons/VectorIcon';

const SearchInput: FC<TextInputProps> = props => {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <VectorIcon
          iconType="AntDesign"
          name="search1"
          color={AppColors.lightGray}
          size={scale(16)}
        />
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          placeholderTextColor={AppColors.lightGray}
          returnKeyType="search"
          {...props}
          style={styles.inputStyle}
        />
      </View>
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  container: {
    marginTop: verticalScale(16)
  },
  inputContainer: {
    ...globalStyles.rowSpaceBetweenCenter,
    borderWidth: scale(0.8),
    borderColor: AppColors.gray,
    borderRadius: scale(4),
    height: moderateVerticalScale(42, 0.35),
    paddingHorizontal: '3%',
    backgroundColor: AppColors.lightDark
  },
  inputStyle: {
    ...globalStyles.fullSpace,
    paddingVertical: 0,
    fontSize: fontSize.medium,
    color: AppColors.white,
    paddingLeft: scale(8)
  }
});
