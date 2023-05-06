import React, {PropsWithChildren, createContext, useState} from 'react';
import {AddTaskContextType} from '../../utils/types';

export const AddTaskContext = createContext({} as AddTaskContextType);

const AddTaskContextProvider = ({children}: PropsWithChildren) => {
  const [isCalendarModalVisible, setIsCalendarModalVisible] = useState(false);
  const [isPriorityModalVisible, setIsPriorityModalVisible] = useState(false);

  const contextValue: AddTaskContextType = {
    isCalendarModalVisible,
    setIsCalendarModalVisible,
    isPriorityModalVisible,
    setIsPriorityModalVisible
  };

  return (
    <AddTaskContext.Provider value={contextValue}>
      {children}
    </AddTaskContext.Provider>
  );
};

export default AddTaskContextProvider;
