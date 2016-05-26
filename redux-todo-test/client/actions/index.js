/**
 * Created by Cooliean on 16/5/24.
 */


/*
 * action 类型
 */
export const CLActionTypes = {
    ADD_TODO: 'ADD_TODO',
    SET_VISIBILITY_FILTER: 'SET_VISIBILITY_FILTER',
    TOGGLE_TODO: 'TOGGLE_TODO',
}
/*
 * 其它的常量
 */
export const VisibilityFilters = {
    SHOW_ALL: 'ADD_TODO',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE',
}
/*
 1、过滤的Action
 2、设置Todo开关的Action
 3、add TodoAction
 */
let nextTodoId = 0
export const addTodo = (text) => {
    return ({
        type: CLActionTypes.ADD_TODO,
        id : nextTodoId++,
        text
    })
}
export const setVisibilityFilter = (filter) => {
    return {
        type: CLActionTypes.SET_VISIBILITY_FILTER,
        filter
    }
}

export const toggleTodo = (id) => {
    return {
        type: CLActionTypes.TOGGLE_TODO,
        id
    }
}
