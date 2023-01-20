import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import Home from '../screens/home/home';
import Settings from '../screens/settings/settings';

const Stack = createNativeStackNavigator();
const options={
    headerShown: false,
    animation: 'slide_from_right'
}

const HomeScreenNavigator = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name="Home Screen"
                component={Home}
                options={options}
            />
        </Stack.Navigator>
    )
}

const SettingsScreenNavigator = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name="Settings Screen"
                component={Settings}
                options={options}
            />
        </Stack.Navigator>
    )
}

export {
    HomeScreenNavigator,
    SettingsScreenNavigator
};