// ! Write to-do list program that allows user to add, remove, and list tasks.
// ??? First install "npm install prompt-sync"

const prompt = require("prompt-sync")();
let running = true;
let tasks = [];

function addTask() {
  let userTask = prompt("Enter a task: ").trim();
  if (!userTask) {
    console.log("⚠️ Task cannot be empty!\n");
    return;
  }
  tasks.push(userTask);
  console.log("✅ Task Added!\n");
}

function checkTask() {
  if (tasks.length === 0) {
    console.log("No tasks yet!\n");
    return;
  }
  console.log("\nYour Tasks:");
  tasks.forEach((task, index) => {
    console.log(`${index + 1}. ${task}`);
  });
  console.log();
}

function removeTask() {
  if (tasks.length === 0) {
    console.log("No tasks to remove.\n");
    return;
  }

  console.log("\nYour Tasks:");
  tasks.forEach((task, index) => {
    console.log(`${index + 1}. ${task}`);
  });
  console.log();

  let toRemove = prompt("Enter the task number to remove: ");
  toRemove = parseInt(toRemove, 10);

  if (isNaN(toRemove) || toRemove < 1 || toRemove > tasks.length) {
    console.log("Invalid choice!\n");
    return;
  }

  tasks.splice(toRemove - 1, 1);
  console.log("Task Removed!\n");
}

function todoApp() {
  while (running) {
    let choice = prompt(
      `---- Options ----- \n
  1. Add Task
  2. Check All Tasks
  3. Remove a Task
  4. Exit
Choose Your Option: `
    );

    if (!choice) {
      console.log("Please enter a number!\n");
      continue; // go back to loop
    }

    choice = parseInt(choice, 10);

    switch (choice) {
      case 1:
        addTask();
        break;
      case 2:
        checkTask();
        break;
      case 3:
        removeTask();
        break;
      case 4:
        console.log("👋 Come again! Bye bye");
        running = false;
        break;
      default:
        console.log("Invalid option. Please choose 1–4.\n");
    }
  }
}

todoApp();
