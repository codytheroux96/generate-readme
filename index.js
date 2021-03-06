//Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateReadMe = require("./utils/generateMarkdown.js");

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
        message: "Write a description for your project.",
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
        name: "testing",
        message: "What are the test instructions for this?",
    },
    {
        type: "rawlist",
        name: "licenses",
        message: "Select the license you used for this.",
        choices: ["Apache 2.0", "MIT", "BSD", "CC", "GPL"],
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


//after the user answers the prompts it will take the data and put it in the readme in the ouput folder
function writeToFile(fileName, data) {
    let content = generateReadMe(data);
    fs.writeFile("./ouput/README.md", content, function (error) {
        if (error) {
            return console.log(error)
        }
        console.log("Success")
    })

}

//this is the initializer function
function init() {
    inquirer.prompt(questions).then(function (data) {
        let fileName = "README.md";
        writeToFile(fileName, data)
    });
}





// Function call to initialize app
init();
