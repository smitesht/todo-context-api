# ToDo List using Context API
This repository contains the code and details about learning ReactJS Context API.

### UI

![main-image](https://github.com/smitesht/todo-context-api/assets/52151346/eb50e9bc-5e09-4900-9254-013dd4bb9f50)

### High-Level Diagram

![Todo List - ReactJS](https://github.com/smitesht/todo-context-api/assets/52151346/7a4feef7-16cc-4392-bc4f-c5024258fe22)

### Context API:
The context API will use to share data across the project.

### Define Context API classes and objects

```
import { createContext, useContext, useState } from "react";
const TodoListContext = createContext();
const TodoListUpdateContext = createContext();
export function useTodoListContext() {
  return useContext(TodoListContext);
}
export function useTodoListUpdateContext() {
  return useContext(TodoListUpdateContext);
}
```
### Create Context Provider function

```
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
```
