# TODO App

A simple to-do list built with plain HTML, CSS and JavaScript (no frameworks, no build step).

## Features (done)

- Renders a list of tasks from an in-memory `tasks` array
- Add a new task with the input box and the **Add Task** button
  - Empty or whitespace-only input is ignored
  - Input is cleared after adding
- Completed tasks get a `completed` class (styled differently)
- Each task row shows Delete / Edit / Complete buttons (UI only for now)
- Responsive, card-style layout

## Not done yet

- Delete, Edit and Complete buttons have no click handlers
- Tasks are not persisted (a page refresh resets the list; `localStorage` could be added)
- Task ids use `tasks.length + 1`, which can produce duplicates once delete is added
- Task text is inserted with `innerHTML`; switch to `textContent` to avoid XSS from user input
- Pressing Enter in the input does not add a task

## Project structure

```
TODO/
├── index.html   # page markup
├── style.css    # styling
└── script.js    # task data, render logic, add-task handler
```

## How to run

No install needed. Open `index.html` in a browser, or use the VS Code
**Live Server** extension (serves at `http://127.0.0.1:5500`).

## How it works

- `tasks` holds objects shaped like `{ id, taskName, completed }`.
- `render()` loops over `tasks` and appends one `.todo-item` div per task into `.todo-items`.
- On **Add Task**, a new task is pushed to `tasks`, the list container is cleared, and `render()` runs again.
- The script is loaded with `defer`, so the DOM is ready before it runs.

## Roadmap

1. Wire up Delete (filter by `id` and re-render)
2. Wire up Complete (toggle `completed` and re-render)
3. Wire up Edit (inline edit or prompt)
4. Persist tasks in `localStorage`
5. Add Enter-key support and basic validation messages
