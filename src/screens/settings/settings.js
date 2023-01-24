import { useTheme } from '@react-navigation/native';
import React, { useState } from 'react';
import { SafeAreaView, Switch, Text, View } from 'react-native';
import { styles } from '../../assets/styles/global-styles';
import Toggle from '../../components/switch/switch';

const Settings = () => {
  const {colors} = useTheme();
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.wrapper}>
        <Text style={{textAlign: 'center', fontWeight: '400', fontSize: 30, marginVertical: 20}}>Settings Screen</Text>

        <Toggle
          label="Show Completed Task"
          description="Option to show the list of completed tasks"
        />
      </View>
    </SafeAreaView>
  );
}
export default Settings;