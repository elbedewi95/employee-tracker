const inquirer = require("inquirer");
const mysql = require ("mysql2");
require("console.table");
// Connect to database
const db = mysql.createConnection(
    {
      host: 'localhost',
      port: 3306,
      // MySQL username,
      user: 'root',
      // MySQL password
      password: 'abc123...',
      database: 'company_db'
    },
    console.log(`Connected to the company_db database.`),
    promptOptions()

  );
  

  // First Prompt
function promptOptions() {

    inquirer.prompt({
        type: "list",
        name: "options",
        message: "Select an Option",
        choices: [
          "View all departments",
          "View all roles",
          "View all employees",
          "Add a department",
          "Add a role",
          "Add an employee",
          "Update an employee role",
          "End"]
      })
      .then(function ({ options }) {
        switch (options) {
          case "View all departments":
            viewDepartments();
            break;
  
          case "View all roles":
            viewRoles();
            break;
        
          case "View all employees":
            viewEmployees();
            break;
  
          case "Add a department":
           // addDepartment();
            break;

          case "Add a Role":
           // addRole();
            break;
          case "Add an Employee":
           // addEmployee();
            break;

          case "Update an employee role":
           // updateEmployeeRole();
            break;
  
  
          case "End":
            db.end();
            break;
        }
      });
  }
//query display all depts
  function viewDepartments(){
    db.query('SELECT * FROM department', function (err, results) {
        console.table(results);
        inquirer.prompt({
            type: "list",
            name: "options",
            message: "Select an Option",
            choices: [
              "Return to main menu",
              "End"]
          })
          .then(function ({ options }) {
            switch (options) {
                case "Return to main menu":
                    promptOptions();
                    break;

                case "End":
                    db.end();
                    break;
            }
      });
    });
}
  
//query display all roles
  function viewRoles(){
    db.query('SELECT * FROM roles', function (err, results) {
        console.table(results);
        inquirer.prompt({
            type: "list",
            name: "options",
            message: "Select an Option",
            choices: [
              "Return to main menu",
              "End"]
          })
          .then(function ({ options }) {
            switch (options) {
                case "Return to main menu":
                    promptOptions();
                    break;

                case "End":
                    db.end();
                    break;
            }
      });
      });
  }

  function viewEmployees(){
    db.query('SELECT * FROM employees', function (err, results) {
        console.table(results);
        inquirer.prompt({
            type: "list",
            name: "options",
            message: "Select an Option",
            choices: [
              "Return to main menu",
              "End"]
          })
          .then(function ({ options }) {
            switch (options) {
                case "Return to main menu":
                    promptOptions();
                    break;

                case "End":
                    db.end();
                    break;
            }
      });
      });
  }