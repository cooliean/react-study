/**
 * Created by Cooliean on 16/5/25.
 */

import React, {PropTypes} from 'react'

const Todo = ({onClick, complete, text}) => {
    <li onClick={onClick}
        style={{textDecoration:complete ? 'line-through' : 'none'}}
    >
        {text}
    </li>;
}
Todo.propTypes = {
    onClick: PropTypes.func.required,
    completed: PropTypes.bool.required,
    text: PropTypes.string.required,
}
export default Todo;

