import { takeLatest } from 'redux-saga/effects';

export function* workerExample() {
    console.log('some saga');
};

export function* watchExample() {
    yield takeLatest('SOME_EXAMPLE', workerExample);
};