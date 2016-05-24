/**
 * Created by Cooliean on 16/5/24.
 */
import React, {Component, PropTypes} from 'react';

class Counter extends Component {
    /* 1、加法
     2、减法
     3、奇数加1
     4、异步加法
     */
    constructor(props) {
        super(props);
        this.incrementAsync = this.incrementAsync.bind(this)
        this.incrementIfOdd = this.incrementIfOdd.bind(this)
    }

    incrementIfOdd() {
        if (this.props.value % 2 !== 0) {
            this.props.onIncrement()
        }
    }

    incrementAsync() {
        setTimeout(this.props.onIncrement, 1000)
    }

    render() {
        const {value, onIncrement, onDecrement } = this.props
        return (
            <div>
                Clicked:{ value } times;
                {' '}
                <button onClick={onIncrement}>{'+'}</button>
                {' '}
                <button onClick={onDecrement}>-</button>
                {' '}
                <button onClick={this.incrementIfOdd}>奇数+1</button>
                {' '}
                <button onClick={this.incrementAsync}>异步+1</button>
            </div>
        );
    }
}
Counter.propTypes = {
    value: PropTypes.number.isRequired,
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired
}
export default Counter;