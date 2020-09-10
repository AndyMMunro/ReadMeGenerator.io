// array of questions for user
const generateMarkDown = require("./utils/generateMarkdown.js")
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFile = util.promisify(fs.writeFile);

function promptUser() {
    return inquirer.prompt([
        {
            type: "input",
            name: "username",
            message: "what is your github user name?"
        },
        {
            type: "input",
            name: "email",
            message: "what is your email address?"
        },
        {
            type: "input",
            name: "title",
            message: "what is the title of your project?"
        },
        {
            type: "input",
            name: "description",
            message: "describe your project."
        },
        {
            type: "input",
            name: "installation",
            message: "describe how to install the program."
        },
        {
            type: "input",
            name: "usage",
            message: "explain how your program is utilized."
        },
        {
            type: "list",
            message: "what licenses have been utilized?",
            name: "Licenses",
            choices: ["MIT", "GLP", "Apache", "BSD"]
        },
        {
            type: "input",
            name: "contributing",
            message: "who is participating in this project?"
        },
        {
            type: "input",
            name: "testing",
            message: "explain what commands need to be done to run tests."
        }
    ])
};


// function to write README file
promptUser()

    .then(function (answers) {

        // console.log(answers);

        const readme = generateMarkDown(answers);

        return writeFile("readme.md", readme);
    })
    .then(function () {
        console.log("Successfully wrote to index.html");
    })
    .catch(function (err) {
        console.log(err);
    });