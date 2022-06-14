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
  let readmetext = `# ${data.title}\n`;
  readmetext += `\n## Description\n${data.description}\n`;
  readmetext += `\n## Installation\n${data.installation}\n`;
  readmetext += `\n## Usage\n${data.usage}\n`;
  readmetext += `\n## Contributors\n${data.contributors}\n`;
  readmetext += `\n## Github\n${data.github}\n`;
  readmetext += `\n## Email\n${data.email}\n`;
  return readmetext;
}


module.exports = generateReadMe;
