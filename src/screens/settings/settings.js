import React, { useContext } from "react";
import { SafeAreaView, Text, View } from "react-native";
import { styles } from "../../assets/styles/global-styles";
import { Context } from "../../stores/context/context";
import Toggle from "../../components/switch/switch";

const Settings = () => {
  const {settings, setSettings} = useContext(Context)

  const handleToggleSwitch = (type) => {
    if(type === "show-completed-tasks"){
      return setSettings(prev => ({...prev, showCompletedTasks: !prev.showCompletedTasks}))
    }

    if(type === "show-task-counter"){
      return setSettings(prev => ({...prev, showTaskCounter: !prev.showTaskCounter}))
    }
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.wrapper}>
        <Text style={styles.pageTitle}>Settings Screen</Text>

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
      </View>
    </SafeAreaView>
  );
}
export default Settings;