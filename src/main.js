const inquirer = require('inquirer');

const Manager = require('../src/Manager.js');
const Engineer = require('../src/Engineer.js');
const Intern = require('../src/Intern.js');
const HTMLCreate = require('./HTMLCreate.js');

class App {
    // this is going to hold all the employees that are generated
    constructor() {
        this.employees = [];
    }
// using async and await are going to make sure that everything I used with await, waits for a promise and everything I do with async IS a promise and helps keep 'manage' the code and when it runs
    async run() {
        try {
          // We always have a manager first so once that is populated, we will run this
          await this.addManager();
        } catch (error) {
          console.log('Try again: Error' + error);
          return this.run();
        }
// will go to select if we want a new employee or not
        await this.addMenu();
  }

        async addManager() {
            const answers = await inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: 'Enter the Manager\'s name.',
            },
            {
                type: 'number',
                name: 'id',
                message: 'Enter the Manager\'s ID number.',
            },
            {
                type: 'input',
                name: 'email',
                message: 'Enter the Manager\'s email',
            },
            {
                type: 'number',
                name:'officeNumber',
                message: 'Enter the phone number with formatting like 5345551212 where the Manager can be reached',
            },

        ]);
        this.employees.push(
            new Manager(
                answers.name,
                answers.id,
                answers.email,
                answers.officeNumber
                )
            );
        }

        async addMenu() {
            try {
              console.log('This is your current number of employees: ' + this.employees.length);
              const answers = await inquirer.prompt([
                {
                  type: 'list',
                  name: 'other',
                  message: 'Do you have another employee to add?',
                  choices: ['Engineer', 'Intern', 'I\'m finished adding employees.'],
                },
              ]);
              switch (answers.other) {
                case 'Engineer':
                  await this.addEngineer();
                  break;
                case 'Intern':
                  await this.addIntern();
                  break;
                default:
                  // No more to be added, goto the last function to create the page
                  await this.finish();
              }
            } catch (error) {
                console.log('Try again: Error' + error);
                return this.addMenu();
            }
          }

        async addEngineer() {
            const answers = await inquirer.prompt([
              {
                type: 'input',
                name: 'name',
                message: 'Enter the Engineer\'s name',
              },
              {
                type: 'number',
                name: 'id',
                message: 'Enter the Engineer\'s id',
              },
              {
                type: 'input',
                name: 'email',
                message: 'Enter the Engineer\'s email',
              },
              {
                type: 'input',
                name: 'github',
                message: 'Enter the Engineer\'s github username',
              },
            ]);
            this.employees.push(
              new Engineer(answers.name, answers.id, answers.email, answers.github)
            );
            await this.addMenu();
          }

          async addIntern() {
            const answers = await inquirer.prompt([
              {
                type: 'input',
                name: 'name',
                message: 'Please enter the Intern\'s name:',
              },
              {
                type: 'number',
                name: 'id',
                message: 'Please enter the Intern\'s id:',
              },
              {
                type: 'input',
                name: 'email',
                message: 'Please enter the Intern\'s email:',
              },
              {
                type: 'input',
                name: 'school',
                message: 'Please enter the Intern\'s school:',
              },
            ]);
            this.employees.push(
              new Intern(answers.name, answers.id, answers.email, answers.school)
            );
            await this.addMenu();
          }

          async finish() {
            const pageCreate = new HtmlGenerator();
            try {
              await pageCreate.createHtml(this.employees);
            } catch (error) {
              console.log('Couldn\'t write to HTML file: ' + error);
            }
          }
}

module.exports = main;