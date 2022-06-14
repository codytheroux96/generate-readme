// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateReadMe = require("./utils/generateMarkdown.js");
// TODO: Create an array of questions for user input

//These will be the questions the user is prompted with when they run node index.js
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
        type: "rawlist",
        name: "licenses",
        message: "Select which license you would like to use.",
        choices: ["Apache 2.0", "Boost", "BSD3", "BSD2", "ISC"],
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
//after the user answers the prompts it will take the data and put it in the readme in the ouput folder
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
//this is the initializer function
function init() {
    inquirer.prompt(questions).then(function (data){
        let fileName = "README.md";
        writeToFile(fileName, data)
    });
}


   


// Function call to initialize app
init();
