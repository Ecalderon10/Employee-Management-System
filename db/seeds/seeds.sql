INSERT INTO
departments (department_name)

VALUES
(
"Executive",
"Sales",
"HR",
"Engineering",
"Finance",
"Marketing"
)

INSERT INTO
roles (title,Salary,department_id)

VAlUES 

("CEO", 1000000, 1),
("CFO", 8000000, 1),
("COO", 8000000, 1),

("Director of Sales", 600000,2),
("Sales Manager", 3000000, 2),
("Saleperson", 150000, 2),
("Salesperson", 150000,2),


("Director of HR", 6000, 3),
("Manager of HR", 300000, 3),
("Talent Recruiter", 150000,3),


("Director of Engineering", 600000,4),
("Manager of Engineering", 300000,4),
("Engineer", 200000,4),
("Scrum Master", 250000,4)
("Director of Finance", 600000,5),
("Manager of Money", 300000, 5),
("Accountant", 100000, 5),
("Analyst of Finance", 100000, 5),

("Director of MArketing", 600000, 6),
("Content MAnager", 300000, 6),
("Social Media Manager", 50000, 6),

INSERT INTO

employees (first_name, last_name, role_id, manager_id)

VALUES
("Cristiano", "Ronaldo", 1,1),
("Lionel", "MESSI", 2,1),
("Paul", "Pogba", 3,1),
("Eddie", "Chappie", 4,1),
("Lebron", "James", 5,4),
("Julia", "Roberts", 6,5),
("Jennifer", "Aniston", 7,5),
("JK", "Rowling", 8,2),
("Matthew", "McConaughey", 9,8),
("Shaquiel", "Onieal", 10,9),
("Jordan", "Belford", 11,3),
("Gareth", "Bale", 12,11),
("Alex", "Morgan", 13,12),
("James", "Arthur", 14,12),
("Max" "Johnson", 15,11),
("Dwight", "Howard", 16,2),
("Magic", "Johnson", 17,16),
("Dr." "Dre", 18,17),
("Bill" "Cosby",19,17)
("Mike", "Jones", 20, 1),
("Nicholas", "Cage", 21,20),
("Ben", "Aflack", 22,20);

SELECT
employee.first_name,
employee.last_name,
roles.title,
roles.salary,
department.department_name,
employee.first_name as manager_firstname,
employee.last_name as manager_lastname;

FROM
employee
JOIN roles on employee.role_id = roles.id 
JOIN department on roles.department_id= department.id 
LEFT JOIN employee as employee on employee.manager_id = emplyee.id;

SELECT 
*
FROM
department;
SELECT 
*
FROM
roles;
SELECT
*
FROM
employee;