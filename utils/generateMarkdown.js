// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const licenseBadges = ""
}

// Function that returns an empty string sicne there is no license
function renderLicenseLink (license) {
const licenseBadges = ""
}

// Function that returns the license section of README
// Returns an empty string since there is no license
function renderLicenseSection(license) {
const licenseBadges = ""
}

// Function to generate markdown file for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Table of Contents 
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributors](#contributors)
  - [tests](#tests)

  ## Description:
  ${data.description}
  ## Installation:
  ${data.installation}
  ## Usage:
  ${data.usage}
  ## License:
  ${data.license}
  ## Contributors:
  ${data.contributors}
  ## Tests:
  ${data.tests}
  ## Credits:
  ${data.credits}

`;
}

module.exports = generateMarkdown;
