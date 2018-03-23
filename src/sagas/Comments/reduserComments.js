import * as actionsTypes from './actionsTypes';

let initialState = {
    commentsList: [],
    filmId: '',
};

const comments = (state = initialState, action) => {
    switch (action.type) {
        case actionsTypes.ADD_NEW_COMMENT:
            return {
                ...state,
                commentsList: [
                    ...state.commentsList,
                    {value: action.commentText},
                ]
            };

        case actionsTypes.FETCHING_SUCCESS:
            return {
                ...state,
                commentsList: [
                    ...action.commentsFromFirebase,
                ]
            };
        case actionsTypes.SET_CURRENT_FILM_ID:
            return {
                ...state,
                filmId: action.filmId,
            };
        default:
            return state;
    }
};

export default comments;