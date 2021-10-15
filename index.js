// TODO: Include packages needed for this application

const fs= require('fs');
const util = require("util");
const inquirer= require("inquirer");
const generateMarkdown = require("./util/generateMarkdown.js")
const writeFileAsync = util.promisify(fs.writeFile);

// TODO: Create an array of questions for user input
function promptUser(){
    return inquirer.prompt([
        {
            type: 'input', 
        name: 'project',
        message:'what is the name of your project?',
        },
    {
    type: 'input', 
name: 'description',
message:'please write a description of your project?',
},
{
    type: "input",
    name: "installation",
    message: "Describe the installation process if any: ",
},
{
    type: "input",
    name: "usage",
    message: "What is this project usage for?"
},
{
    type: 'linput',
    name: 'license',
    message: 'What kind of license should your project have?',
    choices: ["Apache","BSD 3", "None",
    "GPL 3.0","ISC","MIT"]
    },
    {
type: 'input', 
name: 'GitHub', 
message:'whats is your GitHub username?',
},
{
    type: 'input', 
name: 'email', 
message:'whats is your e-mail address?',
} 
]);
}
// TODO: Create a function to initialize app
async function init() {
    try {
        // Ask user questions and generate responses
        const answers = await promptUser();
        const generateContent = generateMarkdown(answers);
        // Write new README.md to dist directory
        await writeFileAsync('./README.md', generateContent);
        console.log('✔️  Successfully wrote to README.md');
    }   catch(err) {
        console.log(err);
    }
  }
  
// Function call to initialize app
init();