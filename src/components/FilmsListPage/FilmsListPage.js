import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import films from '../../films.js'
import {
    FlatList, 
    StyleSheet, 
    Text,
    View, 
} from 'react-native';
import {Actions} from 'react-native-router-flux'

import {setCurrentFilmId} from '../../sagas/Comments/actions'

class FilmsListPage extends Component {

    onPressFilm = (filmId) => () => {
        const {actions} = this.props;
        actions.setCurrentFilmId(filmId);
        Actions.comments()
    };

    render() {

        const filmsList = films.map(item => ({title: item.title, rank: item.rank}));
        return (
            <View>
                <FlatList
                    data={filmsList}
                    renderItem={({item}) => <Text style={styles.list}
                                                  onPress={this.onPressFilm(item.rank)}>{item.title}</Text>}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    list: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30,
        paddingTop: 10,
        paddingBottom: 10,
    },
});

const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators(
            {
                setCurrentFilmId,
            },
            dispatch,
        )
    }
};

const mapStateToProps = state => {
    return {
        comments: state.comments,
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(FilmsListPage);