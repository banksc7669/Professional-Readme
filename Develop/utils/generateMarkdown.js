// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.description}

  [Link Text](http://URL)
`;
}

module.exports = generateMarkdown;
