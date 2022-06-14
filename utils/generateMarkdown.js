//this is the function that will take in the data from index.js and build where and how it will be displayed in the readme
const generateReadMe = (data) => {
  //renders the badge of the license based upon what the user selects and assigns it to the variable "badge"
  let badge = `\n <img src="https://img.shields.io/badge/license-${data.licenses}-goldenrod" alt="badge-${data.licenses}" /> \n`
  //laying out the table of contents
  let tableOfContents = `\n## Table Of Contents \n`
  { tableOfContents += `\n* [Description](#description)\n`; }
  { tableOfContents += `\n* [Installation](#installation)\n`; }
  { tableOfContents += `\n* [Usage](#usage)\n`; }
  { tableOfContents += `\n* [Contributors](#contributors)\n`; }
  { tableOfContents += `\n* [Testing](#testing)\n`; }
  { tableOfContents += `\n* [License](#licenses)\n`; }
  { tableOfContents += `\n* [Questions](#questions)\n`; }


  //this will be the text displayed in the read me taking the data from the corresponding sections in index.js
  let readmetext = `# ${data.title}\n`;
  readmetext += badge; `\n`;
  readmetext += tableOfContents;
  readmetext += `\n## Description\n${data.description}\n`;
  readmetext += `\n## Installation\n${data.installation}\n`;
  readmetext += `\n## Usage\n${data.usage}\n`;
  readmetext += `\n## Contributors\n${data.contributors}\n`;
  readmetext += `\n## Testing\n${data.testing}\n`;
  readmetext += `\n## Licenses\n This project is covered under the ${data.licenses} license.\n`
  readmetext += `\n## Questions\n Please contact me using these methods if you have questions!\n\nGithub: https://github.com/${data.github}\n`;
  readmetext += `\nEmail: ${data.email}\n`;
  return readmetext;
}


module.exports = generateReadMe;
