import './App/style.css';
import React from 'react';

class TodoItem extends React.Component {

    render() {
        const task = this.props.task;

        return (
            <li className="todo-item">
                <button onClick={() => this.props.changeTaskStatus(task.id)}
                    type="button"
                    className="btn"
                >
                    {
                        task.status
                            ? <span className="checked"></span>
                            : <span className="unchecked"></span>
                    }
                </button>

                {
                    task.isEdit
                        ?
                        <input className="task-edit" id={task.id} autoFocus onKeyPress={this.props.handleEnterPress(task.id)(task.text)} onBlur={() => this.props.enableEditTask(task.id)(task.text)} onChange={this.props.changeTaskText(task.id)} type="text" value={task.text} />
                        :
                        <span className="task-text" onClick={() => this.props.enableEditTask(task.id)(task.text)}>{task.text}</span>
                }

                <button onClick={() => this.props.deleteTask(task.id)} type="button" className="btn">
                    <span className="deleted"></span>
                </button>
            </li>
        )
    }
}

export default TodoItem;








