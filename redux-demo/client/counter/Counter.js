/**
 * Created by Cooliean on 16/5/23.
 */
import React, {Component} from 'react';

export default class Counter extends Component {
    render() {
        return (
            <button onClick={this.props.onIncrement}>
                {this.props.value}
            </button>
        );
    }
} 