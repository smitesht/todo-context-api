import React, { useState } from "react";
import { useTodoListUpdateContext } from "../context/TodoListProvider";
import { v4 as uuidv4 } from "uuid";

const TodoItemForm = () => {
  const [todoItem, setTodoItem] = useState("");

  const { newTodoItem } = useTodoListUpdateContext();

  const OnChangeTodoItem = (e) => {
    setTodoItem(e.target.value);
  };

  const OnAddTodoItem = (e) => {
    e.preventDefault();
    if (todoItem.trim().length <= 0) return false;
    const todo = {
      id: uuidv4(),
      task: todoItem,
      isComplete: false,
      isUpdate: false,
    };
    newTodoItem(todo);
    setTodoItem("");
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
      <button className="btn" onClick={(e) => OnAddTodoItem(e)}>
        ADD
      </button>
    </form>
  );
};

export default TodoItemForm;
