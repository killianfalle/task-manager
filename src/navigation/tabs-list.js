import React from 'react';
import { HomeScreenNavigator, SettingsScreenNavigator } from './page-list';

import HomeIcon from '../assets/icons/svg/home-icon';
import AccountIcon from '../assets/icons/svg/account-icon';
import PlusIcon from '../assets/icons/svg/plus-icon';

export const tabs = [
  {name: 'Home', component: HomeScreenNavigator, icon:({color, size}) => <HomeIcon color={color} size={size}/>},
  {name: 'Create Task', component: HomeScreenNavigator, icon:({color, size}) => <PlusIcon color={color} size={size}/>},
  {name: 'Settings', component: SettingsScreenNavigator, icon:({color, size}) => <AccountIcon color={color} size={size}/>}
];