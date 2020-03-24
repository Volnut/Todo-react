import React from 'react';
import './app.css';
import TodoItem from './TodoItem';

class TodoList extends React.Component {
    
    render() {
        const list = this.props.list

        return (
            <ul className="todo-list">
                <TodoItem />
            </ul>
    }
}

export default TodoList;