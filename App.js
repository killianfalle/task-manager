import React, { useContext, useState } from 'react';
import { StatusBar} from 'react-native';
import { navigationRef } from './src/components/root-navigation/root-navigation';
import Tabs from './src/navigation/bottom-tabs';
import theme from './src/assets/theme/theme';

import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import TaskForm from './src/components/task-form/task-form';
import { Context } from './src/stores/context/context';
import Toast from './src/components/toast/toast';

const siteTheme = {
  ...DefaultTheme,
  colors: theme
}

const App = () => {
  const [routeName, setRouteName] = useState(null);
  const {
    showForm,
    setShowForm,
    setTasks,
    toast,
    setToast
  } = useContext(Context);

  const handleSubmit = (data) => {
    /* insert new data in todo key nested object */
    setTasks(prev => ({
      ...prev,
      todo: ({
        ...prev.todo, data: [...prev.todo.data, data]
      })
    }));

    setToast(prev => ({
      ...prev,
      visible: true,
      title: "Successfully created a new task",
      type: "primary"
    }));

    /* close form */
    setShowForm(false);
  }

  return (
    <SafeAreaProvider>
      <StatusBar barStyle="dark-content"/>
      <NavigationContainer
        ref={navigationRef}
        theme={siteTheme}
        onStateChange={() => setRouteName(navigationRef.getCurrentRoute().name)}>
        <Tabs />
      </NavigationContainer>

      <TaskForm
        theme={siteTheme.colors}
        show={showForm}
        setShow={setShowForm}
        onSubmit={handleSubmit}
      />

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