// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const fs = require("fs")

// TODO: Create an array of questions for user input
inquirer
    .prompt([
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
]);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const fileName = `README.md`;

    fs.writeFile(fileName, )
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
