import {createStore, combineReducers} from 'redux';
import {Provider,connect} from 'react-redux';
import Reducers from './reducers';
import ActionTypes from "./constants/action_type";
import Counter from './counter/Counter';

// import {increment} from '../actionsCreators';

// Which part of the Redux global state does our component want to receive as props?
function mapStateToProps(state) {
    return {
        value: state.counter
    };
}

// Which action creators does it want to receive by props?
function mapDispatchToProps(dispatch) {
    return {
        onIncrement: () => dispatch(Reducers())
    };
}
let store = createStore(Reducers);

export default connect(   // Line 20
    mapStateToProps,
    mapDispatchToProps
)(Counter);


class App extends React.Component {

    render() {
        console.info(this.props);
        console.info(this.state);
        return (
            <Provider store={store}>
                <Counter />
            </Provider>
        );
    }
}
ReactDOM.render(<App />, document.getElementById('app'));
