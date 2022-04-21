const fs = require('fs')
const inquirer = require('inquirer')

inquirer.prompt ([
    {
        type: "input",
        name: "title",
        message: "What's your program title?",
    }, 
    {
        type: "input",
        name: "motivation",
        message: "What's your motivaton to create this application?"
    }, 
    {
        type: "input",
        name: "rationale",
        message: "Why did you build this project?"
    }, 
    {
        type: "input",
        name: "solution",
        message: "What problem does it solve?"
    }, 
    {
        type: "input",
        name: "learn",
        message: "What did you learn?"
    }, 
    {
        type: "input",
        name: "installStep1",
        message: "What is your first step required to install your project?"
    },
    {
        type: "input",
        name: "installStep2",
        message: "What is your second step required to install your project?"
    },     
    {
        type: "input",
        name: "installStep3",
        message: "What is your third step required to install your project?"
    },         {
        type: "input",
        name: "installStep4",
        message: "What is your fourth step required to install your project?"
    },     
    {
        type: "input",
        name: "usage",
        message: "Provide instrutions and examples for use:"
    },   
    {
        type: "input",
        name: "creditsSection",
        message: "Do you have collaborators or links to other's Github profile?",
    }, 
    {
        type: "input",
        name: "GithubURL",
        message: "Link to your Github Portfolio:"
    }, 
]) .then((answers) => {
    console.log(answers)
    const filename = `ReadMe.md`;

    const {title, motivation, rationale, solution, learn, installStep1, installStep2, installStep3, installStep4, usage, creditsSection, GithubURL} = answers;

    fs.writeFile(filename, generateHTML(answers), (err) => {
    err ? console.log("ERROR!") : console.log("SUCCESS!")
    }
    );
})

const generateHTML = (title, motivation, rationale, solution, learn, installStep1, installStep2, installStep3, installStep4, usage, creditsSection, GithubURL) => {
    let content = 
    `# ${title}
    
    ## Description
    ${motivation}
    ${rationale}
    ${solution}
    ${learn}

    ## Table of Contents
    - [Installation](#installation)
    - [Usage](#usage)
    - [Credits](#credits)
    - [License](#license)

    ## Installation
    ${installStep1}
    ${installStep2}
    ${installStep3}
    ${installStep4}

    ## Usage
    ${usage}

    ## Credits
    ${GithubURL}

    ## License
    Copyright <2022> <Eric Taylor>

    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
    `
return content;
}