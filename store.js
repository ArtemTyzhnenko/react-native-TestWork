import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import combineReducers from './src/sagas/combineStores';
import rootSaga from './src/sagas/sagas'

const sagaMiddleware = createSagaMiddleware();

export default createStore(combineReducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);