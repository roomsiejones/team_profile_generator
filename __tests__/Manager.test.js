const { expect, it } = require('@jest/globals');
const Manager = require('../lib/Manager.js');

describe('Manager class', () =>{
    it('Should return a name', () => {
        const manager = new Manager('Jonathon', 32423, 'jon@gmail.com', '850.850.8555');

        expect(manager.name).toEqual('Jonathon');
    })

    it('should return the manager id', () => {
        const manager = new Manager('Jonathon', 32423, 'jon@gmail.com', '850.850.8555');

        expect(manager.id).toEqual(32423);
    })

    it('should return an email address', () => {
        const manager = new Manager('Jonathon', 32423, 'jon@gmail.com', '850.850.8555');

        expect(manager.email).toEqual('jon@gmail.com');
    })

    it('should return a phone number', () => {
        const manager = new Manager('Jonathon', 32423, 'jon@gmail.com', '850.850.8555');

        expect (manager.officeNumber).toEqual('850.850.8555');
    })

    it('should return the manager name when using the function getName', () => {
        const manager = new Manager('Jonathon', 32423, 'jon@gmail.com', '850.850.8555');

        expect(manager.getName()).toBe('Jonathon');
    })
    
    it('should return the manager id when using the function getId', () => {
        const manager = new Manager('Jonathon', 32423, 'jon@gmail.com', '850.850.8555');

        expect(manager.getId()).toBe(32423);
    })

    it('should return an email when using getEmail', () => {
        const manager = new Manager('Jonathon', 32423, 'jon@gmail.com', '850.850.8555');

        expect(manager.getEmail()).toBe('jon@gmail.com');
    })

    it('should return a phone number when using getofficeNumber function', () => {
        const manager = new Manager('Jonathon', 32423, 'jon@gmail.com', '850.850.8555');

        expect (manager.getofficeNumber()).toBe('850.850.8555');
    })

    it('should return manager when using getRole', () => {
        const manager = new Manager('Jonathon', 32423, 'jon@gmail.com', '850.850.8555');

        expect(manager.getRole()).toBe('Manager');
    })
})