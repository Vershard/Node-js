function readGenerator(answers) {
    return  `
    ## Title
    ${answers.Title}
    ## Description 
    ${answers.Description}
    
    ## Table of Contents
    1. [Installation](#Installation)
    2. [Usage](#Usage)
    3. [License](#License)
    
    
    ## Installation
    ${answers.Installation}
    ## Usage
    ${answers.Usage}
    ## License
    ${answers.License}

  `;
  }
  
  module.exports = readGenerator;