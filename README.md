## Professional README Generator Using Node.js

Create a command-line application that dynamically generates a README.md from a user's input. The application will be invoked with the following command node index.js The user will be prompted for their GitHub username, which will be used to make a call to the GitHub API to retrieve their email and profile image. They will then be prompted with questions about their project.

## User Story

As A developer
I WANT a README generator
SO THAT can quickly create a professional README for a new project 

## Acceptance Criteria

GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README

## Table of Contents

* [Description](#description)

* [UserStory](#userstory)

* [AcceptancCriteria](#acceptancecriteria)

* [TableofContents](#tableofcontents)

* [Installation](#installation)

* [Usage](#usage)

* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#questions)

## Installation

To install necessary dependencies, run the following commands:

npm init

npm install inquirer

## Usage
In order to start run npm install and then run the following command:

node index.js

## Contributing

* Christopher Banks

## Tests

To run tests, run the following command:

npm test

## Questions

If you have questions about the repo, open an issue or contact me directly at banksc7669@gmail.com. You can find more of my work at https://github.com/banksc7669.