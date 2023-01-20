import React, { useState } from 'react';
import { StatusBar} from 'react-native';
import { navigationRef } from './src/components/root-navigation/root-navigation';
import Tabs from './src/navigation/bottom-tabs';
import appColors from './src/assets/colors/colors';

import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const siteTheme = {
  ...DefaultTheme,
  colors: appColors
}

const App = () => {
  const [routeName, setRouteName] = useState(null);

  return (
    <SafeAreaProvider>
      <StatusBar barStyle="dark-content"/>
      <NavigationContainer
        ref={navigationRef}
        theme={siteTheme}
        onStateChange={() => setRouteName(navigationRef.getCurrentRoute().name)}>
        <Tabs />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
export default App;