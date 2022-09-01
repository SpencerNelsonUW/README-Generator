// TODO: Include packages needed for this application
//Including all packages needed for this app
const inquirer = require("inquirer")
const fs = require("fs")
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
//Here is my array of questions
const questions = [
        {
            type: "input",
            message: "enter a title for your App",
            name: "title"
        },
        {
            type:"input",
            message: "enter the description of your program",
            name: "description",
        },
        {
            type:"input",
            message:"enter installation instructions",
            name:"installation",
        },
        {
            type:"input",
            message:"enter usage information",
            name:"usage",
        },
        {
            type:"list",
            message:"choose a license type",
            name:"license",
            choices:["MIT", "Creative Commons Zero v1.0", "GNU General Public License v3.0"]
        },
        {
            type:"input",
            message:"enter the contributors",
            name:"contributors",
        },
        {
            type:"input",
            message:"enter tests",
            name:"tests",
        },
        {
            type:"input",
            message:"What is your Github username?",
            name:"githubUser",
        },
        {
            type:"input",
            message:"What is your email address?",
            name:"emailAddress",
        },
];

// TODO: Create a function to write README file
//this function says to write the file based on the filename and data passed in by init, using the generateMarkdown template that is exported in generateMarkdown.js
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (err) => {
        //console.log(fileName)
        //console.log(data)
        if (err)
            console.log(err);
        else {
            console.log("written successfully")
        }
    })
}

// TODO: Create a function to initialize app
//This function will prompt the user to answer the questions from the array above, and then it will start the writeToFile function and pass in the filename and data given by user
function init() {
    inquirer.prompt(questions)
        .then((data) => {
            writeToFile("README.md", data);
            //console.log(data)
        })
}

// Function call to initialize app
init();
