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
    title,
    description,
    status
  };

  saveToLocalStorage(newTask);
  retrieveFromLocalStorage(newTask);
  addTaskToBoard(newTask);
  closeAndResetModal();
});

function saveToLocalStorage(task) {
  let savedTask = JSON.stringify(task);
  localStorage.setItem("task", savedTask);
}

function retrieveFromLocalStorage(task) {
  let retrievedTask = localStorage.getItem("task");
  let retrievedObject = JSON.parse(retrievedTask);
}

function addTaskToBoard(task) {
  const column = document.getElementById(`${task.status}-column`);

  const card = document.createElement("div");
  card.classList.add("card");
  card.setAttribute("data-id", task.id);
  card.innerHTML = `
    <h4>${task.title}</h4>
  `;

  column.appendChild(card);

}

function closeAndResetModal() {
  const modal = document.querySelector(".modal-wrapper");

  modal.style.display = "none";
  document.getElementById("title-input").value = "";
  document.getElementById("description-input").value = "";
  document.getElementById("status-select").value = "todo";
}

