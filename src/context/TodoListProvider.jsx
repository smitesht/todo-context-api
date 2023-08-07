import { createContext, useContext, useState } from "react";

const TodoListContext = createContext();
const TodoListUpdateContext = createContext();

export function useTodoListContext() {
  return useContext(TodoListContext);
}

export function useTodoListUpdateContext() {
  return useContext(TodoListUpdateContext);
}

export const TodoListProvider = ({ children }) => {
  const [todolist, setTodoList] = useState([]);

  const newTodoItem = (item) => {
    console.log(item);
    setTodoList((prevData) => [...prevData, item]);
  };

  const deleteTodoItem = (id) => {
    const newlist = todolist.filter((todo) => todo.id !== id);
    setTodoList(newlist);
  };

  const updateTodoItem = (todo) => {
    const newlist = todolist.map((data) => {
      return data.id === todo.id
        ? { ...data, task: todo.task, isUpdate: false }
        : data;
    });

    setTodoList(newlist);
  };

  const onUpdateRequest = (id) => {
    const newlist = todolist.map((data) => {
      return data.id === id ? { ...data, isUpdate: true } : data;
    });

    setTodoList(newlist);
  };

  const isTaskComplete = (id) => {
    const newlist = todolist.map((data) => {
      return data.id === id ? { ...data, isComplete: !data.isComplete } : data;
    });

    setTodoList(newlist);
  };

  return (
    <TodoListContext.Provider value={todolist}>
      <TodoListUpdateContext.Provider
        value={{
          newTodoItem,
          deleteTodoItem,
          updateTodoItem,
          isTaskComplete,
          onUpdateRequest,
        }}
      >
        {children}
      </TodoListUpdateContext.Provider>
    </TodoListContext.Provider>
  );
};
