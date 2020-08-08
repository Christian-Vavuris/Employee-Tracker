const inquirer = require('inquirer')
const sqlite3 = require('sqlite3')

let db = new sqlite3.Database('./db/database.db', (err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('Connected to the in-memory SQlite database.');
  });

// need to add .headers on and .mode column here
// const makeItNice = function () {
//     db.run('.headers on');
//     db.run('.mode column');
//     db.close()
// }

// inquirer code

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
    // console.log(answers.Question);
    followUpQuestions(answers.Question);
  });
};

const followUpQuestions =function(toDo) {
    if (toDo === "View all departments") {
        // console.log("View all departments")
        // Write script that returns all departments
       let query1 = `SELECT * FROM departments;`;
       db.all(query1, [], (err,rows) => {
        if (err) {
            throw err;
          }
          rows.forEach((row) => {
            console.log(row);
          });
        });
        db.close;
    }
    if (toDo === "View all roles") {
        // console.log("View all roles")
        // Write script that returns all roles
        let query2 = `SELECT * FROM roles;`;
        db.all(query2, [], (err,rows) => {
         if (err) {
             throw err;
           }
           rows.forEach((row) => {
             console.log(row);
           });
         });
         db.close;
    }
    if (toDo === "View all employees") {
        // console.log("View all employees")
        // Write script that returns all employees
        let query3 = `SELECT * FROM employees;`;
        db.all(query3, [], (err,rows) => {
         if (err) {
             throw err;
           }
           rows.forEach((row) => {
             console.log(row);
           });
         });
         db.close;
    }
    if (toDo === "Add a department") {
        // console.log("Add a department")

        // take get responses from inquirer

        inquirer.prompt([
            {
                type: 'input',
                name:'department',
                message: 'What is the name of the department you would like to add?',
            },
          ])
          .then(answers => {
              let deptName = answers.department;
          
        // Write script that adds a department
        let query4 = `INSERT INTO departments(name) VALUES (?);`;
        db.run(query4, [deptName], (err,rows) => {
         if (err) {
             throw err;
           }
           console.log(`You inserted a new department called ${deptName}`)
           });
         });
         db.close;
         }
    if (toDo === "Add a role") {
        // console.log("Add a role")
        // Write script that adds a role
    }
    if (toDo === "Add an employee") {
        // console.log("Add an employee")
        // Write script that adds an employee
    }
};

// makeItNice();
questions();


