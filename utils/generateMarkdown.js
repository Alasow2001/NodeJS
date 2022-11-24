// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license !== 'None'){
    return ``;
  }

  return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license !== 'None'){
    return `\n* [License](#license)\n`
  }

  return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license !== 'None'){
    return `
    ##License

    This project is licensed under the ${license} license
    `
  }

  return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title}

  ${renderLicenseBadge(answers.license)}

  ## Description

  ${answers.description}

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)

  ## Installation 
  ${answers.installation}

  ## Usage
  ${answers.usage}

  ## Contrubuting
  ${answers.contributing}

  ## Tests
  ${answers.tests}


`;
}

module.exports = generateMarkdown;