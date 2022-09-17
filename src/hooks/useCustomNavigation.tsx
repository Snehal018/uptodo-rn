import RootStackParams from '../utils/types/navigationType';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useNavigation, useRoute} from '@react-navigation/native';

const useCustomNavigation = (screenName: keyof RootStackParams) => {
  type Props = NativeStackScreenProps<RootStackParams, typeof screenName>;

  type ScreenNavigationProp = Props['navigation'];

  type ScreenRouteProp = Props['route'];

  const navigation = useNavigation<ScreenNavigationProp>();
  const route = useRoute<ScreenRouteProp>();
  const navigationParams = route?.params ?? null;

  return {navigation, route, navigationParams};
};

export default useCustomNavigation;
