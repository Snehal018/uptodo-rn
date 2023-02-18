import React from 'react';
import Header from '../UI/Header';
import {AppStrings} from '../../constants';
import ImageView from '../UI/ImageView';
import VectorIcon from '../UI/VectorIcon';
import {handleWidth} from '../../utils/responsive';
import {AppColors} from '../../themes';

const TaskIndexHeader = () => {
  return (
    <Header
      title={AppStrings.index}
      rightContent={() => (
        <ImageView
          containerStyle={{alignSelf: 'flex-end'}}
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
          size={handleWidth(24)}
        />
      )}
    />
  );
};

export default TaskIndexHeader;
