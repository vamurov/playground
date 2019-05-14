import {combineReducers} from 'redux';
import {appReducer} from "./reducers";
import {RootState} from "../@model";
import {routerReducer} from 'react-router-redux'


export const rootReducer = combineReducers<RootState & { routing: any }>({
    app: appReducer,
    routing: routerReducer
});
