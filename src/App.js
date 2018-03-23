import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';

import {Router, Stack, Scene} from 'react-native-router-flux';

import FilmsListPage from './components/FilmsListPage/FilmsListPage'

import CommentPage from './components/CommentsPage/CommentsPage'


export default class App extends Component {
    render() {
        return (
            <Router>
                <Stack key="root">
                    <Scene key="filmsList" component={FilmsListPage} title="Films"/>
                    <Scene key="comments" component={CommentPage} title="Comments"/>
                </Stack>
            </Router>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ccc',
    },
});


