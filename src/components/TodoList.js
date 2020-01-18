import React, { Component } from "react";
import TodoInput from "./TodoInput";
import StatusFilters from "./StatusFilters";
import TodoListItem from "./TodoListItem";

class TodoList extends Component {
  state = {
    todos: [],
    filterCriteria: "none"
  };

  handleTodoInput(event) {
    if (event.keyCode === 13) {
      let newTodo = {
        status: "active",
        text: event.target.value,
        id: Math.floor(Math.random() * 9999) + 1
      };
      let newTodos = [...this.state.todos];
      this.setState({
        todos: [...newTodos, newTodo]
      });
      event.target.value = "";
    }
  }

  handleCheckbox(idx) {
    console.log(idx);
    let newTodos = [...this.state.todos];
    newTodos[idx].status =
      newTodos[idx].status === "active" ? "completed" : "active";
    this.setState({
      todos: newTodos
    });
  }

  handleLinkClick(status) {
    this.setState({
      filterCriteria: status
    });
  }

  render() {
    let filteredItems =
      this.state.filterCriteria === "none"
        ? this.state.todos
        : this.state.todos.filter(
            todo => todo.status === this.state.filterCriteria
          );

    return (
      <div className="todo-list-container">
        <div className="todo-list-input">
          <TodoInput onEnter={this.handleTodoInput.bind(this)} />
        </div>
        <div className="todo-list">
          {filteredItems.map((todo, idx) => {
            return (
              <TodoListItem
                status={todo.status}
                text={todo.text}
                key={idx}
                id={idx}
                onCheckboxClicked={this.handleCheckbox.bind(this)}
              />
            );
          })}
        </div>
        <div className="todo-list-filters">
          <StatusFilters onLinkClicked={this.handleLinkClick.bind(this)} />
        </div>
      </div>
    );
  }
}

export default TodoList;
