import React, { Component } from "react";

export default class TodoCreator extends Component {
  constructor(props) {
    super(props);
    this.state = { newItemText: "" };
  }
  updateNewTextValue = event => {
    this.setState({ newItemText: event.target.value });
  };

  createNewTodo = () => {
    if (
      !this.state.todoItems.find(item => item.action === this.state.newItemText)
    ) {
      this.setState({
        todoItems: [
          ...this.state.todoItems,
          { action: this.state.newItemText, done: false }
        ],
        newItemText: ""
      });
    }
  };

  render = () => (
    <div className="my-1">
      <input
        className="form-control"
        value={this.state.newItemText}
        onChange={this.updateNewTextValue}
      />
      <button className="btn btn-primary mt-1" onClick={this.createNewTodo}>
        Add
      </button>
    </div>
  );
}
