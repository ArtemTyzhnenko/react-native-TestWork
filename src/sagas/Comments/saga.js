import {takeLatest, put, call, select} from 'redux-saga/effects';

import * as actions from './actions';

function* fetchComments() {
    try {
        const filmId = yield select(({comments}) => comments.filmId);
        const comments = yield call(actions.fetchingCommentsFromFirebase, filmId);
        yield  put(actions.addCommentsFromFirebase(comments));
    } catch (e) {
        yield put(actions.fetchingCommentsFail);
    }
}

function* followFetchComments() {
    yield  takeLatest('SET_CURRENT_FILM_ID', fetchComments)
}

export default [followFetchComments]