import {fork} from 'redux-saga/effects';

import followFetchComments from './Comments/saga'

const sagas = [
    ...followFetchComments
];

export default function* rootSaga() {
    yield sagas.map(saga => fork(saga));
}