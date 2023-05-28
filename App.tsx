import React from 'react';
import {StatusBar} from 'react-native';
import AppNavigation from './src/navigation';
import {Provider} from 'react-redux';
import {store, persistor} from './src/redux';
import {PersistGate} from 'redux-persist/integration/react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {globalStyles} from './src/styles';
import {AddTaskBottomSheet} from './src/components';
import AddTaskContextProvider from './src/context/task/addTaskContext';
import {Provider as PaperProvider} from 'react-native-paper';

const App = () => {
  return (
    <PaperProvider>
      <StatusBar barStyle={'light-content'} />
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <GestureHandlerRootView style={globalStyles.fullSpace}>
            <AppNavigation />
            <AddTaskContextProvider>
              <AddTaskBottomSheet />
            </AddTaskContextProvider>
          </GestureHandlerRootView>
        </PersistGate>
      </Provider>
    </PaperProvider>
  );
};

export default App;
