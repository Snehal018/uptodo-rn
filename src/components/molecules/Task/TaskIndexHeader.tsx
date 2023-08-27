import React, { FC } from 'react';
import Header from '../../atoms/Header/Header';
import { AppStrings } from '../../../constants';
import ImageView from '../../atoms/Image/ImageView';
import VectorIcon from '../../atoms/Icons/VectorIcon';
import { AppColors } from '../../../themes';
import { scale } from 'react-native-size-matters';

const TaskIndexHeader: FC = () => {
  return (
    <Header
      title={AppStrings.index}
      rightContent={() => (
        <ImageView
          containerStyle={{ alignSelf: 'flex-end' }}
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvjOkn2Ef2RE4zKQP8vnVAKQ2pNQBi2mhN2A&usqp=CAU'
          }}
        />
      )}
      leftContent={() => (
        <VectorIcon
          iconType="Ionicons"
          name="filter"
          color={AppColors.white}
          size={scale(24)}
        />
      )}
    />
  );
};

export default TaskIndexHeader;
