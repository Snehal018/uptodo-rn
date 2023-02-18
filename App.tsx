import React from 'react';
import {StatusBar} from 'react-native';
import AppNavigation from './src/navigation';
import {Provider} from 'react-redux';
import store, {persistor} from './src/redux/store';
import {PersistGate} from 'redux-persist/integration/react';

const App = () => {
  return (
    <>
      <StatusBar barStyle={'light-content'} />
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <AppNavigation />
        </PersistGate>
      </Provider>
    </>
  );
};

export default App;
