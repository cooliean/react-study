/**
 * Created by Cooliean on 16/5/26.
 */
import {connect} from 'react-redux'
import {toggleTodo, VisibilityFilters} from '../actions'
import TodoList from '../components/TodoList'

const getVisibilityTodos = (todos, filter) => {
    switch (filter) {
        case VisibilityFilters.SHOW_ALL:
        {
            return todos;
        }
        case VisibilityFilters.SHOW_ACTIVE:
        {
            return todos.filter(t => !t.completed)
        }
        case VisibilityFilters.SHOW_COMPLETED:
        {
            return todos.filter(t => t.completed)
        }
        default:
        {
            return todos;
        }
    }
}

const mapStateToProps = (state) => {
    return {
        todos: getVisibilityTodos(state.todos, state.visibilityFilter)
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onTodoClick: (id) => {
            dispatch(toggleTodo(id))
        }
    }
}
const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)


export default VisibleTodoList