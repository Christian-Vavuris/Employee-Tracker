const inquirer = require('inquirer')
const sqlite3 = require('sqlite3')
const cTable = require('console.table');

let db = new sqlite3.Database('./db/database.db', (err) => {
    if (err) {
      return console.error(err.message);
    }
    // console.log('Connected to the in-memory SQlite database.');
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
        choices: ["View all departments", "View all roles", "View all employees", "Add a department", "Add a role", "Add an employee", "Update an employee Role"]
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
          console.table(rows)
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
           console.table(rows)
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
           console.table(rows)
         });
         db.close;
    }
    if (toDo === "Add a department") {
        // console.log("Add a department")

        //get responses from inquirer

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

        // take get responses from inquirer

        inquirer.prompt([
            {
                type: 'input',
                name:'role_title',
                message: 'What is the name of the role you would like to add?',
            },
            {
                type: 'input',
                name:'role_salary',
                message: 'What amount, in dollars, will this role be paid?',
            },
            {
                type: 'input',
                name:'role_department_id',
                message: 'What department will this role be in?',
            },
          ])
          .then(answers => {
              let roleTitle = answers.role_title;
              let roleSalary = answers.role_salary;
              let roleDepartment = answers.role_department_id;
          
        // Write script that adds a role
        let query5 = `INSERT INTO roles (title, salary, department_id) VALUES (?, ?, ?);`;
        db.run(query5, [roleTitle, roleSalary, roleDepartment], (err,rows) => {
         if (err) {
             throw err;
           }
           console.log(`You inserted a new role called ${roleTitle}`)
           });
         });
         db.close;
    }
    if (toDo === "Add an employee") {
        // console.log("Add an employee")

        // take get responses from inquirer

        inquirer.prompt([
            {
                type: 'input',
                name:'employee_first_name',
                message: 'What is the first name of the new employee?',
            },
            {
                type: 'input',
                name:'employee_last_name',
                message: 'What is the lasat name of the new employee?',
            },
            {
                type: 'input',
                name:'role_id',
                message: 'What role will this employee have',
            },
            {
                type: 'input',
                name:'manager_id',
                message: 'What is the role ID of their new manager?',
            },
            
          ])
          .then(answers => {
              let firstName = answers.employee_first_name;
              let lastName = answers.employee_last_name;
              let roleId = answers.role_id;
              let managerId = answers.manager_id
          
        // Write script that adds a department
        let query5 = `INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?);`;
        db.run(query5, [firstName, lastName, roleId, managerId], (err,rows) => {
         if (err) {
             throw err;
           }
           console.log(`${firstName} ${lastName} has been added to the employeee database.`)
           });
         });
         db.close;
    }
};

// makeItNice();
questions();


