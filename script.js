const inquirer = require('inquirer')


const questions = function () {

    console.log("welcome to the employee management system!")
    return inquirer.prompt([
    {
        type: 'list',
        name:'Question',
        message: 'What would you like to do?',
        choices: ["View all departments", "View all roles", "View all employees", "Add a department", "Add a role", "Add an employee",]
    },
  ])
  .then(answers => {
    console.log(answers.Question);
    return answers.Question;
  });
};

const followUpQuestions =function(toDo) {
    if (toDo === "View all departments") {
        console.log("success")
    }
    else {
        console.log("failure")
    }
};

// questions();
followUpQuestions(questions());
// followUpQuestions("View departments");

