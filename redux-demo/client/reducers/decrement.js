import ActionTypes from '../constants/action_type';


export default function counter(state = 0, action) {
    //console.log({action});
    console.log(action);
    switch (action.type) {
        case ActionTypes.DECREMENT:
            return state - 1
        default:
            return state
    }
}