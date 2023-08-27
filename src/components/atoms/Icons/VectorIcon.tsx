import React, { FC } from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome5Pro from 'react-native-vector-icons/FontAwesome5Pro';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Zocial from 'react-native-vector-icons/Zocial';
import { IconProps } from 'react-native-vector-icons/Icon';
import { VECTOR_ICON_TYPES } from '../../../constants';

interface ComponentProps extends IconProps {
  iconType:
  | 'AntDesign'
  | 'Entypo'
  | 'EvilIcons'
  | 'Feather'
  | 'FontAwesome'
  | 'FontAwesome5'
  | 'FontAwesome5Pro'
  | 'Fontisto'
  | 'Foundation'
  | 'Ionicons'
  | 'MaterialCommunityIcons'
  | 'MaterialIcons'
  | 'Octicons'
  | 'SimpleLineIcons'
  | 'Zocial'; // ? Defaults to AntDesign
}

const VectorIcon: FC<ComponentProps> = ({ iconType, ...props }) => {
  const getCustomVectorIcon = () => {
    switch (iconType) {
      case VECTOR_ICON_TYPES.AntDesign:
        return <AntDesign {...props} />;
      case VECTOR_ICON_TYPES.Entypo:
        return <Entypo {...props} />;
      case VECTOR_ICON_TYPES.EvilIcons:
        return <EvilIcons {...props} />;
      case VECTOR_ICON_TYPES.Feather:
        return <Feather {...props} />;
      case VECTOR_ICON_TYPES.FontAwesome:
        return <FontAwesome {...props} />;
      case VECTOR_ICON_TYPES.FontAwesome5:
        return <FontAwesome5 {...props} />;
      case VECTOR_ICON_TYPES.FontAwesome5Pro:
        return <FontAwesome5Pro {...props} />;
      case VECTOR_ICON_TYPES.Fontisto:
        return <Fontisto {...props} />;
      case VECTOR_ICON_TYPES.Foundation:
        return <Foundation {...props} />;
      case VECTOR_ICON_TYPES.Ionicons:
        return <Ionicons {...props} />;
      case VECTOR_ICON_TYPES.MaterialCommunityIcons:
        return <MaterialCommunityIcons {...props} />;
      case VECTOR_ICON_TYPES.MaterialIcons:
        return <MaterialIcons {...props} />;
      case VECTOR_ICON_TYPES.Octicons:
        return <Octicons {...props} />;
      case VECTOR_ICON_TYPES.SimpleLineIcons:
        return <SimpleLineIcons {...props} />;
      case VECTOR_ICON_TYPES.Zocial:
        return <Zocial {...props} />;
      default:
        return <AntDesign {...props} />;
    }
  };

  return getCustomVectorIcon();
};

export default VectorIcon;
