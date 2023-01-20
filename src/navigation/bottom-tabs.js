import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { Dimensions } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { tabs } from './tabs-list';

import TabBar from '../components/tab-bar/tab-bar';

const {width} = Dimensions.get('window');
const Tab = createBottomTabNavigator();

const Tabs = () => {
    const { colors } = useTheme();
    const insets = useSafeAreaInsets();

    return (
        <SafeAreaView style={{ flex: 1, paddingBottom: insets.bottom - width, backgroundColor: colors.white}}>
            <Tab.Navigator tabBar={props => <TabBar {...props} />}>
                {tabs.map((tab, index) => {
                    return (
                        <Tab.Screen
                            key={index}
                            name={tab.name}
                            component={tab.component}
                            options={{
                                icon: tab.icon,
                                title: tab.name,
                                headerShown: false
                            }}
                        />
                    );
                })}
            </Tab.Navigator>
        </SafeAreaView>
    );
};

export default Tabs;