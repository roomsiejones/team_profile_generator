const { expect, it } = require('@jest/globals');
const Intern = require('../lib/Intern.js');

describe('Intern class', () =>{
    it('Should return a name', () => {
        const intern = new Intern('Jonathon', 32423, 'jon@gmail.com', 'Georgia Tech');

        expect(intern.name).toEqual('Jonathon');
    })

    it('should return the intern\'s id', () => {
        const intern = new Intern('Jonathon', 32423, 'jon@gmail.com', 'Georgia Tech');

        expect(intern.id).toEqual(32423);
    })

    it('should return an email address', () => {
        const intern = new Intern('Jonathon', 32423, 'jon@gmail.com', 'Georgia Tech');

        expect(intern.email).toEqual('jon@gmail.com');
    })

    it('should return a school', () => {
        const intern = new Intern('Jonathon', 32423, 'jon@gmail.com', 'Georgia Tech');

        expect(intern.school).toEqual('Georgia Tech');
    })

    it('should return the intern\'s name when using the function getName', () => {
        const intern = new Intern('Jonathon', 32423, 'jon@gmail.com', 'Georgia Tech');

        expect(intern.getName()).toBe('Jonathon');
    })
    
    it('should return the intern\'s id when using the function getId', () => {
        const intern = new Intern('Jonathon', 32423, 'jon@gmail.com', 'Georgia Tech');

        expect(intern.getId()).toBe(32423);
    })

    it('should return an email when using getEmail', () => {
        const intern = new Intern('Jonathon', 32423, 'jon@gmail.com', 'Georgia Tech');

        expect(intern.getEmail()).toBe('jon@gmail.com');
    })

    it('should return a school when getSchool function is called', () => {
        const intern = new Intern('Jonathon', 32423, 'jon@gmail.com', 'Georgia Tech');

        expect(intern.getSchool()).toBe('Georgia Tech');
    })

    it('should return intern when using getRole', () => {
        const intern = new Intern('Jonathon', 32423, 'jon@gmail.com', 'Georgia Tech');

        expect(intern.getRole()).toBe('Intern');
    })
})