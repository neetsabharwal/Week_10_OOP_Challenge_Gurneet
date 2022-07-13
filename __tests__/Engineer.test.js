const engineer = require('../lib/Engineer.js')

test('creates an engineer',()=>{
    const person = new engineer('Sunny','1','sunny_engineer@gmail.com','neetsabharwal');

    expect(person.getEmployeeName()).toBe('Sunny');
    expect(person.getEmployeeId()).toBe('1');
    expect(person.getEmployeeEmail()).toBe('sunny_engineer@gmail.com');
    expect(person.getEngineerUsername()).toBe('neetsabharwal');
    expect(person.getRole()).toBe('Engineer');
});