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
            addDepartment();
            break;

          case "Add a role":
            addRole();
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
      console.log(results);
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
//query to display all employees
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

  //function to add a department
  function addDepartment(){
    console.log("Lets add a department!");
    inquirer.prompt([
        {
            type: "input",
            name: "id",
            message: "What is the department id?"
        },
        {
            type: "input",
            name: "name",
            message: "What is the department name?"
        }
    ]).then(answer => {
        console.log(`id is : ${parseInt(answer.id)}, name is :
        ${answer.name}`)
        db.query("INSERT INTO department SET ?",{id: parseInt(answer.id), name: answer.name},function(err, results){
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
        })
    })
  }


   //function to add a role
   function addRole(){
    
    console.log("Lets add a Role!");
    inquirer.prompt([
        {
            type: "input",
            name: "id",
            message: "What is the role id?"
        },
        {
            type: "input",
            name: "title",
            message: "What is the role title?"
        },
        {
            type: "input",
            name: "salary",
            message: "What is the salary for this role?"
        },
        {
            type: "list",
            name: "dept_id",
            message: "Which department does this role belong?",
            choices: ["001. Finance", "003. IT", "005. Retail", "007. Marketing", "009. Training", "011. Legal"]
        }
    ]).then(answer => {
        db.query("INSERT INTO roles SET ?",{id: parseInt(answer.id), title: answer.title, salary: parseFloat(answer.salary), department_id: parseInt(answer.dept_id.slice(0,3))},function(err, results){
          console.log(err);
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
              })
          })
        }

     