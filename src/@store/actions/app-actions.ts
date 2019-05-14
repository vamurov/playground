import {buildAction} from './build-action';
import {uniqueString} from '@utils';

const APP_ACTIONS = 'app-actions::';
export const SET_TITLE = uniqueString(`${APP_ACTIONS}set-title`);
export const FETCH_DATA = uniqueString(`${APP_ACTIONS}fetch-data`);

export const appActions = {
    setTitle: buildAction<string>(SET_TITLE),
    fetchData: buildAction(FETCH_DATA)
};