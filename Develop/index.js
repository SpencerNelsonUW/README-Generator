// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const fs = require("fs")
// const util = require("./utils")
// const generateMarkdown = require("./utils/generatorMarkdown.js")

const util = require("util");
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
        {
            type: "input",
            message: "enter a name for your README file",
            name: "title"
        },
        {
            type:"input",
            message: "enter the description of your program",
            name: "description",
        },
        {
            type:"input",
            message:"enter a table of contents",
            name:"tableOfContents",
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
        }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
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
function init() {
    inquirer.prompt(questions)
        .then((data) => {
            writeToFile("README.md", generateMarkdown(data));
            //console.log(data)
        })
}

// Function call to initialize app
init();
