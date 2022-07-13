const intern = require('../lib/Intern.js')

test('creates an intern',()=>{
    const person = new intern('Sunny','1','sunny_intern@gmail.com','UfT');

    expect(person.getEmployeeName()).toBe('Sunny');
    expect(person.getEmployeeId()).toBe('1');
    expect(person.getEmployeeEmail()).toBe('sunny_intern@gmail.com');
    expect(person.getInternSchool()).toBe('UfT');
    expect(person.getRole()).toBe('Intern');
});