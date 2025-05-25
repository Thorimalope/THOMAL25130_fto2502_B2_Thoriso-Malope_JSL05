import { initialTasks } from "./initialData.js";

// Fetched elements from DOM

const cards = document.querySelectorAll(".card");
const modal = document.querySelector(".modal-wrapper");
const titleInput = document.getElementById("title-input");
const descriptionInput = document.getElementById("description-input");
const selectedStatus = document.getElementById("select");

// Populating the Modal

cards.forEach(card => {
  card.addEventListener("click", () => {
    const taskId = card.getAttribute("data-id");
    const task = initialTasks.find(t => t.id === parseInt(taskId));

    if (task) {
      // Populate the modal
      titleInput.value = task.title;
      descriptionInput.value = task.description;
      selectedStatus.value = task.status.toLowerCase();

      // Show modal
      modal.style.display = "flex";
    }
    console.log("card clicked");
  });
});

// Modal close button

const closeButton = document.getElementById("close-btn");

closeButton.addEventListener("click", function () {
  modal.style.display = "none";
})



// Add Task Modal Elements

const addTaskModal = document.querySelector(".newTask-modal-wrapper");


// close button for new task modal

const newCloseButton = document.getElementById("new-close-btn");

newCloseButton.addEventListener("click", function () {
    addTaskModal.style.display = "none";
})



// Create new task button

const addNewTaskButton = document.getElementById("create-task-btn");

addNewTaskButton.addEventListener("click", function () {
    addTaskModal.style.display = "flex";
    console.log("Create new task?");
})

// Functions to save the new task and add it to the board

const newTaskBtn = document.getElementById("new-task-btn");

newTaskBtn.addEventListener("click", function () {

    const newTitleInput = document.getElementById("new-title-input").value;
    const newDescriptionInput = document.getElementById("new-description-input").value;
    const newSelectedStatus = document.getElementById("new-select").value;
 

  const newTask = {
    id: Date.now(),
    title: newTitleInput,
    description: newDescriptionInput,
    status: newSelectedStatus
  };

  saveToLocalStorage(newTask);
  addTaskToBoard(newTask);
  closeAndResetModal();
});


/*function saveToLocalStorage(task) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}*/

function saveToLocalStorage(task) {
  let savedTask = JSON.stringify(task);
  localStorage.setItem("task", savedTask);
}

function loadTaskFromLocalStorage() {
  const saved = localStorage.getItem("task");
  if (saved) {
    const task = JSON.parse(saved);
    addTaskToBoard(task); 
  }
}



function addTaskToBoard(task) {
  const column = document.getElementById(`${task.status}-column`);

  const card = document.createElement("div");
  card.classList.add("card");
  card.setAttribute("data-id", task.id);
  card.innerHTML = `
    <p>${task.title}</p>
  `;

  column.appendChild(card);

}

function closeAndResetModal() {

  const addTaskModal = document.querySelector(".newTask-modal-wrapper");
  addTaskModal.style.display = "none";
  document.getElementById("new-title-input").value = "";
  document.getElementById("new-description-input").value = "";
  document.getElementById("new-select").value = "todo";
}






// Methods that might work

/*function saveToLocalStorage(task) {
  let savedTask = JSON.stringify(task);
  localStorage.setItem("task", savedTask);
}

function retrieveFromLocalStorage(task) {
  let retrievedTask = JSON.parse(localStorage.getItem("task"));
  retrievedTask.forEach(task => addTaskToBoard(task));
}

function saveToLocalStorage(task) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

document.addEventListener("DOMContentLoaded", () => {
  loadTasksFromStorage();
});

/*function loadTasksFromStorage() {
  const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  savedTasks.forEach(task => addTaskToBoard(task));
}*/

document.addEventListener("DOMContentLoaded", () => {
  loadTaskFromLocalStorage();
});
