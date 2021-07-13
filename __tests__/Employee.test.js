const { expect, it } = require('@jest/globals');
const Employee = require('../lib/Employee.js');

describe('Employee class', () =>{
    it('Should return a name', () => {
        const employee = new Employee('Jonathon', 32423, 'jon@gmail.com');

        expect(employee.name).toEqual('Jonathon');
    })

    it('should return the employee id', () => {
        const employee = new Employee('Jonathon', 32423, 'jon@gmail.com');

        expect(employee.id).toEqual(32423);
    })

    it('should return an email address', () => {
        const employee = new Employee('Jonathon', 32423, 'jon@gmail.com');

        expect(employee.email).toEqual('jon@gmail.com');
    })

    it('should return the employee name when using the function getName', () => {
        const employee = new Employee('Jonathon', 32423, 'jon@gmail.com');

        expect(employee.getName()).toBe('Jonathon');
    })
    
    it('should return the employee id when using the function getId', () => {
        const employee = new Employee('Jonathon', 32423, 'jon@gmail.com');

        expect(employee.getId()).toBe(32423);
    })

    it('should return an email when using getEmail', () => {
        const employee = new Employee('Jonathon', 32423, 'jon@gmail.com');

        expect(employee.getEmail()).toBe('jon@gmail.com');
    })

    it('should return Employee when using getRole', () => {
        const employee = new Employee('Jonathon', 32423, 'jon@gmail.com');

        expect(employee.getRole()).toBe('Employee');
    })
})