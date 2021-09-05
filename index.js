const inquirer = require('inquirer');
const sql = require('mysql2');
const table = require('console.table');

const questions = require("./assets/promptQuestions");

const logo = require('asciiart-logo')
const connection = require('./config/connection');

renderlogo();
start();


function renderlogo () {
console.log(
logo({
name: "Employee Management System",
font:"Calvin S",
lineChars: 10,
padding: 2,
margin:3,
borderColor: "blue",
logoColor:"red",
textColor: "white"
}).render()
);
}

async function start() {
const userChoice = await inquirer.prompt(questions.mainMenu);

switch (userChoice.mainMenu) {
    case "View All Departments":
    viewDepartment();
    break;
    case "View All Roles":
    viewRole();
    break;
    case "View All Employees":
        viewEmployee();
        break;
    case "Add Employee":
    addEmployee();
    break;
    case "Add Department":
    addDepartment();
    break;
    case "Add Role":
        addRole();
    break;
    case "Update Employee":
    updateEmployee();
    break;
    case "Quit":
        Quit();
}
}

function viewDepartment() {
console.log("Department Table\n");
connection.query(
    "SELECT id as `ID`, departments_name AS `Department` FROM departments",
    function (err,res) {
    if (err) {
    console.log (error) 
    }
    console.table(res);
    start();
    }
);
}


function viewRole() {
    console.log("Company Toles\n");
    connection.query(
        "SELECT title AS `Title`, salary AS `Salary`, department_id AS `Department Id` FROM roles",
        function (err,res) {
            if (err) {
                console.log(err);
            }
            console.table(res);
            start();
        }
    );
}





function viewEmployee() {
    console.log("All COmpany Employee\n");
    connection.query(
        "SELECT first_name AS `First Name` last_name AS `Last Name`, role_id AS `Role Id`FROM employees",
        function (err,res) {
            if (err) {
                console.log (err);
            }
            console.table(err);
            start();
        }
    );
}


async function addEmployee() {
    let qry = 
    "SELECT id as value, CONCAT(first_name, '',last_name) as name FROM employees";
    connection.query(qry,async(err, employees)=> {
        qry= "SELECT id as value, title as name FROM roles";
        connection.query(qry,async(err,roles) => {
            const newEmp = await inquirer.prompt(
                questions.addNewEmployee(roles,employees)
            );
            qry = "INSERT INTO employees SET?";
            connection.query(qry,newEmp,function(err){
                if (err) {
                    console.log(err)
                } console.log("New employee was added succesfully");
                start();
            });
        });
    });
}

async function addDepartment() {
    const departmentDetails = await inquirer.prompt(questions.addNewDepartment());
    connection.query(
        "INSERT INTO departments SET?",
        {
            departments_name: departmentDetails.departments_name,
        },
        function(err) {
            if (err){
                console.log(err);
            }
            console.log ("New department was added successfully");

            start()
        }
    );
}


async function addRole() {
    const roleDetails = await inquirer.prompt(questions.addNewRole());
    connection.query(
        "INSERT INTO roles SET?",
        {
            title: roleDetails.titleRole,
            salary: roleDetails.salary,
            department_id: roleDetails.department_id,
        },
        function (err) {
            if (err) {
                console.log(err);
            }
            console.log('New department was added successfully');
            start();
        }
    );
}




async function updateEmployee() {
    connection.query("SELECT * FROM employees", async (err,employee) => {

        const { worker, newrole} = await inquirer.prompt([
            {
                type:"list",
                message:"Choose an employee to update",
                name:"worker",
                choices:() => {
                    return employee.map((employee) => employee.last_name);
                },
            },
            {
                type:"list",
                message: "What is this employee's new role",
                name:"newrole",
                choices: () => {
                    return employee.map((employee) => employee.role_id);
                }
            },
        ]);
            connection.query(
                "UPDATE employees SET? WHERE?",
            [
                {
                role_id:newrole,
                },
                {
                    last_name:worker,
                },
            ],
                function (err,res) {
                    if(err) {
                        console.log(err);
                    }
                    console.log (res.affectedRows + "employee updated!\n");

                    console.table(employee);

                    start();
                }
        );
    });
}

function Quit() {
    console.log("Thank for using our Employee Management System")
}






