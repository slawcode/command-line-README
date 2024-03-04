// TODO: Include packages needed for this application
// npm package 
const inquirer  = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
console.log("This is my command-line application to generate a README!");
console.log("The following questions were answered to generate a high-quality README.");
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of this project?",
    },
    {
        type: "input",
        name: "description",
        message: "Provide a description of the project",
    },
    {
        type: "input",
        name: "table of contents",
        message: "List the contents of this project.",
    },
    {
        type: "input",
        name: "installation",
        message: "What is the title of this project?",
    },
    {
        type: "input",
        name: "usage",
        message: "Procide instructions for use of this project.",
    },
    {
        type: "input",
        name: "contributors",
        message: "List the contributors of this project.",
    },
    {
        type: "input",
        name: "tests",
        message: "How does the user test this project?",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (error) => {
        if (error) {
            return console.log(error);
        }
        console.log("Complete! You can preview the README file.");
    })
};

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
