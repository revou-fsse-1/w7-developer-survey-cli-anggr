import inquirer from "inquirer";

const questions = [
  {
    type: "input",
    name: "name",
    message: "What is your name?",
    validate: function (value) {
      if (value.trim().length === 0) {
        return "Please enter your name.";
      }
      return true;
    },
  },
  {
    type: "input",
    name: "email",
    message: function (answers) {
      return `Hello, ${answers.name}! What is your email address?`;
    },
    validate: function (value) {
      // Check if the input is a valid email address
      const valid = /\S+@\S+\.\S+/.test(value);
      if (!valid) {
        return "Please enter a valid email address.";
      }
      return true;
    },
  },
];

// run your command
inquirer
  .prompt(questions)
  .then((answers) => {
    console.log(JSON.stringify(answers, null, 2));
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log("Your console environment is not supported!");
    } else {
      console.log(error);
    }
  });
