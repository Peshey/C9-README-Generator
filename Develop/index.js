// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a short description explaining the what, why, and how of your project.',
        
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project?',
        
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for usage. Include screenshots as needed.',
        
    },
    {
        type: 'input',
        name: 'credit',
        message: 'Please list any collaborators or other resources used.',
        
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'How to contribute?',
        
    },
    {
        type: 'input',
        name: 'test',
        message: 'Provide examples of any tests to be run.',
        
    },
    {
        type: 'input',
        name: 'license',
        message: 'Select a license for this project.',
        choice: ["MIT", "Apache 2.0", "GNU v3.0", "BSD2", "BSD3", "none"]
        
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username.',
        
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email.',
        
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        err ? console.error(err) : console.log('README file generated')
    }) 
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
