import inquirer from "inquirer";
console.log("Welcome to the survey!");

const questions = [
  {
    type: "input",
    name: "firstName",
    message: "What's your first name?",
    validate: function (value) {
      if (!value) {
        return "Please enter your first name.";
      }
      return true;
    },
  },
  {
    type: "input",
    name: "email",
    message: function (answers) {
      return `Hello, ${answers.firstName}! What's your email address?`;
    },
    validate: function (value) {
      if (!value) {
        return "Please enter your email address.";
      }
      const valid = /\S+@\S+\.\S+/.test(value);
      if (!valid) {
        return "Please enter a valid email address.";
      }
      return true;
    },
  },
  {
    type: "list",
    name: "experienced",
    message: "Are you experienced Developer?",
    choices: ["Yes", "No"],
    validate: function (value) {
      if (!value) {
        return "Please select your experience level.";
      }
      return true;
    },
  },
  {
    type: "list",
    name: "yearsOfExperience",
    message: "How many years of experience do you have with JavaScript?",
    choices: ["0-1", "1-3", "3-5", "5-10", "10+"],
    when: function (answers) {
      return answers.experienced === "Yes";
    },
    validate: function (value) {
      if (!value) {
        return "Please select your years of experience.";
      }
      return true;
    },
  },
  {
    type: "checkbox",
    name: "libraries",
    message: "What JavaScript library do you know?",
    choices: ["React.js", "Vue", "Angular", "Node.js", "jQuery", "D3.js"],
    when: function (answers) {
      return answers.experienced === "Yes";
    },
    validate: function (value) {
      if (!value || value.length === 0) {
        return "Please select at least one library.";
      }
      return true;
    },
  },
  {
    type: "number",
    name: "desiredSalary",
    message: "What is your desired salary?",
    when: function (answers) {
      return answers.experienced === "Yes";
    },
    validate: function (value) {
      if (!value || value <= 0) {
        return "Please enter a salary.";
      }
      return true;
    },
  },
];

// run your command
inquirer.prompt(questions).then((answers) => {
  console.log('Thank you for answering the questions!');
  console.log('Your answers:', answers);
});