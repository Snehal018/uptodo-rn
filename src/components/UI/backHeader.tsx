import {
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import {globalStyles} from '../../styles';
import {AppImages} from '../../assets/images';
import {handleHeight, handleWidth} from '../../utils/responsive';
import {useNavigation} from '@react-navigation/native';

interface ComponentProps {
  headerContainerStyle?: ViewStyle;
}

const BackHeader = ({headerContainerStyle}: ComponentProps) => {
  const navigation = useNavigation();

  const onBackPressHandler = () => {
    navigation.goBack();
  };

  return (
    <View style={[globalStyles.rowContainer, headerContainerStyle]}>
      <TouchableOpacity onPress={onBackPressHandler}>
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
    width: handleWidth(8.59),
  },
});
