import './app.css';
import React from 'react';
import TodoItem from './TodoItem';
import InputField from './InputField';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      taskList: [
        { 'id': 1, 'text': 'Task1', 'status': true, 'isEdit': false },
        { 'id': 2, 'text': 'Task2', 'status': true, 'isEdit': false },
        { 'id': 3, 'text': 'Task3', 'status': false, 'isEdit': false },
        { 'id': 4, 'text': 'Task4', 'status': false, 'isEdit': false },
        { 'id': 5, 'text': 'Task5', 'status': false, 'isEdit': false },
        { 'id': 6, 'text': 'Task6', 'status': false, 'isEdit': false },
      ],
    }
  }

  addTaskToList = (message) => {
    let taskList = this.state.taskList;

    this.setState(() => {
      taskList.push({
        id: taskList.length === 0 ? 0 : taskList.length + 1,
        text: message,
        status: false
      })

      return taskList;
    })
  }

  enableEditTask = (index_id) => (text = null) => {
    const task_index = this.state.taskList.map(task => task.id).indexOf(index_id);
    let taskList = this.state.taskList;

    if (text.length !== 0) {
      this.setState(() => {
        taskList[task_index].isEdit = !taskList[task_index].isEdit;
        return taskList;
      })
    } else {
      return;
    }
  }

  changeTaskText = (index_id) => (event) => {
    const task_index = this.state.taskList.map(task => task.id).indexOf(index_id);
    let taskList = this.state.taskList;
    let new_text = event.target.value;

    this.setState(() => {
      taskList[task_index].text = new_text;
      return taskList;
    })
  }

  changeTaskStatus = (index_id) => {
    const task_index = this.state.taskList.map(task => task.id).indexOf(index_id);
    let taskList = this.state.taskList;

    this.setState(() => {
      taskList[task_index].status = !taskList[task_index].status;
      return taskList;
    })
  }

  deleteTask = (index_id) => {
    const task_index = this.state.taskList.map(task => task.id).indexOf(index_id);
    let taskList = this.state.taskList;

    this.setState(() => {
      delete taskList[task_index];
      return taskList;
    })
  }

  handleEnterPress = (index_id) => (text = null) => (event) => {

    if (event.key === 'Enter') {
      const task_index = this.state.taskList.map(task => task.id).indexOf(index_id);
      let taskList = this.state.taskList;
  
      if (text.length !== 0) {
        this.setState(() => {
          taskList[task_index].isEdit = !taskList[task_index].isEdit;
          return taskList;
        })
      } else {
        return;
      }
    }
  }
  render() {
    const taskList = this.state.taskList;

    return (
      <div className="todo">
        <InputField addTaskToList={this.addTaskToList} />
        {
          taskList.map(task => (
            <TodoItem
              task={task}
              key={task.id}
              changeTaskStatus={this.changeTaskStatus}
              deleteTask={this.deleteTask}
              enableEditTask={this.enableEditTask}
              changeTaskText={this.changeTaskText}
              handleEnterPress={this.handleEnterPress}
            />
          ))
        }
      </div>
    )
  }

}

export default App;
