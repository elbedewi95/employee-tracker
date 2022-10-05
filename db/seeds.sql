INSERT INTO department (id, name)
VALUES (001, "Finance"),
       (003, "IT"),
       (005, "Retail"),
       (007, "Marketing"),
       (009, "Training"),
       (011, "Legal");

INSERT INTO roles (id, title, salary, department_id)
VALUES (0011, "Accountant", 76000.00, 001),
       (0012, "CFO", 160000.00, 001),
       (0034, "Senior Developer", 170000.00, 003),
       (0031, "Full-Stack Developer", 120000.00, 003),
       (0052, "Customer Service", 45000.00, 005),
       (0055, "Store Manager", 85000.00, 005),
       (0073, "Advetrising Manager", 90000.00, 007),
       (0098, "Training Instructor", 75000.00, 009),
       (0095, "Trainer", 70000.00, 009),
       (0131, "Lawyer", 135000.00, 011);

INSERT INTO employees (id, first_name, last_name, role_id, manager_id)
VALUES (3135, "John", "Doe", 0034, null),
       (5356, "Jane", "Doe", 0055, null),
       (1231, "Oliver", "Twist", 0012, null),
       (1145, "Joseph", "Johnson", 0011, 1231),
       (11573, "Saul", "Smith", 0131, null),
       (5237, "Angela", "Jordan", 0052, 5356),
       (3173, "Moe", "Star", 0031, 3135),
       (7371, "Chandler", "Bing", 0073, null),
       (9831, "Sam", "Sawyer", 0098, null),
       (9552, "Clara", "Chaplin", 0095, 9831);
