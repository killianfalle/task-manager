import React, { useContext, useState } from 'react';
import { StatusBar} from 'react-native';
import { navigationRef } from './src/components/root-navigation/root-navigation';

import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Context } from './src/stores/context/context';

import theme from './src/assets/theme/theme';
import Tabs from './src/navigation/bottom-tabs';
import TaskForm from './src/components/task-form/task-form';
import Toast from './src/components/toast/toast';

const siteTheme = {
  ...DefaultTheme,
  colors: theme
}

const App = () => {
  const [routeName, setRouteName] = useState(null);
  const {
    toast,
    setToast
  } = useContext(Context);

  return (
    <SafeAreaProvider>
      <StatusBar barStyle="dark-content"/>
      <NavigationContainer
        ref={navigationRef}
        theme={siteTheme}
        onStateChange={() => setRouteName(navigationRef.getCurrentRoute().name)}>
        <Tabs />
      </NavigationContainer>

      <TaskForm theme={siteTheme.colors}/>

      <Toast 
        theme={siteTheme.colors}
        visible={toast.visible}
        title={toast.title}
        type={toast.type}
        position={toast.position}
        icon={toast.icon}
        visibilityTime={toast.visibilityTime}
        setVisible={(value) => setToast({...toast, visible: value})}
      />
    </SafeAreaProvider>
  );
}
export default App;