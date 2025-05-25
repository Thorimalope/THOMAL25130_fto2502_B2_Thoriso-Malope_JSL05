
// Functions to save and load the task from local storage

import { addTaskToBoard } from "./addToDom.js";

export function saveToLocalStorage(task) {
  let savedTask = JSON.stringify(task);
  localStorage.setItem("task", savedTask);
}

export function loadTaskFromLocalStorage() {
  const saved = localStorage.getItem("task");
  if (saved) {
    const task = JSON.parse(saved);
    addTaskToBoard(task); 
  }
}
