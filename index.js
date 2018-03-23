import {AppRegistry} from 'react-native';
import App from './src/App';
import {Provider} from 'react-redux';
import React from 'react';
import store from './store'

const AppWithRedux = () => (
    <Provider store={store}>
        <App/>
    </Provider>
);

AppRegistry.registerComponent('testWork', () => AppWithRedux);
