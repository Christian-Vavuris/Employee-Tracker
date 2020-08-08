-- Why wont these tables generate when I run "npm run migrate"
DROP TABLE IF EXISTS departments;
DROP TABLE IF EXISTS roles;
DROP TABLE IF EXISTS employees;

CREATE TABLE departments (
    id INTEGER PRIMARY KEY,
    name VARCHAR (30)
);

CREATE TABLE roles (
    roles_id INTEGER PRIMARY KEY,
    title VARCHAR (30), 
    salary DECIMAL, 
    department_id INTEGER 
);

CREATE TABLE employees (
    employees_id INTEGER PRIMARY KEY, 
    first_name VARCHAR (30),
    last_name VARCHAR (30), 
    role_id INTEGER, 
    manager_id INTEGER 
);
