import React, { useContext } from "react";
import { Alert, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "../../assets/styles/global-styles";
import { Context } from "../../stores/context/context";
import Toggle from "../../components/switch/switch";

const Settings = () => {
  const {settings, setSettings, setTasks, setToast} = useContext(Context);

  const showConfirmation = (title, description, action = () => {}) => {
    Alert.alert(title, description, [
        {text: 'OK', onPress: action},
        {
          text: 'Cancel',
          style: 'cancel',
        },
      ],
      {cancelable: false},
    );
  }

  const handleToggleSwitch = (type) => {
    if(type === "show-completed-tasks"){
      return setSettings(prev => ({...prev, showCompletedTasks: !prev.showCompletedTasks}))
    }

    if(type === "show-task-counter"){
      return setSettings(prev => ({...prev, showTaskCounter: !prev.showTaskCounter}))
    }
  }

  const handleAction = (type) => {
    if(type === 'clear-data'){
      showConfirmation(
        "Confirm clear all data",
        "You can't undo this after you cleared your data",
        () => handleClearData());
    }
  }

  const handleClearData = async() => {
    asyncstorage.remove('tasks');
    setTasks({
      todo: {
        title: 'To do',
        data: [],
      },
      completed: {
        title: 'Completed',
        data: [],
      }
    });

    setToast(prev => ({
      ...prev,
        visible: true,
        title: 'Successfully cleared all data',
        type: "primary"
    }));
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.wrapper}>
        <Text style={styles.pageTitle}>Settings</Text>

        <Toggle
          value={settings.showCompletedTasks}
          onToggleSwitch={() => handleToggleSwitch("show-completed-tasks")}
          label="Show Completed Task"
          description="Option to show the list of completed tasks"
        />

        <Toggle
          value={settings.showTaskCounter}
          onToggleSwitch={() => handleToggleSwitch("show-task-counter")}
          label="Show Total Number of Tasks"
          description="Option to show/hide the total number of todo and completed tasks"
        />
        
        <TouchableOpacity onPress={() => handleAction('clear-data')} style={{marginVertical: 10}}>
          <Text style={{fontSize: 20}}>Clear all data</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
export default Settings;