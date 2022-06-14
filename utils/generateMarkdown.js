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
  let readmetext = `# ${data.title}`;
  readmetext += `\n##Description\n${data.description}`;
  readmetext += `\n##Installation\n${data.installation}`;
  readmetext += `\n##Usage\n${data.usage}`;
  readmetext += `\n##Contributors\n${data.contributors}`;
  readmetext += `\n##github\n${data.github}`;
  readmetext += `\n##email\n${data.email}`;
  return readmetext;
}


module.exports = generateReadMe;
