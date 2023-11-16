import React, { Component } from 'react';
import Tasks from '../tasks/Tasks';
import TasksAddForm from '../tasks-add-form/TasksAddForm';
import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { name: "Будильник 6:00", id: 0 }
            ]
        }
    }

    onChangeData = (newItem) => {
        this.setState(({ data }) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        });
    }

    render() {
        return (
            <div className="app">
                <TasksAddForm onChangeData={this.onChangeData} />
                <Tasks
                    data={this.state.data}
                />
            </div>
        );
    }
}

export default App;
