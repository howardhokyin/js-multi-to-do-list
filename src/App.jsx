import { useState, useEffect } from 'react';
import AddToDo from './components/AddToDo';
import ToDoList from './components/ToDoList';

function App() {
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    console.log(todo);
  }, [todo]);

  function HandleAdd(title) {
    setTodo((currentTodo) => [
      ...currentTodo,
      { id: crypto.randomUUID(), title, completed: false },
    ]);
  }

  function HandleDelete(id) {
    console.log('click delete for ' + id);
    setTodo(todo.filter((item) => item.id !== id));
  }

  function ToggleTask(id, completed) {
    setTodo((currentTodo) => {
      return currentTodo.map((item) => {
        if (item.id === id) {
          return { ...item, completed };
        }
        return item;
      });
    });
  }

  return (
    <div>
      <AddToDo onSubmit={HandleAdd} />
      <h1> To Do List </h1>
      {todo.length === 0 && 'No task on the list'}
      <ToDoList
        todo={todo}
        HandleDelete={HandleDelete}
        ToggleTask={ToggleTask}
      />
    </div>
  );
}

export default App;
