import React, {Component} from 'react';

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import {
    FlatList,
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableHighlight,
} from 'react-native';

import {addNewComment, setCurrentFilmId} from '../../sagas/Comments/actions'


import firebaseDb from '../../config/firebase';

class CommentPage extends Component {
    constructor() {
        super();
        this.ref = firebaseDb.collection('movies_comments');
        this.state = {
            text: '',
        }
    }

    clearInput = () => this.setState({text: ''});
    
    onPressSubmit = () => () => {
        const {actions} = this.props;
        const {text} = this.state;
        if (!!text.trim()) {
            const {filmId} = this.props.comments;
            this.ref.doc(`${filmId}`).collection('comments').add({
                message: this.state.text,
            });
            actions.addNewComment(text);
            this.clearInput();
        }
    };

    render() {

        const {commentsList} = this.props.comments;
        const hasComments = commentsList.length > 0;

        return (
            <View style={styles.view}>
                {hasComments ?
                    <View>
                        <FlatList
                            data={commentsList}
                            renderItem={({item}) => (
                                <View
                                    style={styles.commentBlock}>
                                    <View style={styles.avatar}>
                                        <Text>:D</Text>
                                        <Text style={[styles.comments]}> {item.value}</Text>
                                    </View>
                                    <Text style={styles.username}>user</Text>
                                </View>
                            )}
                        />
                    </View>
                    : <View>yo</View>
                }

                <View style={styles.inputView}>
                    <TextInput
                        style={styles.input}
                        placeholder="Write comment"
                        onChangeText={(text) => this.setState({text})}
                        value={this.state.text}
                    />
                    <TouchableHighlight
                        style={styles.button}
                        onPress={this.onPressSubmit()}>
                        <Text>+ SUBMIT</Text>
                    </TouchableHighlight>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
    },
    inputView: {
        flexDirection: 'row',
    },
    input: {
        color: 'blue',
        fontWeight: 'bold',
        height: 50,
        fontSize: 30,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        width: 300,
    },
    button: {
        backgroundColor: 'blue',
        width: 100,
        borderRadius: 5,
        padding: 10,
    },
    commentBlock: {
        paddingTop: 10,
        paddingBottom: 10,
    },
    avatar: {
        flexDirection: 'row',
        width: 250,
    },
    comments: {
        fontSize: 20,
        flex: 5,
        width: 200,
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: 'grey'
    },
    username: {
        fontSize: 10,
        flex: 5,
        width: 70,
        paddingTop: 5,
        paddingBottom: 5,
        marginLeft: 20,
    }

});

const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators(
            {
                addNewComment,
                setCurrentFilmId
            },
            dispatch,
        )
    }
};

const mapStateToProps = state => {
    return {
        comments: state.comments,
        films: state.films,
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentPage);