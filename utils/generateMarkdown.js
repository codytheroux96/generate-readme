// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
const generateReadMe = (data) => { 
  let tableOfContents = `\n## Table Of Contents \n`
  { tableOfContents += `\n* [Description](#description)\n`;}
  { tableOfContents += `\n* [Installation](#installation)\n`;}
  { tableOfContents += `\n* [Usage](#usage)\n`;}
  { tableOfContents += `\n* [Contributors](#contributors)\n`;}
  { tableOfContents += `\n* [Questions](#questions)\n`;}
  


  let readmetext = `# ${data.title}\n`;
  readmetext += tableOfContents;
  readmetext += `\n## Description\n${data.description}\n`;
  readmetext += `\n## Installation\n${data.installation}\n`;
  readmetext += `\n## Usage\n${data.usage}\n`;
  readmetext += `\n## Contributors\n${data.contributors}\n`;
  readmetext += `\n## Questions? Please Contact Me\nGithub:https://github.com/${data.github}\n`;
  readmetext += `\nEmail:${data.email}\n`;
  return readmetext;
}


module.exports = generateReadMe;
