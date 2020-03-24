import './App/style.css';
import React from 'react';

class InputField extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            input: ""
        }
    }

    changeInput = (event) => {
        this.setState({
            input: event.target.value
        })
    }

    addTaskToList = () => {
        if (this.state.input) {
            this.liftTaskState();
        }
    }

    handleEnterPress = (event) => {
        if (event.key === 'Enter') {
            this.liftTaskState();
        }
    }

    liftTaskState = () => {
        const input = this.state.input;

        this.props.addTaskToList(input)
        this.setState({
            input: ''
        })
    }

    render() {
        const input = this.state.input;

        return (
            <div className="task-field">
                <div className="task-input">
                    <label htmlFor="task-input">Task</label>
                    <input id="task-input" type="text" onKeyPress={this.handleEnterPress} onChange={this.changeInput} placeholder="Text task" value={input} />
                </div>
                <button className="task-button" onClick={this.addTaskToList} type="button" id="button-addon2">ADD</button>
            </div>
        )
    }

}

export default InputField;
