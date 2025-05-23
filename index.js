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
const newTitleInput = document.getElementById("new-title-input");
const newDescriptionInput = document.getElementById("new-description-input");
const newSelectedStatus = document.querySelector(".add-selected");

// close button for new task modal

const newCloseButton = document.getElementById("new-close-btn");

newCloseButton.addEventListener("click", function () {
    addTaskModal.style.display = "none";
})



// Dropdown

/*const statusSelect = document.getElementById("select");
const dropdownMenu = document.getElementById("menu");

statusSelect.addEventListener("click", function () {
  dropdownMenu.style.display = "block";
})*/

// Create new task button

const addNewTaskButton = document.getElementById("create-task-btn");

addNewTaskButton.addEventListener("click", function () {
    addTaskModal.style.display = "flex";
    console.log("Create new task?");
})