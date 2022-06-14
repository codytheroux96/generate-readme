// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateReadMe = require("./utils/generateMarkdown.js");
// TODO: Create an array of questions for user input

const questions = [
    {
        type: "input",
        name: "title",
        message: "Write the title of your project here.",

    },
    {
        type: "input",
        name: "description",
        message:"Write a description for your project.",
    },
    {
        type: "input",
        name: "installation",
        message: "Desribe the steps to take to install your project.",
    },
    {
        type: "input",
        name: "usage",
        message: "List instructions for using your program.",
    },
    {
        type: "input",
        name: "contributors",
        message: "List the collaborators on this project.",
    },
    {
        type: "input",
        name: "github",
        message: "List your github username.",
    },
    {
        type: "input",
        name: "email",
        message: "Enter your email.",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    let content = generateReadMe(data);
    fs.writeFile("./ouput/README.md", content, function (error){
        if (error) {
            return console.log(error)
        }
        console.log("Success")
    })

}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(function (data){
        let fileName = "README.md";
        writeToFile(fileName, data)
    });
}


   


// Function call to initialize app
init();
