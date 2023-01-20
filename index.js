import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { ContextProvider } from './src/stores/context/context';
import AsyncStorageService from './src/stores/asyncstorage/asyncstorage';

global.asyncstorage = AsyncStorageService;

const AppRoot = () => (
    <ContextProvider>
        <App />
    </ContextProvider>
);

AppRegistry.registerComponent(appName, () => AppRoot);