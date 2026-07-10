# Multi To do List
- for example only. don't input real data.

## Stack

React + Vite + Tailwind + Firebase auth

## Descriptions

- Creating to-do list.
- Selecting list and display on a side.
- Add new task for each list.
- Able to check the completed task.
- Edit list title and task.

### `components/`

This folder contains reusable UI components.

### `hooks/`

This folder contains custom React hooks.

### `pages/`

This folder contains the main pages of your application.

### `server/`

This folder contains backend-related code.

## What I learn

### Custom Hook

- Rules

1. Must start with "use" e.g. useCounter, useAuth.

### React-router-dom

- useNavigate

### Firebase

- Set up Firebase for auth

1. npm install firebase
2. Firebase config
   Created firebase.js

   ```js
   const firebaseConfig = {
     apiKey: 'YOUR_API_KEY',
     authDomain: 'YOUR_AUTH_DOMAIN',
     projectId: 'YOUR_PROJECT_ID',
     storageBucket: 'YOUR_STORAGE_BUCKET',
     messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
     appId: 'YOUR_APP_ID',
   };
   ```

3. Create sign-in and sign-up.jsx
   createUserWithEmailAndPassword(firebaseAuth,email,password)
   signInWithEmailAndPassword(firebaseAuth,email,password)
   signOut(firebaseAuth)

4. setDoc/getDoc/doc

## React

- for the case below, it show if two same setTodo what will happen.

```js
const [todo, setTodo] = useState([]);

//same setTodo but it would set two to do list. It will duplicate and overwrite the first one since todo is a empty list and it will take it every time.
setTodo([
  ...todo,
  { id: crypto.randomUUID(), title: newItem, completed: false },
]);

setTodo([
  ...todo,
  { id: crypto.randomUUID(), title: newItem, completed: false },
]);
```

- unique identifier by using <b>key</b>

```js
<ul>
  {todo.map((item) => (
    <li key={item.id}>
      <label>
        <input type="checkbox" onChange={() => ToggleTask(item.id)} />
        {item.title}
      </label>
      <button onClick={() => HandleDelete(item.id)}>Delete</button>
    </li>
  ))}
</ul>
```

- Return `todo` (Don't miss it)

```js
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
      return todo; //<<<!! don't forget
    })
  );
}
```

- Using todo && ...

> Using todo && ... in your React component is a way to perform conditional rendering. This pattern is particularly useful when dealing with data that might not be immediately available, such as data fetched from an API or data that is conditionally set. Here's what todo && ... achieves in your component:
>
> Checks for todo Existence: It ensures that todo is not undefined or null. If todo is undefined or null, JavaScript's short-circuit evaluation means the expression after && will not be executed, and React will not attempt to render the component or part of the component that relies on todo.
>
> Prevents Runtime Errors: Without this check, if todo were undefined or null, trying to call todo.map(...) would result in a runtime error similar to Cannot read properties of undefined (reading 'map'). This is because you're attempting to call the map function on something that doesn't exist.
>
> Cleaner Code: It provides a cleaner and more concise way to conditionally render components or parts of components based on the existence of certain data, avoiding the need for more verbose conditional statements like if-else.

```js
{
  todo &&
    todo.map((list) => (
      <li key={list.id}>
        <label onClick={(e) => HandleSelect(list.id)}>{list.title}</label>
        <button className="btn btn-delete">Delete</button>
      </li>
    ));
}
```

- {condition && action}
- if no task, it will show the message "There is 0 tasks"

```js
{
  selectTodo.tasks.length === 0 && <p>There is 0 tasks</p>;
}
```

## Tailwind CSS

- How to customize each tag `e.g. <h1>`

```js

@tailwind base;
@tailwind components;
@tailwind utilities;


h1 {
  @apply text-3xl;
}

```
