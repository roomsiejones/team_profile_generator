const { expect } = require('@jest/globals');
const Employee = require('../lib/Employee.js');

describe('Employee class', () =>{
    it('Should return a name', () => {
        const employee = new Employee('Jonathon');

        expect(employee.name).toEqual('Jonathon');
    })

    it('should return an email when using getemail', () => {
        const employee = new Employee('Jonathon', 32423, 'jon@gmail.com');

        expect(employee.getEmail()).toBe('jon@gmail.com');
    })
})