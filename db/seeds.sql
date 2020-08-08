-- You can't get this data into the tables because the tables won't generate



INSERT INTO departments (id, name)
VALUES (1, "Engineering"),
(2, "Sales"),
(3, "Customer_Support"),
(4, "Executive");


INSERT INTO roles (roles_id, title, salary, department_id)
VALUES (1, "materials_enineeer", 75000, 1),
(2, "software_enineeer", 90000, 1),
(3, "CE0", 200000, 4),
(4, "account_executive", 60000, 2),
(5, "support_representative", 40000, 3);

INSERT INTO employees (employees_id, first_name, last_name, role_id, manager_id)
VALUES (1, "John", "Stamos", 3, NULL),
(2, "Mark", "Jacobs", 4, 3),
(3, "Deborah", "Ellis", 5, 6),
(4, "Irving", "DeMartino", 5, 6),
(5, "Jaques", "DeLaMontangne", 6, 3),
(6, "Shreyas", "Karwa", 2, 3),
(7, "Eenrique", "Cannata", 2, 3),
(8, "Rich", "Green", 1, 3),
(9, "Jerry", "Xia", 1, 3);