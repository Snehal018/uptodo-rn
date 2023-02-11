import {
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle
} from 'react-native';
import React from 'react';
import {globalStyles} from '../../styles';
import {AppImages} from '../../assets/images';
import {handleHeight, handleWidth} from '../../utils/responsive';
import {useNavigation} from '@react-navigation/native';
import {isAndroid} from '../../utils/helperfunctions';

interface ComponentProps {
  headerContainerStyle?: ViewStyle;
}

const BackHeader = ({headerContainerStyle}: ComponentProps) => {
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
    height: handleHeight(17.34),
    width: handleWidth(8.59)
  },
  baseContainerStyle: {
    paddingVertical: handleHeight(isAndroid ? 4 : 17)
  }
});
