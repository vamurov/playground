import {appActions} from '@store';
import {Action} from 'redux';
import {AppState} from "@model";

const initialState: AppState = {
    title: 'Not set'
};

export function appReducer(state: AppState = initialState, action: Action): AppState {
    switch (action.type) {
        case appActions.setTitle.type:
            return {...state, title: appActions.setTitle.getPayload(action)}
        default:
            return state;
    }
}