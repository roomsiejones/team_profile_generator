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
          // We always have a manager first
          await this.addManager();
        } catch (error) {
          console.log("Try again: Error" + error);
          return this.run();
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


















}