import React from 'react';
import {StatusBar} from 'react-native';
import AppNavigation from './src/navigation';
import {Provider} from 'react-redux';
import store from './src/redux/store';

const App = () => {
  return (
    <>
      <StatusBar barStyle={'light-content'} />
      <Provider store={store}>
        <AppNavigation />
      </Provider>
    </>
  );
};

export default App;
