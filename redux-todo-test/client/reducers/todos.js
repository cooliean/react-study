/**
 * Created by Cooliean on 16/5/25.
 */

import {CLActionTypes} from '../actions';
const todo = (state, action) => {
    switch (action.type) {
        case CLActionTypes.ADD_TODO:
            return {
                id: action.id,
                text: action.text,
                completed: false
            }
        case CLActionTypes.TOGGLE_TODO:
            if (action.id !== state.id) {
                return state;
            }
            return Object.assign({}, state, {completed: !state.completed});
        default:
            return state;
    }
}
//
// const todos = ({state = [], action}) => {
//     switch (action.type) {
//         case CLActionTypes.ADD_TODO:
//         {
//             return [
//                 ...state, todo(undefined, action)
//             ]
//         }
//         case CLActionTypes.TOGGLE_TODO:
//         {
//             return state.map((t)=>{
//                 todo(t, action);
//             })
//         }
//         default:
//         {
//             return state;
//         }
//     }
// }
const todos = (state = [], action) => {
    switch (action.type) {
        case CLActionTypes.ADD_TODO:
            return [
                ...state,
                todo(undefined, action)
            ]
        case CLActionTypes.TOGGLE_TODO:
            return state.map(t =>
                todo(t, action)
            )
        default:
            return state
    }
}


export default todos