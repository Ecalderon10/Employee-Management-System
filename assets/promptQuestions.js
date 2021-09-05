module.exports = {
    mainMenu: {
        type:"list",
        message:
        "Please Select an option from the menu below to proceed:",

        choices: [
            "View All Departments",
            "View All Employees",
            "View All Roles",
            "Add Employee",
            "Add Department",
            "Add Role",
            "Update Employee",
            "Quit",
        ],
        name: "mainMenu", 
    },

    addNewEmployee: (roles,employees) => [
        {
            type: "input",
            message: "What is the employee's first name?",
            name: "first_name",
        },
        {
            type: "input",
            message: "What is the employee's last name?",
            name: "last_name",
        },
        {
            type: "list",
            message: "What is the employee's role ID?",
            name: "role_id",
            choices: roles,
        },
        {
            type: "list",
            message: "What is the name of the department?",
            name: "department_name",
        },

    ],


    addNewDepartment: () => [
        {
            type:"input",
            message: "what is the title of your new role id?",
            name:"titleRole",
        },

        {
            type:"input",
            message: "What is the salary for this role?",
            name:"salary"
        },

        {
            type:"input",
            message:"what is the Department id for this role?",
            name:"departmentIDrole",
        },
    ],
};