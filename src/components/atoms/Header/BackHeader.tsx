import {
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle
} from 'react-native';
import React, {FC} from 'react';
import {globalStyles} from '../../../styles';
import {AppImages} from '../../../assets/images';
import {useNavigation} from '@react-navigation/native';
import {isAndroid} from '../../../utils/helperfunctions';
import {scale, verticalScale} from 'react-native-size-matters';

interface ComponentProps {
  headerContainerStyle?: ViewStyle;
}

const BackHeader: FC<ComponentProps> = ({headerContainerStyle}) => {
  const navigation = useNavigation();

  const onBackPressHandler = () => {
    navigation.goBack();
  };

  return (
    <View
      style={[
        globalStyles.rowContainer,
        styles.baseContainerStyle,
        headerContainerStyle
      ]}>
      <TouchableOpacity
        onPress={onBackPressHandler}
        hitSlop={{
          left: 18,
          right: 18
        }}>
        <Image
          resizeMode="contain"
          style={styles.backStyle}
          source={AppImages.imgBack}
        />
      </TouchableOpacity>
    </View>
  );
};

export default BackHeader;

const styles = StyleSheet.create({
  backStyle: {
    height: verticalScale(17.34),
    width: scale(8.59)
  },
  baseContainerStyle: {
    paddingVertical: verticalScale(isAndroid ? 4 : 17)
  }
});
