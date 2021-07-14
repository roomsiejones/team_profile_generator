const { expect, it } = require('@jest/globals');
const Engineer = require('../lib/Engineer.js');

describe('engineer class', () =>{
    it('Should return a name', () => {
        const engineer = new Engineer('Jonathon', 32423, 'jon@gmail.com', 'RoomsieJones');

        expect(engineer.name).toEqual('Jonathon');
    })

    it('should return the engineer id', () => {
        const engineer = new Engineer('Jonathon', 32423, 'jon@gmail.com', 'RoomsieJones');

        expect(engineer.id).toEqual(32423);
    })

    it('should return an email address', () => {
        const engineer = new Engineer('Jonathon', 32423, 'jon@gmail.com', 'RoomsieJones');

        expect(engineer.email).toEqual('jon@gmail.com');
    })

    it('should return the github name', () => {
        const engineer = new Engineer('Jonathon', 32423, 'jon@gmail.com', 'RoomsieJones');

        expect(engineer.github).toEqual('RoomsieJones');
    })

    it('should return the engineer name when using the function getName', () => {
        const engineer = new Engineer('Jonathon', 32423, 'jon@gmail.com', 'RoomsieJones');

        expect(engineer.getName()).toBe('Jonathon');
    })
    
    it('should return the engineer id when using the function getId', () => {
        const engineer = new Engineer('Jonathon', 32423, 'jon@gmail.com', 'RoomsieJones');

        expect(engineer.getId()).toBe(32423);
    })

    it('should return an email when using getEmail', () => {
        const engineer = new Engineer('Jonathon', 32423, 'jon@gmail.com', 'RoomsieJones');

        expect(engineer.getEmail()).toBe('jon@gmail.com');
    })

    it('should return the github name when the getGithub function is called', () => {
        const engineer = new Engineer('Jonathon', 32423, 'jon@gmail.com', 'RoomsieJones');

        expect(engineer.getGithub()).toEqual('RoomsieJones');
    })

    it('should return engineer when using getRole', () => {
        const engineer = new Engineer('Jonathon', 32423, 'jon@gmail.com', 'RoomsieJones');

        expect(engineer.getRole()).toBe('Engineer');
    })
})