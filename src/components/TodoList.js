import React from 'react'
import { connect } from 'react-redux'
import Todo from './Todo'
import { addTodo, toggleTodo } from '../store/actions'

const TodoList = ({ todos, dispatch }) => {
    let input

    function toggleTodos(id) {
        dispatch(toggleTodo(id))
    }

    function addTodos() {
        if (input.value.trim()) {
            dispatch(addTodo(input.value))
            input.value = ''
        } else {
            console.log('空值');
        }
    }

    return (
        <div>
            <div>
                <input ref={node => input = node} />
                <button onClick={addTodos}>add Todo</button>
            </div>
            <ul>
                {todos.map(todo => (
                    <Todo key={todo.id} {...todo} onClick={() => toggleTodos(todo.id)} />
                ))}
            </ul>
        </div>
    )
}

const mapStateToProps = state => state

export default connect(mapStateToProps)(TodoList)
