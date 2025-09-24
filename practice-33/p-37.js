// ! Write a program that takes input from the user
// ??? First install "npm install prompt-sync"

const prompt = require("prompt-sync")();

const name = prompt("Enter your name: "); // * now it will take input from the terminal
console.log(name);
