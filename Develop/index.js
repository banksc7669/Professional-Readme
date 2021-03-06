const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const generateReadme = require("./utils/generateReadme")
const writeFileAsync = util.promisify(fs.writeFile);

// array of questions for user
function promptUser(){
    return inquirer.prompt([
        {
    name:"projectTitle",
    type:"input",
    message:"What is the project title?"
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
    choices: [
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
}
]);
}
// Async function 
  async function init() {
    try {
       
        const answers = await promptUser();
        const generateContent = generateReadme(answers);
       
        await writeFileAsync('./dist/README.md', generateContent);
        console.log('✔️  Successfully wrote to README.md');
    }   catch(err) {
        console.log(err);
    }
  }
  
  init();