import { useState, useEffect } from 'react';

import DisplayToDoList from './components/DisplayToDoList';
import AddList from './components/AddList';
import AllToDoList from './components/AllToDoList';

import '../src/index.css';

function App() {
  const [todo, setTodo] = useState([]);
  const [selectedTodo, setSelectedTodo] = useState(null);

  useEffect(() => {
    if (selectedTodo) {
      const updatedSelectedTodo = todo.find(
        (item) => item.id === selectedTodo.id
      );
      if (updatedSelectedTodo) {
        setSelectedTodo(updatedSelectedTodo);
      }
    }
  }, [todo]);

  function HandleAddTitle(title) {
    setTodo((currentTodo) => [
      ...currentTodo,
      { id: crypto.randomUUID(), title, tasks: [] },
    ]);
  }

  function HandleAddTask(taskTitle) {
    setTodo((currentTodo) =>
      currentTodo.map((todo) => {
        if (selectedTodo.id === todo.id) {
          return {
            ...todo,
            tasks: [
              ...todo.tasks,
              { id: crypto.randomUUID(), title: taskTitle, completed: false },
            ],
          };
        }
        return todo;
      })
    );
  }

  function HandleDeleteList(listID) {
    setTodo(todo.filter((list) => list.id !== listID));
    if (selectedTodo.id === listID) {
      setSelectedTodo(null);
    }
  }

  function HandleDeleteTask(taskID) {
    setTodo((currentTodo) => {
      return currentTodo.map((list) => {
        return {
          ...list,
          tasks: list.tasks.filter((task) => task.id !== taskID),
        };
      });
    });
  }

  function ToggleTask(taskID, completed) {
    setTodo((currentTodo) => {
      return currentTodo.map((todoItem) => {
        return {
          ...todoItem,
          tasks: todoItem.tasks.map((task) => {
            if (task.id === taskID) {
              return { ...task, completed: completed };
            }
            return task;
          }),
        };
      });
    });
  }

  function HandleSelect(listsId) {
    setSelectedTodo('');
    setSelectedTodo(todo.find((todo) => todo.id === listsId));
  }

  function HandleClose() {
    setSelectedTodo(null);
  }
  // This is why the error I got for editing
  // function HandleEditList(listID, editedTitle) {
  //   setTodo((currentTodo) => {
  //     currentTodo.map((list) => {
  //       if (list.id === listID) {
  //         return { ...list, title: editedTitle };
  //       }
  //       return list;
  //     });
  //   });
  // }
  function HandleEditList(listID, editedTitle) {
    setTodo((currentTodo) => {
      return currentTodo.map((list) => {
        if (list.id === listID) {
          return { ...list, title: editedTitle };
        }
        return list;
      });
    });
  }

  function HandleEditTask(listID, taskID, editedTask) {
    setTodo((currentTodo) => {
      return currentTodo.map((list) => {
        if (list.id === listID) {
          // Update only the list that contains the task to be edited
          return {
            ...list,
            tasks: list.tasks.map((task) => {
              if (task.id === taskID) {
                // Update the specific task
                return { ...task, title: editedTask };
              }
              return task; // Return unmodified tasks
            }),
          };
        }
        return list; // Return unmodified lists
      });
    });
  }

  return (
    <div className="flex sm:flex-row bg-slate-200 min-h-screen flex-col">
      <div className="sm:w-2/5 w-full">
        <AddList onSubmitList={HandleAddTitle} />
        <AllToDoList
          todo={todo}
          HandleSelect={HandleSelect}
          HandleDeleteList={HandleDeleteList}
          onSubmitEdit={HandleEditList}
        />
      </div>

      <div className="flex flex-col sm:ml-10 sm:flex-row w-full sm:w-3/5 mr-3">
        <div className="sm:hidden block">
          {selectedTodo !== null && (
            <button
              className="btn btn-delete mt-5 w-full"
              onClick={(e) => HandleClose()}
            >
              Close
            </button>
          )}
        </div>
        <div className="w-full">
          <DisplayToDoList
            selectedTodo={selectedTodo}
            HandleAddTask={HandleAddTask}
            HandleDeleteTask={HandleDeleteTask}
            ToggleTask={ToggleTask}
            HandleClose={HandleClose}
          />
        </div>
        <div className="hidden sm:block">
          {selectedTodo !== null && (
            <button
              className="btn btn-delete mt-5 w-full"
              onClick={(e) => HandleClose()}
            >
              Close
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
