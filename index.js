import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider as StoreProvider, createStoreHook} from 'react-redux';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import store from './src/store/configureStore';
/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/AppContainer';
import {name as appName} from './app.json';

const theme = {
  ...DefaultTheme,
  roundness: 10,
  colors: {
    ...DefaultTheme.colors,
    primary: '#c93640',
    accent: '#f1c40f',
  },
};

const MainApp = () => {
  return (
    <NavigationContainer>
      <StoreProvider store={store}>
        <PaperProvider theme={theme}>
          <App />
        </PaperProvider>
      </StoreProvider>
    </NavigationContainer>
  );
};
AppRegistry.registerComponent(appName, () => MainApp);
