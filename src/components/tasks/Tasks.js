import React, { Component } from "react";
import './tasks.css';

class Tasks extends Component {
    render() {
        let items = this.props.data.map(item => 
            <li className="list-group-item d-flex justify-content-between" key={item.id}>
                <span className="list-group-item-label">{item.name}</span>
            </li>
        );
        return (
            <ul className="list-group">
                {items}
            </ul>
        );
    }
}

export default Tasks;
