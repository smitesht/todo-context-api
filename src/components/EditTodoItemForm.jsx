import React, { useState } from "react";
import { useTodoListUpdateContext } from "../context/TodoListProvider";

const EditTodoItemForm = ({ todo }) => {
  const [todoItem, setTodoItem] = useState(todo.task);

  const {
    newTodoItem,
    deleteTodoItem,
    updateTodoItem,
    isTaskComplete,
    onUpdateRequest,
  } = useTodoListUpdateContext();

  const OnChangeTodoItem = (e) => {
    setTodoItem(e.target.value);
  };

  const OnSaveItem = (e) => {
    e.preventDefault();
    if (todoItem.trim().length <= 0) return false;
    const updatedTodo = {
      ...todo,
      task: todoItem,
      isComplete: false,
      isUpdate: false,
    };

    console.log(updatedTodo);

    updateTodoItem(updatedTodo);
  };

  return (
    <form className="form-wrapper boxshadow">
      <input
        className="input-text"
        type="text"
        placeholder="Enter Task"
        value={todoItem}
        onChange={(e) => OnChangeTodoItem(e)}
      />
      <button className="btn" onClick={(e) => OnSaveItem(e)}>
        SAVE
      </button>
    </form>
  );
};

export default EditTodoItemForm;
