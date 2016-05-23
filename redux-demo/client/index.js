/**
 *
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import ReactDOM from 'react-dom';
import {renderToString} from 'react-dom/server';
import {createStore} from 'redux';
import Reducers from './reducers';
import ActionTypes from "./constants/action_type";
import Temp from './temp';
import {combineReducers} from 'redux';

import * as Increment from './reducers/increment';
import * as Decrement from './reducers/decrement';


const todoAppReducer = combineReducers({
    increment: Increment,
    decrement: Decrement
});


let store = createStore(todoAppReducer);


store.subscribe(()=> {
    console.info(`init state ${store.getState()}`);
});


store.dispatch({type: ActionTypes.DECREMENT});


class App extends React.Component {
    render() {
        return (
            <div className="index">
                {renderToString(<Temp />)}
            </div>
        );
    }
}
ReactDOM.render(<App />, document.getElementById('app'));
