// Packages needed for this application
const inquirer  = require('inquirer'); // npm package
const fs = require('fs'); // file system
const generateMarkdown = require('./utils/generateMarkdown.js'); // generateMarkdown.js file

fs.writeFile('log.txt', process.argv[2], (err) =>
  err ? console.error(err) : console.log('Success!')
);

console.log("This is my command-line application to generate a README!");
console.log("The following questions were answered to generate a high-quality README.");

// Array of questions created for user input
// Input / questions for sections of README file through template literals 
// Objects with type, name and message properties
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of this project?",
    },
    {
        type: "input",
        name: "table of contents",
        message: "List the contents of this project.",
    },
    {
        type: "input",
        name: "description",
        message: "Provide a description of the project",
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

    // const readmeSections = `${questions.type}, ${questions.name}, ${questions.message}.`;

    console.log("README sections!")
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
