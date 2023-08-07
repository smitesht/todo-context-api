import React from "react";
import TodoItem from "./TodoItem";
import { useTodoListContext } from "../context/TodoListProvider";
import EditTodoItemForm from "./EditTodoItemForm";

const TodoItems = () => {
  const todolist = useTodoListContext();

  return (
    <div className="todoitems-wrapper boxshadow">
      {todolist.length <= 0 ? (
        <h3>Empty List</h3>
      ) : (
        todolist.map((data, ind) => {
          return data.isUpdate ? (
            <EditTodoItemForm todo={data} />
          ) : (
            <TodoItem key={ind} item={data} />
          );
        })
      )}
    </div>
  );
};

export default TodoItems;
