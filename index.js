// Packages needed for this application
const inquirer  = require('inquirer'); // npm package
const fs = require('fs'); // file system
const generateMarkdown = require('./utils/generateMarkdown.js'); // generateMarkdown.js file

console.log("This is my command-line application to generate a README!");
console.log("The following questions will generate a high-quality README once answered.");

// Array of questions created for user input
// Input / questions for sections of README file through template literals 
// Objects with type, name and message properties
// When node index.js is entered in the terminal it will go through the questions/statements below for the user to answer
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of this project?",
    },
    {
        type: "input",
        name: "description",
        message: "Provide a description of the project.",
    },
    {
        type: "input",
        name: "installation",
        message: "What are the steps required to install this project?",
    },
    {
        type: "input",
        name: "usage",
        message: "Provide instructions for use of this project.",
    },
    {
        type: "input",
        name: "license",
        message: "Provide details about the license for this project.",
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
    {
        type: "input",
        name: "credits",
        message: "List the credits ?",
    },

    // const readmeSections = `${questions.type}, ${questions.name}, ${questions.message}.`;

    // console.log("README sections!")
];

// Function created to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (error) => {
        if (error) {
            return console.log(error);
        }
        console.log("Complete! You can preview the README file.");
    })
};

// Function created to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function (userInput) {
        console.log(userInput)
        writeToFile("README.md", generateMarkdown(userInput));
    });


};

// console.log("App initialized!");

// Function call to initialize app
init();
