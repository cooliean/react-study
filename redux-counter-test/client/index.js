import React from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux';


import Counter from './components/Counter';
let rootEl = document.getElementById('root');

import ActionTypes from './constants/action_types';

import Recucers from './reducers/reducers';


let store = createStore(Recucers);


function render() {
    ReactDOM.render(<Counter value={store.getState()}
                             onIncrement={ () => { store.dispatch({type:ActionTypes.INCREMENT})}}
                             onDecrement={ () => { store.dispatch({type:ActionTypes.DECREMENT})}}
    />, rootEl);
}
render();
store.subscribe(render);

