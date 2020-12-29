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
},
{
    name:"installation",
    type:"input",
    message:"Describe the installation process if any or known: ",
},
{
    name:"usage",
    type:"input",
    message:"What is the purpose or project usage for?"
},
{
    name:"license",
    type:"input",
    message:"Select the license for the project: ",
    selection: [
        "MIT",
        "Open",
        "Mozilla",
        "Apache",
        "ISC",
        "Academic",
        "ISC",
        "GNU",
    ]
},
{
    name:"contributing",
    type:"input",
    message:"Who is contributing to the project?"
},
{
    name:"tests",
    type:"input",
    message:"Is there a test for the project?"
},
{
    name:"questions",
    type:"input",
    message:"What to do if I have questions?"
},
{
    name:"username",
    type:"input",
    message:"Please provide GitHub username: ",
},
{
    name:"email",
    type:"input",
    message:"Please enter your email: ",
},
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
