import * as actionsTypes from './actionsTypes'
import firebaseDb from '../../config/firebase';
import {Alert} from "react-native";

export const addNewComment = (commentText) => ({
    type: actionsTypes.ADD_NEW_COMMENT,
    commentText,
});

export const addCommentsFromFirebase = (commentsFromFirebase) => ({
    type: actionsTypes.FETCHING_SUCCESS,
    commentsFromFirebase,
});

export const setCurrentFilmId = (filmId) => ({
    type: actionsTypes.SET_CURRENT_FILM_ID,
    filmId,
});

export const fetchingCommentsFail = () => ({
    type: actionsTypes.FETCHING_COMMENTS_FAIL
});

export const fetchingCommentsFromFirebase = (filmId) => {
    return firebaseDb.collection('movies_comments').doc(`${filmId}`).collection('comments')
        .get().then(function (querySnapshot) {
            let arr = [];
            querySnapshot.forEach(function (doc) {
                arr.push({value: doc.data().message});
            });
            return arr;
        })
        .catch(function (error) {
            Alert.alert("Error getting documents: ", error);
        });
};