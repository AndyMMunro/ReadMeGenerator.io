// function to generate markdown for README
function generateMarkDown(answers) {
  return `
  
  ## ${answers.title}
  
  ## Description
  ${answers.description}
  
  ## Table Of Contents 
   
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Questions](#questions)
  * [Test](#test)

  Installation
  ${answers.installation}
 
  Usage
  ${answers.usage}
  
  License 
  ${answers.Licenses}
  
  Contributing
  ${answers.contributing}
  
  Test
  ${answers.testing}

## Questions 
If you have any questions about the repo,
open an issue or contact me directly at ${answers.username}. 
You can find more of my work at ${answers.email}.

`;
};

module.exports = generateMarkDown;
