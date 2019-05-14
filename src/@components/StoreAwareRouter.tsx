import {rootReducer} from "@store";
import createSagaMiddleware from 'redux-saga';
import {appSaga} from "@store";
import {Store, createStore, applyMiddleware, compose} from 'redux';
import {Provider} from "react-redux";
import * as React from "react";
import {Route, Switch} from 'react-router'
import {BrowserRouter} from 'react-router-dom'
import {SampleContainer} from "./SampleContainer";
import {SampleContainer2} from "./SampleContainer2";

export class StoreAwareRouter extends React.PureComponent {
    private store: Store<{}> | undefined = undefined;

    componentWillMount(): void {
        const sagaMiddleware = createSagaMiddleware();
        const enhancer = compose(applyMiddleware(sagaMiddleware));
        this.store = createStore(rootReducer, enhancer);
        sagaMiddleware.run(appSaga);
    }

    render() {
        return (
            <Provider store={this.store!}>
                <BrowserRouter>
                    <Switch>
                        <Route path="/" exact={true} component={SampleContainer}/>
                        <Route path="/foo" component={SampleContainer2}/>
                    </Switch>
                </BrowserRouter>
            </Provider>
        );
    }
}

