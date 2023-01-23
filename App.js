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
    tasks,
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
    setShowForm(prev => ({...prev, show: false, data: null}));
  }

  const handleDelete = (data) => {
    /* Finds the type ("completed" or "todo") based on the data's id */
    const type = Object.keys(tasks).find((object) => {
      return tasks[object].data.some((item) => {
        return item.id === data.id;
      });
    });
    
    /* Removes the task from the current object type */
    setTasks(prev => ({
      ...prev,
      [type]: ({
        ...prev[type], data: tasks[type].data.filter(item => item.id !== data.id)
      })
    }));

    setToast(prev => ({
      ...prev,
      visible: true,
      title: "Task removed",
      type: "primary"
    }));

    /* close form */
    setShowForm(prev => ({...prev, show: false, data: null}));
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
        show={showForm.show}
        data={showForm.data}
        setShow={setShowForm}
        onSubmit={handleSubmit}
        onDelete={handleDelete}
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