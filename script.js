const tasks = [
  {
    id: 1,
    taskName: "Complete project documentation",
    completed: true
  },
  {
    id: 2,
    taskName: "Review pull request",
    completed: false
  },
  {
    id: 3,
    taskName: "Attend team meeting",
    completed: true
  },
  {
    id: 4,
    taskName: "Fix login page bug",
    completed: false
  },
  {
    id: 5,
    taskName: "Update test cases",
    completed: false
  }
];

const addBtn = document.querySelector(".add-btn");
let todoItems = document.querySelector(".todo-items");

addBtn.addEventListener("click", () => {
  let input = document.querySelector("input");
  let taskName = input.value.trim();

  if (taskName !== "") {
    let newTask = {
      id: tasks.length + 1,
      taskName: taskName,
      completed: false
    }

    tasks.push(newTask);
    todoItems.innerHTML = "";
    input.value = "";
    render();
  }
})


const render = () => {
  tasks.forEach(element => {
    let item = document.createElement("div");
    item.classList.add(`todo-item`);

    if (element.completed) item.classList.add("completed");

    item.innerHTML = `
     <span class="task-name">${element.taskName}</span>
     <div class="actions">
       <button class="delete-btn">Delete</button>
       <button class="edit-btn">Delete</button>
       <button class="complete-btn">Delete</button>
     </div>
    `

    todoItems.appendChild(item);
  });
}

render();