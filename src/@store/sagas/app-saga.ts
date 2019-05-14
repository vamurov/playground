import {call, takeLatest} from 'redux-saga/effects';
import {getSomething} from "../selectors";
import {select} from 'redux-saga/effects'
import {appActions} from "../actions";
import axios from 'axios';

export function* appSaga() {
    yield call(console.log, 'Loaded');

    const data: ReturnType<typeof getSomething> = yield select(state => getSomething(state));
    console.log(data);

    yield takeLatest(appActions.fetchData.type, onFetchData);
}

export function* onFetchData() {
    try {
        const response = yield axios.get('todos/1');
        console.log(response.data);
    } catch (e) {
        console.log('error fetching: ' + e)
    }
}
