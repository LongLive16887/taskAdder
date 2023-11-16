import React, { Component } from "react";
import './tasks-add-form.css';

class TasksAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        }
        this.onValueChange = this.onValueChange.bind(this);
    }

    onValueChange = (e) => {
        const name = e.target.value;
        this.setState({ name });
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onChangeData({ name: this.state.name, id: Date.now() });
        this.setState({ name: '' });
    }

    render() {
        return (
            <div className="app-add-form">
                <h3>Добавьте новую задачу</h3>
                <form
                    className="add-form d-flex"
                    onSubmit={this.onSubmit}>
                    <input
                        type="text"
                        className="form-control new-post-label"
                        placeholder="Ваша задача?"
                        value={this.state.name}
                        onChange={this.onValueChange}
                        required
                    />
                    <button
                        type="submit"
                        className="btn btn-outline-light">
                        Добавить
                    </button>
                </form>
            </div>
        );
    }
}

export default TasksAddForm;
