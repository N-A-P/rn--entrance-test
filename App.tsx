/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import RootStack from './app/navigation/root-stack';
import { navigationRef } from './app/navigation/navigation-service';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { storeObject } from './app/redux/store';


function App(): React.JSX.Element {

  return (
    <SafeAreaProvider>
      <Provider store={storeObject}>
        <NavigationContainer ref={navigationRef}>
          <RootStack />
        </NavigationContainer>
      </Provider>
    </SafeAreaProvider>
  );
}

export default App;
