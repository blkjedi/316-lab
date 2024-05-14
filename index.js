const taskInput = document.getElementById("task-input");
const createTaskBtn = document.getElementById("create-task-btn");
const taskListUL = document.getElementById("task-list");

createTaskBtn.addEventListener("click", addTask);

function addTask(e) {
  console.log(e);

  if (taskInput.value === "") return;
  const li = document.createElement("li");
  li.textContent = taskInput.value;
  taskListUL.appendChild(li);
  taskInput.value = "";
  //?==== re focus on input
  taskInput.focus();
}

const btn1 = document.getElementById("Login");
const closeBtn = document.querySelector(".close");
const popupId = document.getElementById("popup");

btn1.addEventListener("click", function () {
  popupId.style.display = "flex";
});
closeBtn.addEventListener("click", function () {
  popupId.style.display = "none";
});
window.addEventListener("DOMContentLoaded", function () {
  popupId.style.display = "flex";
});
