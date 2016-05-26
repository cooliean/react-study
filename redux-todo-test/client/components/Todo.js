/**
 * Created by Cooliean on 16/5/25.
 */

import React, {PropTypes} from 'react'

const Todo = ({onClick, complete, text}) => (
    <li onClick={onClick}
        style={{textDecoration:complete ? 'line-through' : 'none'}}
    >
        {text}
    </li>
)
Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
}
export default Todo

// import React, { PropTypes } from 'react'
//
// const Todo = ({ onClick, completed, text }) => (
//     <li
//         onClick={onClick}
//         style={{
//       textDecoration: completed ? 'line-through' : 'none'
//     }}
//     >
//         {text}
//     </li>
// )
//
// Todo.propTypes = {
//     onClick: PropTypes.func.isRequired,
//     completed: PropTypes.bool.isRequired,
//     text: PropTypes.string.isRequired
// }
//
// export default Todo
