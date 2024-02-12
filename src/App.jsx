import { useState, useEffect } from 'react';

import DisplayToDoList from './components/DisplayToDoList';
import AddList from './components/AddList';
import AllToDoList from './components/AllToDoList';
import CloseBtn from './components/CloseBtn';

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
        // Map over each todo item
        return {
          ...todoItem, // Copy all existing properties of the todo item
          tasks: todoItem.tasks.map((task) => {
            // Now, map over each task within this todo item
            if (task.id === taskID) {
              // If this task's id matches the id we're looking to update...
              return { ...task, completed: completed }; // Update its 'completed' status
            }
            return task; // Otherwise, return the task as is
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

  return (
    <div className="flex flex-row bg-slate-200 min-h-screen">
      <div className="w-2/5">
        <AddList onSubmitList={HandleAddTitle} />
        <AllToDoList
          todo={todo}
          HandleSelect={HandleSelect}
          HandleDeleteList={HandleDeleteList}
          onSubmitEdit={HandleEditList}
        />
      </div>
      <div className="ml-10 w-2/5">
        {/* {selectedTodo.length === 0 && 'No task on the list'} */}
        <DisplayToDoList
          selectedTodo={selectedTodo}
          HandleAddTask={HandleAddTask}
          HandleDeleteTask={HandleDeleteTask}
          ToggleTask={ToggleTask}
          HandleClose={HandleClose}
        />
      </div>
      <div className="">
        {selectedTodo !== null && (
          <button
            className="btn btn-delete mt-5"
            onClick={(e) => HandleClose()}
          >
            Close
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
