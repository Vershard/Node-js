let inquirer = require('inquirer');
let fs = require('fs')
let readGenerator = require("./readGenerator");
 

var questions = [{
    type: "input",
    message: "What is the title of your repository?",
    name: "title"



},

{
    type: "input",
    message: "What is your GitHub user name?",
    name: "userName"
},

{

    type: "input",
    message: "What is your email?",
    name: "email"



},

{

    type: "input",
    message: "Please describe the repository.",
    name: "answers"




},

{

    type: "list",
    name: "license",
    message: "Select license",
    choices: [
        "University of Richmond",
        "None"
    ]

}]; 

inquirer.prompt(questions).then(function (response) {
    console.log(response);

    
    fs.writeFile("./ReadMe.md", readGenerator(response), function (err) {
        if (err) throw err
        console.log("success"); 
        // console.log(answers)
    }) 
});