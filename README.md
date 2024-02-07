# React + Tailwind + vite

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
