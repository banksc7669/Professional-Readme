const inquirer = require("inquirer");
var generator = require("./utils/generateMarkdown");
var fs = require("fs");

// array of questions for user
const questions = [{
    name:"title",
    type:"input",
    message:"What is the title of your project?"
},
{
    name:"description",
    type:"input",
    message:"Type a description for your project"
}

];

let inquirerData;

// function to write README file
function writeToFile(fileName = './README.md', data = inquirerData) {
    fs.writeFileSync(fileName, data, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
    });
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then(function(answers){
        console.log(answers)
        let inquirerData = generator(answers)
        writeToFile('./README.md',inquirerData)
    }).catch(function(err){
        if (err) throw err
    })}

// function call to initialize program
init();
