import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useTodoListUpdateContext } from "../context/TodoListProvider";

const TodoItem = ({ item }) => {
  const {
    newTodoItem,
    deleteTodoItem,
    updateTodoItem,
    isTaskComplete,
    onUpdateRequest,
  } = useTodoListUpdateContext();

  const OnToggleTaskStatus = () => {
    isTaskComplete(item.id);
  };

  const OnDeleteTask = () => {
    deleteTodoItem(item.id);
  };

  const OnUpdateTask = () => {
    onUpdateRequest(item.id);
  };

  return (
    <div className="todoitem-wrapper">
      <span
        className={`todo-text ${item.isComplete ? "complete" : ""}`}
        onClick={OnToggleTaskStatus}
      >
        {item.task}
      </span>
      <div className="icon-lists">
        <FaEdit className="icon-edit" size={15} onClick={OnUpdateTask} />
        <FaTrash className="icon-delete" size={15} onClick={OnDeleteTask} />
      </div>
    </div>
  );
};

export default TodoItem;
