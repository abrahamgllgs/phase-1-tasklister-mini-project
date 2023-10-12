document.addEventListener("DOMContentLoaded", () => {
  // your code here
});
const form = document.getElementById("create-task-form");
form.addEventListener("submit", function (event) {
  event.preventDefault();
});

const taskInput = document.getElementById("new-task-description");
const taskDescription = taskInput.value;

if (taskDescription) {
  const taskList = document.getElementById("tasks");
  const newTask = document.createElement("li");
  newTask.textContent = taskDescription;
  taskList.appendChild(newTask);
  taskInput.value = "";
}
if (taskDescription) {
  const newTask = document.createElement("li");
  newTask.innerHTML = `
    ${taskDescription}
    <button class="delete-button">Delete</button>
  `;
  const deleteButton = newTask.querySelector(".delete-button");
  deleteButton.addEventListener("click", function () {
    taskList.removeChild(newTask);
  });

  taskList.appendChild(newTask);
  taskInput.value = "";
}
