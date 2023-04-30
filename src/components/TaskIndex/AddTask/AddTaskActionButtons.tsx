import {StyleSheet, View} from 'react-native';
import React from 'react';
import {globalStyles} from '../../../styles';
import VectorIcon from '../../UI/VectorIcon';

const AddTaskActionButtons = () => {
  return (
    <View style={globalStyles.rowContainer}>
      <VectorIcon />
      <VectorIcon />
      <VectorIcon />
    </View>
  );
};

export default AddTaskActionButtons;

const styles = StyleSheet.create({});
