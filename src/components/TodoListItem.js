import React from "react";

function TodoListItem({ text, status, onCheckboxClicked, id }) {
  return (
      <div className="todo-list-item">
        <input 
        type="checkbox" 
        checked={status === "completed"} 
        onChange={() => onCheckboxClicked(id)} 
        />
        <span style={{textDecoration: status === "active" ? "none" : "line-through"}}>{text}</span>
      </div>
  );
}

export default TodoListItem;
